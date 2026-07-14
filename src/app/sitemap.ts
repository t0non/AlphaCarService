import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alphacarservicebh.com';

  const services = [
    'servicos',
    'revisao-automotiva-bh',
    'diagnostico-automotivo-bh',
    'freios-automotivos-bh',
    'suspensao-automotiva-bh',
    'injecao-eletronica-bh',
    'eletrica-automotiva-bh',
    'troca-de-oleo-bh',
    'embreagem-bh',
    'higienizacao-ar-condicionado-bh'
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/localizacao`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...services,
  ];
}
