import { Metadata } from 'next';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Localização e Endereço | Alpha Car Service BH',
  description: 'Como chegar na Alpha Car Service. Oficina mecânica no Bairro Saudade, Belo Horizonte. Veja nosso endereço, horários e mapa.',
};

export default function LocalizacaoPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1 bg-white pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8 text-center">
            Nossa Localização em Belo Horizonte
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Como Chegar</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Estamos estrategicamente localizados no Bairro Saudade, com fácil acesso para todas as regiões de Belo Horizonte.
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-bold text-foreground">Endereço Completo:</h3>
                  <p className="text-muted-foreground">R. Demétrio Ribeiro, 127<br/>Bairro Saudade<br/>Belo Horizonte - MG<br/>CEP 30285-580</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Horário de Funcionamento:</h3>
                  <p className="text-muted-foreground">[Pendente de confirmação - Ex: Segunda a Sexta, das 08h às 18h]</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Contatos:</h3>
                  <p className="text-muted-foreground">Telefone e WhatsApp: (31) 99893-5665</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://share.google/fNBoZ1wxqXTikv4bj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Abrir Rota no Google Maps
                </a>
              </div>
            </div>

            <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden border">
              {/* O iframe pode ser atualizado posteriormente com o código embed do Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.173877903259!2d-43.9161833!3d-19.917027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699ec1c70e70b%3A0xb3eb77823fbf5f2!2sR.%20Dem%C3%A9trio%20Ribeiro%2C%20127%20-%20Saudade%2C%20Belo%20Horizonte%20-%20MG%2C%2030285-580!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
