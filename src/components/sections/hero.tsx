'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GoogleIcon } from '@/components/icons/google-icon';
import heroBackground from '@/Imagens/Carros com sombra.webp';
import logoLocal from '@/Imagens/logo(2).png';

export default function Hero() {

  return (
    <section className="relative bg-white overflow-x-clip">
      <div className="w-full bg-black flex items-center justify-center py-4 md:py-6">
        <Image
          src={logoLocal}
          alt="Logo Alpha Car Service"
          width={400}
          height={120}
          className="h-12 md:h-16 w-auto object-contain"
          priority
          placeholder="blur"
        />
      </div>
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Side (Content) */}
          <div className="relative flex flex-col justify-center text-center lg:text-left items-center lg:items-start z-10 pt-16 pb-12 sm:pb-24 animate-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Oficina mecânica em Belo Horizonte
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Revisão, freios, suspensão, injeção eletrônica, elétrica e diagnóstico automotivo no bairro Saudade. Você entende o problema e aprova o serviço antes de qualquer reparo.
            </p>
            <div className="mt-8 flex flex-col gap-4 justify-center w-full max-w-sm mx-auto sm:max-w-none sm:flex-row sm:justify-start">
              <Button
                asChild
                className="soft-button bg-primary hover:bg-primary/90 text-primary-foreground rounded-md h-16 px-6 text-base font-bold w-full sm:w-auto sm:h-16 sm:px-10"
              >
                <a
                  href="https://wa.me/5531998935665?text=Olá!%20Encontrei%20a%20Alpha%20Car%20Service%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                >
                  Solicitar orçamento pelo WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="soft-button rounded-md border-2 border-primary text-primary hover:bg-primary/10 h-16 px-6 text-base font-bold w-full sm:w-auto sm:h-16 sm:px-10"
              >
                <a 
                  href="tel:+5531998935665"
                  className="flex items-center justify-center w-full h-full"
                >
                  Ligar para a oficina
                </a>
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0 w-full">
              <GoogleIcon className="h-10 w-10 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">
                  Somos uma das mecânicas mais bem avaliadas da cidade!
                </p>
                <p className="text-xs text-muted-foreground">
                  Nota de avaliação EXCELENTE no Google!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="relative h-full w-full hidden lg:block">
            <div className="absolute bottom-0 -right-[47%] w-[155%]">
              <Image
                src={heroBackground}
                alt="Três carros em destaque na Alpha Car Service"
                width={1080}
                height={675}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 1080px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Image */}
      <div className="lg:hidden bg-white">
        <Image
          src={heroBackground}
          alt="Três carros em destaque na Alpha Car Service"
          width={900}
          height={563}
          className="w-full h-auto object-contain"
          sizes="100vw"
          priority
          placeholder="blur"
        />
      </div>
    </section>
  );
}
