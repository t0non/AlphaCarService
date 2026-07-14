'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoogleIcon } from '@/components/icons/google-icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Frederico Farjado',
    review:
      'Estou extremamente satisfeito com o serviço prestado pela Alpha Car. Desde o primeiro contato, senti confiança na equipe. Eles demonstraram um zelo incrível pelo meu veículo, dedicando tempo para explicar cada etapa do processo. Seu conhecimento técnico é impressionante, e isso se refletiu na execução impecável do serviço. Estou genuinamente entusiasmado com a qualidade do trabalho realizado pela Alpha Car Service. Recomendo a todos que buscam um serviço confiável e profissional." Recomendo.',
    rating: 5,
  },
  {
    name: 'Marina Paraiso',
    review:
      'profissionais competentes, agilidade, pontualidade e satisfação! Sou cliente de carteirinha e não troco ou abro mão. O proprietário, Fabrício, tem alto conhecimento em veículos (diversos), capacitação e amor ao que faz. Esse é o diferencial. Recomendo!!',
    rating: 5,
  },
  {
    name: 'Flavio',
    review:
      'Lá tem um serviço maravilhoso, atendimento muito bom ,é rápido o trabalho com garantia é o principal q eu adorei o seu carro Já sai de lá limpinho.muito bom mesmo',
    rating: 5,
  },
  {
    name: 'Ronan Filho',
    review:
      'Oficina com profissionais qualificados e com preço muito bom, serviço de qualidade, sempre indico a quem precisa, parabéns pelo profissionalismo',
    rating: 5,
  },
  {
    name: 'Diego Grego',
    review:
      'Um lugar agradável ótimos profissionais, diagnósticos preciso. Super indico. Além de tudo com preço justo.',
    rating: 5,
  },
  {
    name: 'Lucas Ramos',
    review:
      'Simplesmente sensacional, super profissionais, atendimento muito bom e entrega na data correta.',
    rating: 5,
  },
  {
    name: 'Saulo Marvin',
    review: 'Sempre bem atendido, sempre bem informado sobre tudo que fazem no andamento do que tem que ser feito ou não.',
    rating: 5,
  },
];

export default function SocialProof() {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
  };
  
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const avatarColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
  ];

  return (
    <section id="testimonials" className="bg-gray-900 py-24 sm:py-28 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Veja o que estão falando sobre nós
          </h2>
        </div>
      </div>

      <div className="mt-16 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] animate-up">
        <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 animate-scroll hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <li key={index} className="flex">
              <Card className="elevated-card bg-secondary text-secondary-foreground rounded-xl shadow-lg w-80 flex-shrink-0 flex flex-col border border-transparent">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className={`${avatarColors[index % avatarColors.length]} text-white font-bold`}>
                          {getInitials(testimonial.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex items-center gap-1.5">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <CheckCircle className="h-4 w-4 text-foreground" />
                      </div>
                    </div>
                    <GoogleIcon className="h-6 w-6" />
                  </div>
                  <div className="flex mb-2">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground leading-relaxed text-sm line-clamp-6">
                    "{testimonial.review}"
                  </blockquote>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>

      <div className="container mx-auto px-6 lg:px-8 mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 animate-up">
        <Button
          size="lg"
          variant="default"
          className="soft-button h-14 px-10 text-lg sm:text-xl font-bold rounded-lg w-full sm:w-auto"
          asChild
        >
          <a href="https://wa.me/5531998935665?text=Olá,%20vi%20o%20site%20da%20Alpha%20Car%20Service%20e%20gostaria%20de%20um%20orçamento." target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="soft-button h-14 px-10 text-lg sm:text-xl font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg w-full sm:w-auto"
          asChild
        >
          <a href="tel:+5531998935665">
            Ligue agora
          </a>
        </Button>
      </div>
    </section>
  );
}
