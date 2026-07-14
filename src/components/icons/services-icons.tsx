// Arquivo: src/components/icons/services-icons.tsx

import React from 'react';
import Image from 'next/image';
import { Zap, Cpu } from 'lucide-react';

import RevisaoPng from '@/Imagens/REVISAO.webp';
import SuspensaoPng from '@/Imagens/SUSPENSÃO - Copia.webp';
import TrocaOleoPng from '@/Imagens/TROCA DE OLEO.webp';
import FreioPng from '@/Imagens/FREIO - Copia (2).webp';
import BateriaPng from '@/Imagens/BATERIA - Copia - Copia.webp';
import EmbreagemPng from '@/Imagens/EMBREAGEM - Copia - Copia.webp';
import InjecaoEletronicaPng from '@/Imagens/INJEÇÃO ELETRONICA - Copia.webp';
import EscapamentoPng from '@/Imagens/ESCAPAMENTO - Copia - Copia.webp';

const iconSize = 64;
const iconClassName = 'w-16 h-16 object-contain filter brightness-0 invert';

export const RevisaoIcon = () => (
  <Image
    src={RevisaoPng}
    alt="Ícone de revisão automotiva"
    width={iconSize}
    height={iconSize}
    className={iconClassName}
  />
);

export const SuspensaoIcon = () => (
  <Image
    src={SuspensaoPng}
    alt="Ícone de suspensão automotiva"
    width={iconSize}
    height={iconSize}
    className={iconClassName}
  />
);

export const TrocaOleoIcon = () => (
  <Image
    src={TrocaOleoPng}
    alt="Ícone de troca de óleos"
    width={iconSize}
    height={iconSize}
    className={iconClassName}
  />
);

export const FreiosIcon = () => (
  <Image
    src={FreioPng}
    alt="Ícone de sistema de freios (ABS)"
    width={iconSize}
    height={iconSize}
    className={iconClassName}
  />
);

export const BateriaIcon = () => (
  <Image
    src={BateriaPng}
    alt="Ícone de bateria automotiva"
    width={iconSize}
    height={iconSize}
    className={iconClassName}
  />
);

export const EmbreagemIcon = () => (
  <Image
    src={EmbreagemPng}
    alt="Ícone de embreagem automotiva"
    width={iconSize}
    height={iconSize}
    className={iconClassName}
  />
);

export const InjecaoEletronicaIcon = () => (
  <Image
    src={InjecaoEletronicaPng}
    alt="Ícone de injeção eletrônica"
    width={iconSize}
    height={iconSize}
    className={iconClassName}
  />
);

export const EscapamentosIcon = () => (
  <Image
    src={EscapamentoPng}
    alt="Ícone de escapamento automotivo"
    width={iconSize}
    height={iconSize}
    className={iconClassName}
  />
);

export const EletricaIcon = () => (
  <Zap className="w-16 h-16 text-white" strokeWidth={1} />
);

export const DiagnosticoIcon = () => (
  <Cpu className="w-16 h-16 text-white" strokeWidth={1} />
);
