import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, MapPin, Loader2, MessageCircle } from "lucide-react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface CepInfo {
  cep: string;
  city: string;
  state: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

interface Partner {
  cidade: string;
  estado: string;
  latitude: number;
  longitude: number;
  nome_empresa: string;
}

// Cache por região para evitar múltiplas consultas da mesma área
const regionCache = new Map<string, { partners: Partner[], timestamp: number }>();
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutos

export default function CepChecker() {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    cepInfo?: CepInfo;
    nearestPartner?: string;
  } | null>(null);

  const formatCep = (value: string) => {
    const numericOnly = value.replace(/\D/g, '');
    if (numericOnly.length <= 5) {
      return numericOnly;
    }
    return `${numericOnly.slice(0, 5)}-${numericOnly.slice(5, 8)}`;
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const getPartnersByRegion = async (state: string, city: string): Promise<Partner[]> => {
    const cacheKey = `${state}-${city}`;
    const now = Date.now();
    
    // Verificar cache por região
    const cached = regionCache.get(cacheKey);
    if (cached && (now - cached.timestamp) < CACHE_DURATION) {
      console.log(`📦 Usando cache para ${state}-${city}: ${cached.partners.length} parceiros`);
      return cached.partners;
    }

    console.log(`🔍 Buscando parceiros no estado ${state}...`);
    
    try {
      // Busca otimizada: apenas parceiros do estado
      const partnersCollection = collection(db, 'usuarios');
      const stateQuery = query(
        partnersCollection,
        where('tipo', '==', 'parceiro'),
        where('perfil_ativo', '==', true),
        where('estado', '==', state)
      );
      
      const querySnapshot = await getDocs(stateQuery);
      const partners: Partner[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.latitude && data.longitude) {
          partners.push({
            cidade: data.cidade,
            estado: data.estado,
            latitude: data.latitude,
            longitude: data.longitude,
            nome_empresa: data.nome_empresa
          });
        }
      });

      // Salvar no cache
      regionCache.set(cacheKey, { partners, timestamp: now });
      console.log(`✅ Cache atualizado para ${state}: ${partners.length} parceiros encontrados`);
      
      return partners;
    } catch (error) {
      console.error(`Erro ao buscar parceiros em ${state}:`, error);
      return [];
    }
  };

  const getStateCenter = (state: string): { lat: number, lng: number } | null => {
    const stateCenters: Record<string, { lat: number, lng: number }> = {
      'SP': { lat: -23.5505, lng: -46.6333 }, // São Paulo
      'RJ': { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro  
      'MG': { lat: -19.9167, lng: -43.9345 }, // Belo Horizonte
      'ES': { lat: -20.3155, lng: -40.3128 }, // Vitória
      'PR': { lat: -25.4284, lng: -49.2733 }, // Curitiba
      'SC': { lat: -27.5954, lng: -48.5480 }, // Florianópolis
      'RS': { lat: -30.0346, lng: -51.2177 }, // Porto Alegre
      'GO': { lat: -16.6864, lng: -49.2643 }, // Goiânia
      'MT': { lat: -15.6014, lng: -56.0979 }, // Cuiabá
      'MS': { lat: -20.4697, lng: -54.6201 }, // Campo Grande
      'DF': { lat: -15.8267, lng: -47.9218 }, // Brasília
      'BA': { lat: -12.9714, lng: -38.5014 }, // Salvador
      'SE': { lat: -10.9472, lng: -37.0731 }, // Aracaju
      'PE': { lat: -8.0476, lng: -34.8770 },  // Recife
      'AL': { lat: -9.6658, lng: -35.7350 },  // Maceió
      'PB': { lat: -7.1195, lng: -34.8450 },  // João Pessoa
      'RN': { lat: -5.7945, lng: -35.2110 },  // Natal
      'CE': { lat: -3.7319, lng: -38.5267 },  // Fortaleza
      'PI': { lat: -5.0892, lng: -42.8019 },  // Teresina
      'MA': { lat: -2.5387, lng: -44.2825 },  // São Luís
      'TO': { lat: -10.2128, lng: -48.3603 }, // Palmas
      'PA': { lat: -1.4558, lng: -48.5044 },  // Belém
      'AM': { lat: -3.1190, lng: -60.0217 },  // Manaus
      'RR': { lat: 2.8235, lng: -60.6758 },   // Boa Vista
      'AP': { lat: 0.0389, lng: -51.0664 },   // Macapá
      'AC': { lat: -9.9754, lng: -67.8249 },  // Rio Branco
      'RO': { lat: -8.7612, lng: -63.9039 }   // Porto Velho
    };
    
    return stateCenters[state] || null;
  };

  const getCepInfo = async (cep: string): Promise<CepInfo | null> => {
    try {
      // Tenta primeiro a BrasilAPI
      const brasilApiResponse = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
      if (brasilApiResponse.ok) {
        const data = await brasilApiResponse.json();
        return {
          cep: data.cep,
          city: data.city,
          state: data.state,
          coordinates: data.coordinates ? {
            lat: parseFloat(data.coordinates.latitude),
            lng: parseFloat(data.coordinates.longitude)
          } : undefined
        };
      }

      // Se BrasilAPI falhar, tenta ViaCEP
      const viaCepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (viaCepResponse.ok) {
        const data = await viaCepResponse.json();
        if (!data.erro) {
          return {
            cep: data.cep,
            city: data.localidade,
            state: data.uf
          };
        }
      }
      
      return null;
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      return null;
    }
  };


  const checkCoverageArea = async () => {
    if (!cep || cep.replace(/\D/g, '').length !== 8) {
      setResult({
        success: false,
        message: "Por favor, digite um CEP válido com 8 dígitos."
      });
      return;
    }

    setLoading(true);
    try {
      const cepInfo = await getCepInfo(cep.replace(/\D/g, ''));
      
      if (!cepInfo) {
        setResult({
          success: false,
          message: "CEP não encontrado. Verifique se o CEP está correto."
        });
        setLoading(false);
        return;
      }

      try {
        // BUSCA OTIMIZADA: Apenas parceiros do estado do CEP
        const partners = await getPartnersByRegion(cepInfo.state, cepInfo.city);
        
        if (partners.length === 0) {
          setResult({
            success: false,
            message: `No momento não temos equipes ativas em ${cepInfo.state}. Entre em contato para verificar se atendemos ${cepInfo.city}-${cepInfo.state}.`,
            cepInfo
          });
          setLoading(false);
          return;
        }

        // Usar coordenadas do CEP se disponíveis, senão usar coordenadas do centro do estado
        const clientCoordinates = cepInfo.coordinates || getStateCenter(cepInfo.state);
        
        if (!clientCoordinates) {
          setResult({
            success: false,
            message: `Não conseguimos localizar ${cepInfo.city}-${cepInfo.state}. Entre em contato para verificar cobertura.`,
            cepInfo
          });
          setLoading(false);
          return;
        }

        // Encontrar parceiro mais próximo no estado
        let nearestDistance = Infinity;
        let nearestPartnerCity = '';
        let hasNearbyPartner = false;

        partners.forEach(partner => {
          const distance = calculateDistance(
            clientCoordinates.lat,
            clientCoordinates.lng,
            partner.latitude,
            partner.longitude
          );

          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestPartnerCity = partner.cidade;
          }

          // Considerar "próximo" até 80km
          if (distance <= 80) {
            hasNearbyPartner = true;
          }
        });

        if (hasNearbyPartner) {
          setResult({
            success: true,
            message: `✅ Atendemos sua região! Temos equipes em ${cepInfo.state}.`,
            cepInfo
          });
        } else if (nearestDistance < Infinity) {
          const nearestKm = Math.round(nearestDistance);
          setResult({
            success: false,
            message: `Nossa equipe mais próxima está em ${nearestPartnerCity} (${nearestKm}km de ${cepInfo.city}). Entre em contato - podemos ter uma solução!`,
            cepInfo
          });
        } else {
          setResult({
            success: false,
            message: `Não conseguimos calcular distâncias em ${cepInfo.state}. Entre em contato para verificar cobertura.`,
            cepInfo
          });
        }

      } catch (error) {
        console.warn('Erro ao consultar parceiros:', error);
        setResult({
          success: false,
          message: `Erro ao verificar cobertura. Entre em contato para mais informações sobre ${cepInfo.city}-${cepInfo.state}.`,
          cepInfo
        });
      }

    } catch (error) {
      console.error('Erro ao verificar cobertura:', error);
      setResult({
        success: false,
        message: "Erro ao verificar cobertura. Tente novamente ou entre em contato conosco."
      });
    }
    
    setLoading(false);
  };

  const handleWhatsApp = () => {
    let message = '';
    
    if (result?.success && result.cepInfo) {
      // Se atende a região - Montar orçamento
      message = `Olá! Consultei no site e vocês atendem minha região! 

📍 CEP: ${cep}
📍 Cidade: ${result.cepInfo.city}-${result.cepInfo.state}

Gostaria de montar um orçamento para higienização de estofados.`;
    } else if (result?.cepInfo) {
      // Se não atende - Consultar disponibilidade
      message = `Olá! Consultei o site e gostaria de confirmar se vocês atendem minha região.

📍 CEP: ${cep} 
📍 Cidade: ${result.cepInfo.city}-${result.cepInfo.state}

O sistema mostrou que vocês não têm cobertura próxima, mas gostaria de verificar se há alguma possibilidade.`;
    } else {
      // Fallback
      message = `Olá! Gostaria de consultar se vocês atendem minha região - CEP ${cep}.`;
    }
    
    window.open(`https://wa.me/558004000022?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-center">
          <MapPin className="w-5 h-5 text-brand-gold" />
          Verificar Atendimento
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Digite seu CEP:</label>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="00000-000"
              value={cep}
              onChange={(e) => setCep(formatCep(e.target.value))}
              maxLength={9}
              className="flex-1"
            />
            <Button 
              onClick={checkCoverageArea}
              disabled={loading}
              className="bg-brand-gold text-brand-dark hover:bg-brand-gold/90"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Verificar"}
            </Button>
          </div>
        </div>

        {result && (
          <div className={`p-4 rounded-lg border-2 ${
            result.success 
              ? 'bg-green-50 border-green-200' 
              : 'bg-orange-50 border-orange-200'
          }`}>
            <div className="flex items-start gap-3">
              {result.success ? (
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              )}
              <div className="flex-1">
                <p className={`text-sm ${result.success ? 'text-green-800' : 'text-orange-800'}`}>
                  {result.message}
                </p>
                {result.cepInfo && (
                  <p className="text-xs text-gray-600 mt-2">
                    Localização: {result.cepInfo.city} - {result.cepInfo.state}
                  </p>
                )}
              </div>
            </div>
            
            <Button
              onClick={handleWhatsApp}
              className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white"
              size="sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {result.success ? "Montar Orçamento Agora" : "Falar com Atendimento"}
            </Button>
          </div>
        )}


      </CardContent>
    </Card>
  );
}