import React from 'react';
import { Button } from '@/components/ui/button';

const services = [
  'Revisão Geral',
  'Freios',
  'Suspensão',
  'Higienização de Ar Condicionado',
  'Discos e Pastilhas de Freio',
  'Troca de Velas e Cabos',
  'Embreagem',
  'Troca de Óleo do Motor',
];

const highlightedServices = [
  'Revisão Geral',
  'Discos e Pastilhas de Freio',
  'Troca de Óleo do Motor',
];

export default function CtaServices() {
  return (
    <section className="bg-[#212121] py-24 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8 animate-up">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Confira alguns dos nossos serviços, e entre em contato para receber um orçamento
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                  WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="soft-button h-auto py-4 px-8 text-lg font-semibold rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="tel:+5531998935665">Ligue agora</a>
              </Button>
            </div>
          </div>
          <div className="bg-secondary p-10 rounded-2xl elevated-card">
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 text-base text-center">
              {services.map((service, index) => (
                <React.Fragment key={service}>
                  <a href="#services" className={`font-medium hover:underline ${highlightedServices.includes(service) ? 'text-primary' : 'text-foreground/80'}`}>
                      {service}
                  </a>
                  {index < services.length - 1 && <span className="text-muted-foreground/50">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
