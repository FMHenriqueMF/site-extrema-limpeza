import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, CheckCircle, Sparkles, Shield, Clock, MessageCircle, Home, Bed, Armchair } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CepChecker from "@/components/CepChecker";
import heroImage from "@/assets/hero-sofa.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";
import equipmentImage from "@/assets/equipment.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/LogoExtrema.jpg" 
                alt="Extrema Limpeza - Higienização de Estofados" 
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>0800 400 0022</span>
              </div>
              <Button 
                variant="default" 
                className="bg-gradient-primary shadow-glow"
                onClick={() => window.open('https://wa.me/558004000022?text=Olá! Gostaria de fazer um orçamento gratuito para higienização de estofados.', '_blank')}
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Orçamento Grátis
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <Badge className="bg-brand-gold/20 text-brand-gold border-brand-gold/30 shadow-gold">
                  ⭐ Profissionais Certificados
                </Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                  🛡️ 6 Anos de Experiência
                </Badge>

              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Seus Estofados Como 
                <span className="text-brand-gold"> Novos</span>
              </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Higienização profissional com produtos homologados na ANVISA. 
            Eliminação de 100% dos microorganismos e remoção de sujidades até 5cm de profundidade.
          </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-brand-gold text-brand-dark hover:bg-brand-gold/90 shadow-gold font-semibold"
                  onClick={() => window.open('https://wa.me/558004000022?text=Olá! Vi o site da Extrema Limpeza e gostaria de mais informações sobre os serviços.', '_blank')}
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Fale no WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark">
                  Ver Serviços
                </Button>
              </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas de higienização com equipamentos profissionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-brand rounded-full flex items-center justify-center shadow-glow">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Sofás e Poltronas</h4>
                <p className="text-muted-foreground mb-4">
                  Limpeza profunda de todos os tipos de tecido, removendo a maioria das manchas*, odores e ácaros.
                  <span className="text-xs block mt-1">*Na maioria dos casos atendidos conseguimos remover as manchas completamente.</span>
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                    Remoção da maioria das manchas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                    Eliminação de odores
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                    Proteção antimicrobiana
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center shadow-gold">
                  <Bed className="w-8 h-8 text-brand-dark" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Colchões</h4>
                <p className="text-muted-foreground mb-4">
                  Higienização completa eliminando ácaros, fungos e proporcionando melhor qualidade do sono.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                    Eliminação de ácaros
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                    Remoção de fungos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                    Secagem rápida
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-brand rounded-full flex items-center justify-center shadow-glow">
                  <Armchair className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Cadeiras de Escritório</h4>
                <p className="text-muted-foreground mb-4">
                  Limpeza especializada para ambiente corporativo, mantendo a higiene no trabalho.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                    Limpeza corporativa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                    Turnos de atendimento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                    Produtos hipoalergênicos
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Check Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Verificar Atendimento</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Digite seu CEP e descubra se atendemos sua região
            </p>
          </div>
          
          <div className="flex justify-center">
            <CepChecker />
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Resultados Impressionantes</h2>
            <p className="text-xl text-muted-foreground">
              Veja a diferença que nossa higienização profissional faz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={beforeAfterImage} 
                alt="Comparação antes e depois da higienização profissional de sofá, mostrando a eficácia do serviço da Extrema Limpeza" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6">Por Que Escolher a Extrema Limpeza?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold mt-1" />
                  <div>
                    <h5 className="font-semibold">Equipamentos Profissionais</h5>
                    <p className="text-muted-foreground">Utilizamos as melhores máquinas do mercado para resultados superiores.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold mt-1" />
                  <div>
                    <h5 className="font-semibold">Produtos Ecológicos</h5>
                    <p className="text-muted-foreground">Seguros para sua família e pets, sem comprometer a eficácia.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold mt-1" />
                  <div>
                    <h5 className="font-semibold">Garantia e Qualidade</h5>
                    <p className="text-muted-foreground">Serviço profissional com garantia. Detalhes completos em nossos <Link to="/termos-de-servico" className="text-brand-gold underline">termos de serviço</Link>.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold mt-1" />
                  <div>
                    <h5 className="font-semibold">Equipe Especializada</h5>
                    <p className="text-muted-foreground">Profissionais treinados e certificados para melhor atendimento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Solicite seu Orçamento</h2>
              <p className="text-xl mb-8 opacity-90">
                Entre em contato e receba uma avaliação gratuita. Atendemos várias cidades com equipes especializadas.
              </p>
              <div className="mb-6">
                <Link 
                  to="/termos-de-servico" 
                  className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                >
                  📋 Ver Termos de Serviço e Garantias
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">0800 400 0022</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">adm@extremalimpeza.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">Atendimento em Todo o Brasil</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-4">Solicitar Orçamento</h4>
                <p className="text-muted-foreground mb-4">
                  Entre em contato conosco via WhatsApp para orçamento personalizado
                </p>
                <Button 
                  className="w-full bg-gradient-brand shadow-glow text-white font-semibold"
                  onClick={() => window.open('https://wa.me/558004000022?text=Olá! Vi o site da Extrema Limpeza e gostaria de um orçamento personalizado.', '_blank')}
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Falar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">Extrema Limpeza</h5>
              <p className="opacity-90 mb-4">
                Especialistas em higienização de estofados com 6 anos de sólida experiência no mercado.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Licenciado</Badge>
                <Badge variant="secondary">Segurado</Badge>
                <Badge variant="secondary">Certificado</Badge>
                <Badge variant="secondary">6 Anos</Badge>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Serviços</h5>
              <ul className="space-y-2 opacity-90">
                <li>Limpeza de Sofás</li>
                <li>Higienização de Colchões</li>
                <li>Cadeiras de Escritório</li>
                <li>Poltronas e Divãs</li>
                <li>Tapetes e Carpetes</li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Contato</h5>
              <div className="space-y-2 opacity-90">
                <p>📞 0800 400 0022</p>
                <p>✉️ adm@extremalimpeza.com</p>
                <p>📍 Todo o Brasil</p>
                <p>🕒 Seg-Sex: 8h-18h | Sáb: 8h-14h</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-90">
            <p>&copy; 2024 Extrema Limpeza. Todos os direitos reservados.</p>
            <div className="mt-4 flex justify-center gap-4">
              <Link 
                to="/termos-de-servico" 
                className="text-sm hover:text-brand-gold transition-colors underline"
              >
                Termos de Serviço
              </Link>
              <span className="text-sm">•</span>
              <button 
                onClick={() => window.open('https://wa.me/558004000022?text=Olá! Gostaria de informações sobre privacidade.', '_blank')}
                className="text-sm hover:text-brand-gold transition-colors underline"
              >
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}