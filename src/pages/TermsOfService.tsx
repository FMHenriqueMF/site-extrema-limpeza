import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, AlertTriangle, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/8c9d869d-118c-43fc-919c-32bae28cd951.png" 
                alt="Extrema Limpeza - Higienização de Estofados" 
                className="h-12 w-auto"
              />
            </Link>
            <Link to="/">
              <Button variant="outline">
                Voltar ao Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Termos de Serviço</h1>
            <p className="text-xl text-muted-foreground">
              Condições contratuais e garantias dos serviços de higienização da Extrema Limpeza
            </p>
            <Badge className="mt-4 bg-brand-gold/20 text-brand-gold border-brand-gold/30">
              Documento Oficial - Válido para todos os serviços
            </Badge>
          </div>

          <div className="grid gap-8">
            {/* Cláusula Primeira - Objeto */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-brand-gold" />
                  Cláusula Primeira – Objeto da Prestação de Serviços
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Este contrato tem por objeto a aquisição de serviços de higienização de estofados, 
                    conforme solicitação e requerimentos realizados pelo cliente.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Produtos Homologados ANVISA</h4>
                        <p className="text-muted-foreground text-sm">
                          Trabalhamos com produtos com efeito bactericida, antiácaros, antimicrobiano e fungicida.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Higienização de Alta Qualidade</h4>
                        <p className="text-muted-foreground text-sm">
                          Extração industrial permite remoção de sujidades em até 5 cm abaixo da superfície.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Empresas Parceiras</h4>
                        <p className="text-muted-foreground text-sm">
                          A Extrema Limpeza atua como mediadora entre o cliente e empresas parceiras certificadas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Garantia e Prazo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-brand-gold" />
                  Garantia e Retorno (Cláusula Sétima)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-brand-gold/10 p-4 rounded-lg border border-brand-gold/20">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-brand-gold mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-gold">Prazo de Garantia: 48 Horas</h4>
                      <p className="text-muted-foreground">
                        Após a realização do serviço, o cliente tem <strong>48 horas</strong> para reportar 
                        qualquer problema ou insatisfação com o serviço realizado.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Retorno Aprovado</h4>
                    <p className="text-muted-foreground">
                      Caso a reclamação seja aprovada, realizaremos o retorno em até <strong>7 dias corridos</strong>. 
                      Retornos fora desse prazo não serão realizados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agendamento e Execução */}
            <Card>
              <CardHeader>
                <CardTitle>Agendamento e Execução dos Serviços (Cláusula Quarta)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Turnos de Atendimento</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• <strong>Manhã:</strong> 08h às 12h</li>
                      <li>• <strong>Tarde:</strong> 13h às 17h</li>
                      <li>• Cliente deve aguardar o técnico no turno agendado ou garantir presença de pessoa maior de 18 anos</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Preparação Necessária</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Local pronto na data/horário agendados</li>
                      <li>• Remoção de pertences pessoais dos itens a serem higienizados</li>
                      <li>• Almofadas auxiliares não incluídas (exceto almofadas de encosto)</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-800">Importante</h4>
                        <p className="text-amber-700 text-sm">
                          Se o técnico chegar no turno marcado e não for recebido, uma taxa será aplicada 
                          conforme condições estabelecidas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cancelamento e Valores */}
            <Card>
              <CardHeader>
                <CardTitle>Cancelamento e Condições de Pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold mb-2 text-red-800">Política de Cancelamento</h4>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li>• <strong>Cancelamento sem taxa:</strong> Com antecedência mínima de 24 horas</li>
                      <li>• <strong>Multa por cancelamento:</strong> R$ 39,00 para cancelamentos com menos de 24h</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Formas de Pagamento</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• PIX (método preferencial)</li>
                      <li>• Outros métodos acordados previamente</li>
                      <li>• Emissão de Nota Fiscal para todos os serviços</li>
                      <li>• Pagamento confirmado antes da liberação do técnico</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processo Técnico */}
            <Card>
              <CardHeader>
                <CardTitle>Procedimento de Higienização (Cláusula Segunda)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Processo Profissional</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Avaliação prévia e atualização de valores conforme tabela</li>
                      <li>• Produtos com nanotecnologia, desengordurante e peróxido de hidrogênio</li>
                      <li>• Eliminação de 100% dos microorganismos (ácaros, fungos, bactérias, vírus)</li>
                      <li>• Remoção de odores (suor, mofo, vômito, urina, etc.)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-2 text-blue-800">Secagem (Cláusula Terceira)</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Equipamentos de alta qualidade permitem secagem no mesmo dia</li>
                      <li>• Tempo médio: 6 a 8 horas em ambiente ventilado</li>
                      <li>• Recomendado: uso de ventilador ou ar-condicionado</li>
                      <li>• <strong>Proibido:</strong> secagem ao sol</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Isenções e Limitações */}
            <Card>
              <CardHeader>
                <CardTitle>Isenção de Garantia (Cláusula Oitava)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-3 text-gray-800">A Garantia NÃO Cobre:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Uso indevido pelo cliente</li>
                        <li>• Danos por causas naturais</li>
                        <li>• Exposição ao sol nas primeiras 24h</li>
                        <li>• Limpezas amadoras com produtos químicos</li>
                      </ul>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Manchas de produtos cremosos/oleosos</li>
                        <li>• Urina e líquidos quentes</li>
                        <li>• Problemas em estruturas de MDF/madeira não tratada</li>
                        <li>• Limpeza de tapetes em geral</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Importante sobre Manchas</h4>
                    <p className="text-muted-foreground text-sm">
                      <strong>Não garantimos remoção de 100% das manchas ou mofo</strong>, pois depende do item causador 
                      e tempo de atuação. Algumas fibras podem estar permanentemente tingidas ou pigmentadas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recomendações */}
            <Card>
              <CardHeader>
                <CardTitle>Recomendações para Manutenção</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Recomendamos:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Aspirar semanalmente</li>
                      <li>• Remover líquidos imediatamente com papel absorvente</li>
                      <li>• Manter em locais arejados</li>
                      <li>• Evitar uso nas primeiras 24 horas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Evite:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Produtos químicos caseiros</li>
                      <li>• Contato com urina</li>
                      <li>• Exposição ao sol (primeiras 24h)</li>
                      <li>• Esfregar líquidos derramados</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Foro */}
            <Card>
              <CardHeader>
                <CardTitle>Foro e Disposições Gerais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong>Foro eleito:</strong> Comarca de Porto Alegre - RS para dirimir quaisquer questões 
                    decorrentes deste contrato.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Validade do aceite eletrônico:</strong> O cliente reconhece a plena validade do 
                    aceite eletrônico destes termos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card className="bg-gradient-hero text-white">
              <CardHeader>
                <CardTitle>Contato e Esclarecimentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p>Para dúvidas sobre estes termos ou agendamento de serviços:</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-white text-brand-blue hover:bg-gray-100"
                      onClick={() => window.open('https://wa.me/558004000022?text=Olá! Tenho dúvidas sobre os termos de serviço da Extrema Limpeza.', '_blank')}
                    >
                      <MessageCircle className="mr-2 w-4 h-4" />
                      WhatsApp: 0800 400 0022
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
                      Email: contato@extremalimpeza.com.br
                    </Button>
                  </div>
                  <p className="text-sm opacity-90">
                    <strong>Atenção:</strong> Ao contratar nossos serviços, você concorda com todos os termos descritos acima.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Extrema Limpeza. Todos os direitos reservados.</p>
          <p className="text-sm opacity-90 mt-2">
            Termos de Serviço baseados no contrato oficial da empresa
          </p>
        </div>
      </footer>
    </div>
  );
}