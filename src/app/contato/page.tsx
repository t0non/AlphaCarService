import { Metadata } from 'next';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Fale Conosco | Alpha Car Service',
  description: 'Entre em contato com a Alpha Car Service pelo WhatsApp, telefone ou agende uma visita presencial em nossa oficina.',
};

export default function ContatoPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1 bg-white pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">
            Fale com a Alpha Car Service
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Estamos prontos para atender você e resolver o problema do seu veículo. Escolha a melhor forma de falar com nossos especialistas.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-secondary/50 p-8 rounded-xl border border-secondary">
              <h2 className="text-xl font-bold mb-4">WhatsApp Rápido</h2>
              <p className="text-muted-foreground text-sm mb-6">Envie os sintomas do seu veículo e agende um diagnóstico diretamente pelo WhatsApp.</p>
              <Button asChild className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold h-12">
                <a href="https://wa.me/5531998935665?text=Olá!%20Estou%20entrando%20em%20contato%20pelo%20site." target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
            
            <div className="bg-secondary/50 p-8 rounded-xl border border-secondary">
              <h2 className="text-xl font-bold mb-4">Ligação Direta</h2>
              <p className="text-muted-foreground text-sm mb-6">Precisa de atendimento urgente ou prefere conversar por voz? Ligue para a nossa recepção.</p>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 font-bold h-12">
                <a href="tel:+5531998935665">
                  Ligar (31) 99893-5665
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-16 text-left bg-gray-50 p-8 rounded-xl border">
             <h2 className="text-2xl font-bold mb-4">Endereço da Oficina</h2>
             <p className="text-muted-foreground mb-4">R. Demétrio Ribeiro, 127 - Bairro Saudade, Belo Horizonte - MG</p>
             <a 
               href="https://share.google/fNBoZ1wxqXTikv4bj" 
               className="text-primary font-bold hover:underline"
               target="_blank"
               rel="noopener noreferrer"
             >
               Como chegar (Google Maps) &rarr;
             </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
