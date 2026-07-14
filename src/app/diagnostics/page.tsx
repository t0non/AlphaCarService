import Footer from '@/components/layout/footer';
import DiagnosticForm from './diagnostic-form';

export const metadata = {
  title: 'Diagnóstico IA - Alpha Car Service',
  description: 'Use nossa ferramenta de IA para obter um pré-diagnóstico do seu veículo.',
};

export default function DiagnosticPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Assistente de Diagnóstico IA
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Descreva os sintomas do seu veículo, e nossa inteligência
              artificial fornecerá uma análise preliminar com as causas
              prováveis e os próximos passos recomendados.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Atenção: Esta ferramenta é um auxílio e não substitui o
              diagnóstico profissional de um mecânico qualificado.
            </p>
          </div>
          <div className="mt-12">
            <DiagnosticForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
