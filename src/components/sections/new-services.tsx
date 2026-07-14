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
  { id: 'revisao', title: ['Revisão'], Icon: RevisaoIcon },
  { id: 'suspensao', title: ['Suspensão'], Icon: SuspensaoIcon },
  { id: 'oleo', title: ['Troca de', 'óleos'], Icon: TrocaOleoIcon },
  { id: 'freios', title: ['Freios'], Icon: FreiosIcon },
];

const rightServices = [
  { id: 'eletrica', title: ['Elétrica'], Icon: EletricaIcon },
  { id: 'diagnostico', title: ['Diagnóstico'], Icon: DiagnosticoIcon },
  { id: 'embreagem', title: ['Embreagem'], Icon: EmbreagemIcon },
  { id: 'injecao', title: ['Injeção', 'eletrônica'], Icon: InjecaoEletronicaIcon },
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

        {/* Desktop Layout */}
        <div className="relative mt-16 max-w-6xl mx-auto hidden md:block">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-4">
            {/* Left Column */}
            <div className="flex flex-col justify-center gap-y-8">
              {leftServices.map((service) => (
                <div key={service.id} className="flex items-center justify-end h-24">
                  <div className="flex flex-col items-center text-center mr-6 min-w-[8rem]">
                    <div className="flex items-center justify-center mb-2 w-20 h-20">
                      <service.Icon />
                    </div>
                    <div className="font-medium text-sm leading-tight">
                      {service.title.map((t, i) => (
                        <span
                          key={i}
                          className={`block leading-tight ${
                            service.id === 'freios' && i === 2 ? 'text-xs opacity-80' : ''
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative w-28 h-px bg-white/70">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white border-2 border-[#15171e]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="relative flex justify-center items-center px-6">
              <Image
                src={carImageLocal}
                alt="Veículo Alpha Car Service"
                width={320}
                height={640}
                className="z-10 object-contain h-[520px] w-auto transform scale-x-110 scale-y-90"
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 768px) 70vw, 320px"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center gap-y-8">
              {rightServices.map((service) => (
                <div key={service.id} className="flex items-center h-24">
                  <div className="relative w-28 h-px bg-white/70 mr-6">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white border-2 border-[#15171e]" />
                  </div>
                  <div className="flex flex-col items-center text-center min-w-[8rem]">
                    <div className="flex items-center justify-center mb-2 w-20 h-20">
                      <service.Icon />
                    </div>
                    <div className="font-medium text-sm">
                      {service.title.map((t) => (
                        <span key={t} className="block leading-tight">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              variant="link"
              asChild
              className="text-white text-base font-semibold hover:text-white/80"
            >
              <a
                href="https://wa.me/5531998935665?text=Ol%C3%A1,%20vim%20pelo%20site.%20Voc%C3%AAs%20%5Bsua%20d%C3%BAvida%5D."
                target="_blank"
                rel="noopener noreferrer"
              >
                + Outros serviços
              </a>
            </Button>
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden mt-14">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2">
            {/* Left Column */}
            <div className="flex flex-col gap-y-4 justify-center">
              {leftServices.map((service) => (
                <div key={service.id} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-20 h-20">
                    <service.Icon />
                  </div>
                  <p className="mt-2 text-xs font-semibold leading-tight">
                    {service.title.map((line, index) => (
                      <span
                        className={`block ${
                          service.id === 'freios' && index === 2 ? 'opacity-80' : ''
                        }`}
                        key={line}
                      >
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center px-0">
              <Image
                src={carImageLocal}
                alt="Veículo Alpha Car Service"
                width={190}
                height={400}
                className="z-10 h-[320px] w-auto transform scale-x-110 scale-y-90"
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 640px) 70vw, 190px"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-y-4 justify-center">
              {rightServices.map((service) => (
                <div key={service.id} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-20 h-20">
                    <service.Icon />
                  </div>
                  <p className="mt-2 text-xs font-semibold leading-tight">
                    {service.title.map((line) => (
                      <span className="block" key={line}>
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <Button
              variant="link"
              asChild
              className="text-white/80 text-sm font-semibold hover:text-white"
            >
              <a
                href="https://wa.me/5531998935665?text=Ol%C3%A1,%20vim%20pelo%20site.%20Voc%C3%AAs%20%5Bsua%20d%C3%BAvida%5D."
                target="_blank"
                rel="noopener noreferrer"
              >
                + Outros serviços
              </a>
            </Button>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <Button asChild size="lg" className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-base font-bold">
              <a href="https://wa.me/5531998935665?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.">
                WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-primary/50 text-primary hover:bg-primary/10 rounded-lg text-base font-bold">
              <a href="tel:+5531998935665">
                Ligue agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
