import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cog, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Cog className="h-10 w-10 text-primary" />,
    title: 'Revisão',
    description: 'Diagnóstico avançado para resolver falhas complexas e manutenção preventiva do motor.',
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Freios',
    description: 'Elimine barulhos e garanta a segurança da sua família nas ruas de BH.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Injeção Eletrônica',
    description: 'Seu carro bebendo menos e com melhor desempenho através de análise computadorizada.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-up">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Expertise Técnica
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Cuidamos do seu veículo com equipamentos de ponta e equipe qualificada.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 animate-up">
          {services.map((service) => (
            <Card key={service.title} className="elevated-card text-center bg-transparent shadow-none border-2 border-gray-200 p-6">
              <CardHeader className="p-0">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center animate-up">
          <Button size="lg" asChild className="soft-button bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-auto py-3 px-6 text-base font-semibold">
            <a href="https://wa.me/5531998935665?text=Preciso%20falar%20com%20um%20especialista%20sobre%20meu%20carro." target="_blank" rel="noopener noreferrer">
              FALAR COM UM ESPECIALISTA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
