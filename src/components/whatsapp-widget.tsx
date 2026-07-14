'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import mechanicAvatar from '@/Imagens/atendente.webp';

const whatsappLink =
  'https://wa.me/5531998935665?text=Olá,%20vi%20o%20site%20da%20Alpha%20Car%20Service%20e%20gostaria%20de%20um%20orçamento.';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [previewStep, setPreviewStep] = useState<'typing1' | 'msg1' | 'typing2' | 'msg2'>('typing1');
  const [chatStep, setChatStep] = useState<
    'typing1' | 'msg1' | 'typing2' | 'msg2' | 'typing3' | 'msg3'
  >('typing1');

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setChatStep('typing1');

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(
      setTimeout(() => {
        setChatStep('msg1');
      }, 1500)
    );

    timers.push(
      setTimeout(() => {
        setChatStep('typing2');
      }, 2000)
    );

    timers.push(
      setTimeout(() => {
        setChatStep('msg2');
      }, 3500)
    );

    timers.push(
      setTimeout(() => {
        setChatStep('msg1');
      }, 1500)
    );

    timers.push(
      setTimeout(() => {
        setChatStep('typing2');
      }, 2600)
    );

    timers.push(
      setTimeout(() => {
        setChatStep('msg2');
      }, 4400)
    );

    timers.push(
      setTimeout(() => {
        setChatStep('typing3');
      }, 5500)
    );

    timers.push(
      setTimeout(() => {
        setChatStep('msg3');
      }, 7300)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [isOpen]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPreviewStep('msg1'), 1200));
    timers.push(setTimeout(() => setPreviewStep('typing2'), 1600));
    timers.push(setTimeout(() => setPreviewStep('msg2'), 3000));
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);
  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-6 z-50 flex flex-col sm:flex-row items-end sm:items-center gap-1.5 sm:gap-2 focus:outline-none group"
      >
        <div className="flex flex-col items-end gap-1 max-w-[200px] sm:max-w-xs whatsapp-notification-enter">
          {previewStep === 'typing1' && (
            <div className="max-w-[190px] sm:max-w-[230px]">
              <div className="rounded-3xl rounded-br-md bg-white shadow-[0_8px_22px_rgba(15,23,42,0.16)] border border-slate-200/80 px-2.5 py-1 sm:px-3 sm:py-1.5 flex items-center text-[11px] sm:text-[12px]">
                <span className="flex gap-1 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                  <span className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                  <span className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                </span>
              </div>
            </div>
          )}
          {previewStep === 'msg1' && (
            <div className="max-w-[190px] sm:max-w-[230px]">
              <div className="rounded-3xl rounded-br-md bg-white shadow-[0_8px_22px_rgba(15,23,42,0.16)] border border-slate-200/80 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-[12px] text-slate-800 text-left">
                <span className="block font-semibold text-slate-900 text-[11px] sm:text-[12px]">
                  Equipe Alpha Car
                </span>
                <span className="block mt-0.5">
                  Olá! Tudo bem?
                </span>
              </div>
            </div>
          )}
          {previewStep === 'typing2' && (
            <>
              <div className="max-w-[190px] sm:max-w-[230px]">
                <div className="rounded-3xl rounded-br-md bg-white shadow-[0_8px_22px_rgba(15,23,42,0.16)] border border-slate-200/80 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-[12px] text-slate-800 text-left">
                  <span className="block font-semibold text-slate-900 text-[11px] sm:text-[12px]">
                    Equipe Alpha Car
                  </span>
                  <span className="block mt-0.5">
                    Olá! Tudo bem?
                  </span>
                </div>
              </div>
              <div className="max-w-[190px] sm:max-w-[230px]">
                <div className="rounded-3xl rounded-br-md bg-white shadow-[0_8px_22px_rgba(15,23,42,0.16)] border border-slate-200/80 px-2.5 py-1.5 sm:px-3 sm:py-2 flex items-center">
                  <span className="flex gap-1 text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                    <span className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                    <span className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
                  </span>
                </div>
              </div>
            </>
          )}
          {previewStep === 'msg2' && (
            <>
              <div className="max-w-[190px] sm:max-w-[230px]">
                <div className="rounded-3xl rounded-br-md bg-white shadow-[0_8px_22px_rgba(15,23,42,0.16)] border border-slate-200/80 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-[12px] text-slate-800 text-left">
                  <span className="block font-semibold text-slate-900 text-[11px] sm:text-[12px]">
                    Equipe Alpha Car
                  </span>
                  <span className="block mt-0.5">
                    Olá! Tudo bem?
                  </span>
                </div>
              </div>
              <div className="max-w-[190px] sm:max-w-[230px] mt-1">
                <div className="rounded-3xl rounded-br-md bg-white shadow-[0_8px_22px_rgba(15,23,42,0.16)] border border-slate-200/80 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-[12px] text-slate-800 text-left">
                  <span className="block font-semibold text-slate-900 text-[11px] sm:text-[12px]">
                    Equipe Alpha Car
                  </span>
                  <span className="block mt-0.5">
                    Posso ajudar com orçamento ou alguma dúvida?
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="relative w-14 h-14 rounded-full shadow-lg transition-all duration-200">
          <Image
            src={mechanicAvatar}
            alt="Atendimento Alpha Car Service"
            fill
            className="rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 online-dot" />
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-6 z-50 flex flex-col items-end gap-3">
      <div className="w-[280px] sm:w-[300px] rounded-3xl shadow-2xl bg-white overflow-hidden border border-slate-200">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-3.5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full">
              <Image
                src={mechanicAvatar}
                alt="Atendimento Alpha Car Service"
                fill
                className="rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 online-dot" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[13px] leading-tight">Equipe Alpha Car</span>
              <span className="text-[11px] text-emerald-100">Online agora</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-white"
            aria-label="Fechar conversa do WhatsApp"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-[rgba(236,240,241,0.9)] px-3 py-3 space-y-2.5 max-h-[240px] overflow-y-auto">
          {(chatStep === 'typing1' || chatStep === 'msg1' || chatStep === 'typing2' || chatStep === 'msg2' || chatStep === 'typing3' || chatStep === 'msg3') && (
            <div className="flex justify-start">
              <div className="bg-white rounded-3xl rounded-bl-md shadow-[0_10px_26px_rgba(15,23,42,0.18)] border border-slate-200/80 px-2.5 py-1.75 sm:px-3 sm:py-2 text-[11px] sm:text-[12px] max-w-[85%] sm:max-w-[80%] text-left">
                <span className="block font-semibold text-slate-900 text-[11px] sm:text-[12px]">Equipe Alpha Car</span>
                <span className="block text-slate-800 mt-0.5 text-[11px] sm:text-[12px] leading-relaxed">Olá! Tudo bem?</span>
              </div>
            </div>
          )}
          {(chatStep === 'typing2' || chatStep === 'msg2' || chatStep === 'typing3' || chatStep === 'msg3') && (
            <div className="flex justify-start">
              <div className="bg-white rounded-3xl rounded-bl-md shadow-[0_10px_26px_rgba(15,23,42,0.18)] border border-slate-200/80 px-2.5 py-1.75 sm:px-3 sm:py-2 text-[11px] sm:text-[12px] max-w-[85%] sm:max-w-[80%] text-left">
                <span className="block font-semibold text-slate-900 text-[11px] sm:text-[12px]">Equipe Alpha Car</span>
                {chatStep === 'typing2' ? (
                  <span className="block mt-1">
                    <span className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-300 inline-block typing-dot" />
                      <span className="w-2 h-2 rounded-full bg-gray-300 inline-block typing-dot" />
                      <span className="w-2 h-2 rounded-full bg-gray-300 inline-block typing-dot" />
                    </span>
                  </span>
                ) : (
                  <span className="block text-slate-800 mt-0.5 text-[11px] sm:text-[12px] leading-relaxed">
                    Quer deixar seu carro em dia com confiança?
                  </span>
                )}
              </div>
            </div>
          )}
          {(chatStep === 'typing3' || chatStep === 'msg3') && (
            <div className="flex justify-start">
              <div className="bg-white rounded-3xl rounded-bl-md shadow-[0_10px_26px_rgba(15,23,42,0.18)] border border-slate-200/80 px-2.5 py-1.75 sm:px-3 sm:py-2 text-[11px] sm:text-[12px] max-w-[85%] sm:max-w-[80%] text-left">
                <span className="block font-semibold text-slate-900 text-[11px] sm:text-[12px]">Equipe Alpha Car</span>
                {chatStep === 'typing3' ? (
                  <span className="block mt-1">
                    <span className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-300 inline-block typing-dot" />
                      <span className="w-2 h-2 rounded-full bg-gray-300 inline-block typing-dot" />
                      <span className="w-2 h-2 rounded-full bg-gray-300 inline-block typing-dot" />
                    </span>
                  </span>
                ) : (
                  <span className="block text-slate-800 mt-0.5 text-[11px] sm:text-[12px] leading-relaxed">
                    Quer cuidar melhor do seu veículo? Vamos conversar?
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="px-4 py-3 bg-white border-t border-slate-100">
          <Button
            asChild
            className="w-full h-11 bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold rounded-xl text-sm shadow-md hover:shadow-lg transition-shadow"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center justify-center gap-2">
                <WhatsAppIcon className="w-5 h-5" />
                <span>Quero falar pelo WhatsApp</span>
              </span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
