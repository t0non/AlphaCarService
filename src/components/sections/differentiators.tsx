import { Car, CreditCard, ShieldCheck, Coffee } from 'lucide-react';

const features = [
  {
    name: 'Leva e Traz',
    description: 'Buscamos seu carro em casa ou no trabalho para sua comodidade. (Consulte área de cobertura)',
    icon: Car,
  },
  {
    name: 'Facilidade no Pagamento',
    description: 'Parcelamos os serviços em até 12x no cartão de crédito para não pesar no seu bolso.',
    icon: CreditCard,
  },
  {
    name: 'Garantia Estendida',
    description: 'Se o mesmo problema retornar dentro da garantia, nós resolvemos sem nenhum custo adicional.',
    icon: ShieldCheck,
  },
  {
    name: 'Sala de Espera VIP',
    description: 'Aguarde serviços rápidos em um ambiente confortável com Wi-Fi, TV e um café especial.',
    icon: Coffee,
  },
];

export default function Differentiators() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 animate-up">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Por que escolher a GearUp Garage?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Vamos além do conserto do seu carro. Oferecemos uma experiência completa,
            pensada em cada detalhe para sua tranquilidade e conveniência.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none animate-up">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 elevated-card rounded-2xl border border-transparent bg-white">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>
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
