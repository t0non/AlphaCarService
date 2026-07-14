// src/components/sections/new-services.tsx
'use client';

import Image from 'next/image';
import {
  RevisaoIcon,
  SuspensaoIcon,
  TrocaOleoIcon,
  FreiosIcon,
  EletricaIcon,
  DiagnosticoIcon,
  EmbreagemIcon,
  InjecaoEletronicaIcon,
} from '@/components/icons/services-icons';
import carImageLocal from '@/Imagens/carro.webp';
import { Button } from '../ui/button';

const leftServices = [
  { id: 'revisao', title: 'Revisão automotiva', Icon: RevisaoIcon },
  { id: 'suspensao', title: 'Suspensão', Icon: SuspensaoIcon },
  { id: 'oleo', title: 'Troca de óleo', Icon: TrocaOleoIcon },
  { id: 'freios', title: 'Freios', Icon: FreiosIcon },
];

const rightServices = [
  { id: 'eletrica', title: 'Elétrica automotiva', Icon: EletricaIcon },
  { id: 'diagnostico', title: 'Diagnóstico automotivo', Icon: DiagnosticoIcon },
  { id: 'embreagem', title: 'Embreagem', Icon: EmbreagemIcon },
  { id: 'injecao', title: 'Injeção eletrônica', Icon: InjecaoEletronicaIcon },
];

export default function NewServices() {
  return (
    <section id="services" className="relative bg-[#15171e] text-white overflow-hidden flex flex-col items-center justify-center min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Somos especialistas em diagnóstico avançado e mecânica de alto nível
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Conheça os principais serviços que realizamos e entre em contato para verificar outros.
          </p>
        </div>

        {/* Unified Responsive Layout */}
        <div className="relative mt-14 md:mt-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-[1fr_auto_1fr] items-center gap-x-2 md:gap-x-4">
            
            {/* Left Column */}
            <div className="flex flex-col justify-center gap-y-4 md:gap-y-8">
              {leftServices.map((service) => (
                <div key={service.id} className="flex flex-col md:flex-row items-center md:justify-end md:h-24 text-center md:text-right">
                  <div className="flex flex-col items-center md:items-end md:mr-6">
                    <div className="flex items-center justify-center mb-2 w-16 h-16 md:w-20 md:h-20">
                      <service.Icon />
                    </div>
                    <span className="font-semibold text-xs md:text-sm leading-tight max-w-[100px] md:max-w-[140px]">
                      {service.title}
                    </span>
                  </div>
                  <div className="hidden md:block relative w-28 h-px bg-white/70">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white border-2 border-[#15171e]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center px-0 md:px-6">
              <Image
                src={carImageLocal}
                alt="Veículo Alpha Car Service"
                width={320}
                height={640}
                className="z-10 object-contain h-[320px] md:h-[520px] w-auto transform scale-x-110 scale-y-90"
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 768px) 30vw, 320px"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center gap-y-4 md:gap-y-8">
              {rightServices.map((service) => (
                <div key={service.id} className="flex flex-col md:flex-row items-center md:h-24 text-center md:text-left">
                  <div className="hidden md:block relative w-28 h-px bg-white/70 md:mr-6">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white border-2 border-[#15171e]" />
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center justify-center mb-2 w-16 h-16 md:w-20 md:h-20">
                      <service.Icon />
                    </div>
                    <span className="font-semibold text-xs md:text-sm leading-tight max-w-[100px] md:max-w-[140px]">
                      {service.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Button
              variant="link"
              asChild
              className="text-white/80 md:text-white text-sm md:text-base font-semibold hover:text-white md:hover:text-white/80"
            >
              <a
                href="https://wa.me/5531998935665?text=Ol%C3%A1,%20vim%20pelo%20site.%20Gostaria%20de%20saber%20sobre%20outros%20servi%C3%A7os."
                target="_blank"
                rel="noopener noreferrer"
              >
                + Outros serviços
              </a>
            </Button>
          </div>

          <div className="mt-6 md:hidden grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <Button asChild size="lg" className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-base font-bold">
              <a href="https://wa.me/5531998935665?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.">
                WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-primary/50 text-primary hover:bg-primary/10 rounded-lg text-base font-bold">
              <a href="tel:+5531998935665">
                Ligar para a oficina
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
