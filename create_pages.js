const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: 'servicos',
    title: 'Nossos Serviços | Alpha Car Service BH',
    h1: 'Serviços Automotivos em Belo Horizonte',
    desc: 'Confira os serviços oferecidos pela Alpha Car Service. Revisão, diagnóstico automotivo, elétrica, injeção e mais.',
    content: 'Na Alpha Car Service, você encontra uma estrutura completa para cuidar do seu carro. Não adivinhamos o defeito: diagnosticamos e resolvemos com precisão.'
  },
  {
    path: 'revisao-automotiva-bh',
    title: 'Revisão Automotiva em Belo Horizonte | Alpha Car',
    h1: 'Revisão Automotiva Preventiva e Corretiva',
    desc: 'Agende a revisão do seu carro no Bairro Saudade, BH. Verificamos óleo, freios, suspensão e injeção com transparência.',
    content: 'A revisão automotiva é a etapa utilizada para identificar preventivamente falhas mecânicas e manter seu veículo seguro. Na Alpha Car Service, nossa avaliação é focada no que realmente precisa ser trocado, superando o custo-benefício de concessionárias.'
  },
  {
    path: 'diagnostico-automotivo-bh',
    title: 'Diagnóstico Automotivo em Belo Horizonte | Alpha Car',
    h1: 'Diagnóstico Automotivo com Scanner e Osciloscópio',
    desc: 'Luz da injeção acesa ou carro falhando? Realizamos diagnóstico preciso em BH antes de trocar peças sem necessidade.',
    content: 'O diagnóstico automotivo é a etapa utilizada para identificar a causa de falhas elétricas, eletrônicas ou mecânicas antes da substituição de peças. Na Alpha Car Service, no bairro Saudade, a avaliação pode utilizar scanner, osciloscópio, testes elétricos e inspeção técnica.'
  },
  {
    path: 'freios-automotivos-bh',
    title: 'Oficina de Freios em Belo Horizonte | Alpha Car Service',
    h1: 'Manutenção de Freios Automotivos',
    desc: 'Troca de pastilha de freio, discos e fluidos em Belo Horizonte. Seu carro vibrando ou com barulho ao frear? Agende uma avaliação.',
    content: 'O sistema de freios exige manutenção rigorosa para a sua segurança. Se o pedal estiver baixo, ou houver ruído ao frear, realizamos inspeção completa de pastilhas, discos e fluido.'
  },
  {
    path: 'suspensao-automotiva-bh',
    title: 'Suspensão Automotiva em Belo Horizonte | Alpha Car',
    h1: 'Manutenção de Suspensão e Amortecedores',
    desc: 'Oficina especializada em suspensão automotiva no bairro Saudade, BH. Resolva barulhos, instabilidade e desgaste de pneus.',
    content: 'A suspensão é vital para a estabilidade. Amortecedores vazando, buchas estouradas ou barulho ao passar em buracos são sintomas que avaliamos e corrigimos com peças de qualidade.'
  },
  {
    path: 'injecao-eletronica-bh',
    title: 'Injeção Eletrônica em BH | Alpha Car Service',
    h1: 'Manutenção de Injeção Eletrônica',
    desc: 'Diagnóstico e reparo do sistema de injeção eletrônica em Belo Horizonte. Carro falhando ou com consumo alto? Traga para a Alpha Car.',
    content: 'Quando a luz da injeção acende, não significa apenas um erro genérico. Analisamos bicos injetores, sensores e corpo de borboleta para restaurar o desempenho e a economia de combustível do seu motor.'
  },
  {
    path: 'eletrica-automotiva-bh',
    title: 'Elétrica Automotiva em BH | Alpha Car Service',
    h1: 'Serviços de Elétrica Automotiva',
    desc: 'Bateria descarregando ou falhas elétricas? Oficina especializada em elétrica automotiva no bairro Saudade, Belo Horizonte.',
    content: 'Falhas elétricas podem deixar você na mão de repente. Testamos baterias, alternadores, motor de partida e chicotes elétricos para garantir que a energia do seu veículo flua perfeitamente.'
  },
  {
    path: 'troca-de-oleo-bh',
    title: 'Troca de Óleo em BH | Alpha Car Service',
    h1: 'Troca de Óleo e Filtros em Belo Horizonte',
    desc: 'Troca de óleo do motor com especificações originais. Evite borra no motor e prolongue a vida útil do seu carro.',
    content: 'A troca de óleo no prazo correto, juntamente com o filtro de óleo e combustível, é a manutenção mais barata para evitar a perda do motor. Utilizamos óleos recomendados pela montadora para o seu veículo.'
  },
  {
    path: 'embreagem-bh',
    title: 'Oficina de Embreagem em BH | Alpha Car Service',
    h1: 'Troca de Embreagem Automotiva',
    desc: 'Embreagem pesada, patinando ou trepidando? Realizamos o diagnóstico e troca de kit de embreagem em Belo Horizonte.',
    content: 'Se o seu carro perdeu força nas subidas ou o pedal ficou muito duro, a embreagem pode estar no fim de sua vida útil. Avaliamos o platô, disco e rolamento.'
  },
  {
    path: 'higienizacao-ar-condicionado-bh',
    title: 'Higienização de Ar-Condicionado em BH | Alpha Car',
    h1: 'Higienização e Filtro de Ar-Condicionado',
    desc: 'Ar-condicionado com mau cheiro? Realizamos higienização com ozônio e troca de filtro de cabine em Belo Horizonte.',
    content: 'Manter o ar-condicionado limpo é uma questão de saúde. A higienização elimina bactérias e fungos, e a troca do filtro de cabine garante um ar puro dentro do seu veículo.'
  }
];

const template = (p) => `import { Metadata } from 'next';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '${p.title}',
  description: '${p.desc}',
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
            ${p.h1}
          </h1>
          
          <div className="prose prose-lg text-muted-foreground mb-12">
            <p className="text-xl font-medium text-foreground leading-relaxed">
              ${p.content}
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
                <a href="https://wa.me/5531998935665?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20${encodeURIComponent(p.h1)}." target="_blank" rel="noopener noreferrer">
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
`;

pages.forEach(p => {
  const dirPath = path.join(__dirname, 'src', 'app', p.path);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), template(p));
  console.log('Created:', p.path);
});
