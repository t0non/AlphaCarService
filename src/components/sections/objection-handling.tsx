import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    name: 'Orçamento transparente',
    description: 'Sem surpresas na conta final. Você sabe exatamente o que está pagando.',
  },
  {
    name: 'Peças originais com nota fiscal',
    description: 'Qualidade e procedência garantida para a sua segurança.',
  },
  {
    name: 'Garantia de 12 meses no serviço',
    description: 'Se o problema voltar, a gente resolve. Simples assim.',
  },
];

export default function ObjectionHandling() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 animate-up">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cansado de oficinas que "inventam" defeitos?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Sabemos que deixar o carro na oficina gera ansiedade. Você tem medo
            de o orçamento estourar ou do problema voltar semana que vem. Na
            GearUp Garage, a regra é clara: nós não trocamos nada sem você
            autorizar.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl animate-up">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left elevated-card rounded-2xl border border-transparent bg-secondary"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <CheckCircle2
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
