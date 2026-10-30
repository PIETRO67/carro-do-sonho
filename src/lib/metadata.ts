import type { Metadata } from 'next';
import { config, publicUrl, root } from './config';
export function pageMetadata(title: string, description: string, path = ''): Metadata {
  const url = config.siteUrl ? publicUrl(`${root}${path}`) : undefined;
  return { title, description, alternates: url ? { canonical: url } : undefined, openGraph: { title: `${title} | Carro do Sonho`, description, locale: 'pt_BR', type: 'website', ...(url ? { url } : {}) }, robots: config.siteUrl ? { index: true, follow: true } : { index: false, follow: false } };
}
