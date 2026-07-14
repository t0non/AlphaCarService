import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import workshopImage from '@/Imagens/Fachada bonita.webp';

const featuresList = [
  'Diagnóstico avançado',
  'Ferramentas especiais',
  'Scanner de ponta',
  'Osciloscópio',
];

export default function Features() {
  return (
    <section id="features" className="relative bg-gray-900 text-white flex items-center justify-center py-24 sm:py-32">
      <Image
        src={workshopImage}
        alt="Close-up de um motor de carro na oficina"
        fill
        className="object-cover object-top"
        loading="lazy"
        placeholder="blur"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mecânica de confiança, preço justo e zero surpresas.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Na Alpha Car Service, a regra é clara. Você só aprova o que entende, com total confiança e transparência:
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-lg sm:mt-20 animate-up">
            <dl className="grid grid-cols-1 gap-y-6 text-base leading-7 text-white">
              {featuresList.map((feature) => (
                <div key={feature} className="relative flex items-center justify-center gap-x-3 transition-transform duration-200 ease-out hover:-translate-y-0.5">
                    <CheckCircle className="h-6 w-6 flex-none text-white" aria-hidden="true" />
                    <span className="font-semibold">{feature}</span>
                </div>
              ))}
            </dl>
        </div>

        <div className="mt-16 text-center animate-up">
            <Button
              size="lg"
              variant="default"
              asChild
              className="soft-button h-auto py-4 px-8 text-lg font-semibold rounded-lg"
            >
              <a 
                href="https://wa.me/5531998935665?text=Olá,%20vi%20o%20site%20da%20Alpha%20Car%20Service%20e%20gostaria%20de%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                Orçamento Rápido
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
