import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import NewServices from '@/components/sections/new-services';
import Location from '@/components/sections/location';
import SocialProof from '@/components/sections/social-proof';
import Image from 'next/image';
import workshopImage from '@/Imagens/Fachada bonita.webp';
import CtaServices from '@/components/sections/cta-services';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <Hero />
        <section className="relative bg-[#1A1A1A] text-white">
          <Image
            src={workshopImage}
            alt="Fachada da Alpha Car Service"
            fill
            className="object-cover object-center"
            placeholder="blur"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative container mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center animate-up">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Revisão e Manutenção
              </h2>
              <p className="mt-4 text-white/80">
                Revisão completa para seu veículo com um custo-benefício superior à concessionária, seguindo as normas de reparo da montadora. Foco no que realmente precisa ser feito, reparado ou substituído.
              </p>
            </div>

            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 animate-up mt-12">
                <div className="flex gap-4 items-start">
                    <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <p className="text-white/90 text-base">
                        Revisão completa para seu veículo com custo-benefício superior à concessionária.
                    </p>
                </div>
                <div className="flex gap-4 items-start">
                    <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <p className="text-white/90 text-base">
                        Seguimos as normas de reparo da montadora.
                    </p>
                </div>
                <div className="flex gap-4 items-start">
                    <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <p className="text-white/90 text-base">
                        Foco no que realmente precisa ser feito.
                    </p>
                </div>
                <div className="flex gap-4 items-start">
                    <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <p className="text-white/90 text-base">
                        Inspeção de diversos sistemas.
                    </p>
                </div>
            </div>
          </div>
        </section>
        <Features />
        <NewServices />
        <SocialProof />
        <CtaServices />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
