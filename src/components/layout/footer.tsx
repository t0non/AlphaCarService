import Image from 'next/image';
import tmLogo from '@/Imagens/topmarketinglogo.jpg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 animate-up sm:flex-row">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Alpha Car Service. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Desenvolvido por</span>
          <a
            href="https://topmarketingbh.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity ml-1"
          >
            <Image 
              src={tmLogo} 
              alt="Logo Top Marketing BH" 
              width={24} 
              height={24} 
              className="rounded-sm object-cover"
            />
            <span className="font-bold text-amber-500 tracking-wide">Top Marketing BH</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
