import Image from 'next/image';
import logoLocal from '@/Imagens/logo (2).webp';

export default function Location() {
    return (
        <section id="location" className="py-24 sm:py-28 bg-white">
            <div className="container mx-auto px-6 lg:px-8 text-center">
                <div className="animate-up mb-12">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Visite nossa loja!</h2>
                    <p className="mt-4 text-lg text-muted-foreground">R. Demétrio Ribeiro, 127 - Saudade, Belo Horizonte - MG, 30285-580</p>
                </div>
                <div className="h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl animate-up">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.01199343015!2d-43.88649748888062!3d-19.91338097914835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e1a5555555%3A0xb35a39793c280738!2sAlpha%20Car%20Service!5e0!3m2!1spt-BR!2sbr!4v1719503418854!5m2!1spt-BR!2sbr"
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="mt-12 animate-up flex justify-center">
                    <Image
                        src={logoLocal}
                        alt="Logo Alpha Car Service"
                        width={128}
                        height={128}
                        placeholder="blur"
                    />
                </div>
            </div>
        </section>
    );
}
