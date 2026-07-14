import { Metadata } from 'next';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Revisão Automotiva em Belo Horizonte | Alpha Car',
  description: 'Agende a revisão do seu carro no Bairro Saudade, BH. Verificamos óleo, freios, suspensão e injeção com transparência.',
};

export default function ServicePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1 bg-white pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <nav className="text-sm text-muted-foreground mb-6">
            <a href="/" className="hover:underline">Home</a> &gt; <a href="/servicos" className="hover:underline">Serviços</a> &gt; <span className="text-foreground">{p.h1}</span>
          </nav>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
            Revisão Automotiva Preventiva e Corretiva
          </h1>
          
          <div className="prose prose-lg text-muted-foreground mb-12">
            <p className="text-xl font-medium text-foreground leading-relaxed">
              A revisão automotiva é a etapa utilizada para identificar preventivamente falhas mecânicas e manter seu veículo seguro. Na Alpha Car Service, nossa avaliação é focada no que realmente precisa ser trocado, superando o custo-benefício de concessionárias.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Como a Alpha Car Service pode ajudar?</h2>
            <p>
              Nossa equipe técnica no bairro Saudade está preparada para receber seu veículo, realizar todos os testes necessários e passar um orçamento transparente antes de qualquer serviço ser executado.
            </p>
          </div>

          <div className="bg-secondary/30 p-8 rounded-xl border border-secondary text-center mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Precisa de avaliação técnica?</h3>
            <p className="mb-8 text-muted-foreground">Fale conosco e agende um horário. Atendimento dedicado e especializado para você.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold h-14 px-8">
                <a href="https://wa.me/5531998935665?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Revis%C3%A3o%20Automotiva%20Preventiva%20e%20Corretiva." target="_blank" rel="noopener noreferrer">
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 border-primary text-primary hover:bg-primary/10 font-bold">
                <a href="tel:+5531998935665">Ligar para a Oficina</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
