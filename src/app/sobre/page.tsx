import { Metadata } from 'next';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Sobre a Alpha Car Service | Oficina Mecânica BH',
  description: 'Conheça a história, a equipe e a estrutura da Alpha Car Service, sua oficina mecânica de confiança no Bairro Saudade, em Belo Horizonte.',
};

export default function SobrePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1 bg-white pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8 text-center">
            Sobre a Alpha Car Service
          </h1>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p>
              A <strong>Alpha Car Service</strong> nasceu com o objetivo de transformar a experiência de manutenção automotiva em Belo Horizonte. Localizados no bairro Saudade, somos especializados em oferecer um serviço transparente, com diagnóstico preciso e sem surpresas no orçamento.
            </p>
            <p>
              Sabemos que deixar o carro na oficina muitas vezes gera insegurança. Por isso, nosso compromisso é explicar cada etapa do processo e focar no que realmente precisa ser reparado, garantindo um custo-benefício superior ao das concessionárias, mas seguindo rigorosamente as normas de reparo das montadoras.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Nossa Estrutura e Diferenciais</h2>
            <ul>
              <li><strong>Diagnóstico Avançado:</strong> Utilizamos scanner automotivo atualizado e ferramentas especiais para identificar problemas antes de sair trocando peças.</li>
              <li><strong>Atendimento Multimarcas:</strong> Atendemos veículos de todas as marcas com a mesma dedicação técnica.</li>
              <li><strong>Transparência:</strong> Você aprova o orçamento antes de qualquer serviço começar.</li>
            </ul>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Nossa Equipe</h2>
            <p>
              Nossa oficina é liderada por profissionais altamente qualificados e apaixonados por carros, com anos de experiência prática e capacitação constante. 
            </p>
            <div className="mt-12 text-center">
              <a 
                href="https://wa.me/5531998935665?text=Olá!%20Encontrei%20a%20Alpha%20Car%20Service%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20visita."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Agendar uma Visita pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
