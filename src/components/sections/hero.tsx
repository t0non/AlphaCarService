'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GoogleIcon } from '@/components/icons/google-icon';
import heroBackground from '@/Imagens/Carros com sombra.webp';
import logoLocal from '@/Imagens/logo (2).webp';

export default function Hero() {

  return (
    <section className="relative bg-white overflow-x-clip">
      <div className="w-full bg-black flex items-center justify-center py-4">
        <Image
          src={logoLocal}
          alt="Logo Alpha Car Service"
          width={400}
          height={120}
          className="h-14 md:h-20 w-auto object-contain"
          priority
          placeholder="blur"
        />
      </div>
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Side (Content) */}
          <div className="relative flex flex-col justify-center text-center lg:text-left items-center lg:items-start z-10 pt-16 pb-12 sm:pb-24 animate-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Oficina mecânica de<br />confiança em Belo Horizonte
            </h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              Serviços com garantia em um só lugar. Atendimento dedicado. Seu carro entregue no menor tempo possível, com segurança.
            </p>
            <div className="mt-8 flex flex-row gap-4 justify-center lg:justify-start w-full max-w-sm mx-auto sm:max-w-none">
              <Button
                size="lg"
                asChild
                className="soft-button bg-primary hover:bg-primary/90 text-primary-foreground rounded-md h-24 px-8 text-lg font-bold flex-1"
              >
                <a
                  href="https://wa.me/5531998935665?text=Olá,%20vi%20o%20site%20da%20Alpha%20Car%20Service%20e%20gostaria%20de%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="soft-button h-24 px-8 text-lg font-bold rounded-md border-2 border-primary text-primary hover:bg-primary/10 flex-1"
              >
                <a href="tel:+5531998935665">Ligue agora</a>
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
