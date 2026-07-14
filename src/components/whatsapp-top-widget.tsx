'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import mechanicAvatar from '@/Imagens/Fabricio MERCEDES BRANCA.webp';

const whatsappLink =
  'https://wa.me/5531998935665?text=Olá,%20vi%20o%20site%20da%20Alpha%20Car%20Service%20e%20gostaria%20de%20um%20orçamento.';

export function WhatsAppTopWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-md max-w-xs whatsapp-notification-enter"
      >
        <div className="relative w-7 h-7 rounded-full overflow-hidden">
          <Image
            src={mechanicAvatar}
            alt="Atendimento Alpha Car Service"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-xs text-slate-700 font-medium">digitando...</span>
      </button>
    );
  }

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-40 w-[260px] sm:w-[300px] rounded-2xl shadow-2xl bg-white overflow-hidden whatsapp-notification-enter">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
          <span>WHATSAPP</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span>agora</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-600"
            aria-label="Fechar aviso do WhatsApp"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="px-4 py-3 flex gap-3 items-start">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={mechanicAvatar}
            alt="Atendimento Alpha Car Service"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-slate-900">Equipe Alpha Car</span>
          <p className="text-sm text-slate-800 leading-snug">
            Gostaria de colocar sua empresa no topo do Google?
          </p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <Button
          asChild
          className="w-full h-10 bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold rounded-lg text-xs sm:text-sm"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center justify-center gap-2">
              <span>Quero mais clientes</span>
            </span>
          </a>
        </Button>
      </div>
    </div>
  );
}
