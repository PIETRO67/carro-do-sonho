export const config = {
  brand: 'Carro do Sonho',
  developer: 'Garcia’s Informática',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || '',
  basePath: process.env.NEXT_PUBLIC_APP_BASE_PATH || '',
  systemUrl: process.env.NEXT_PUBLIC_SYSTEM_URL || 'https://carrodosonho.com.br/admin',
  accountantUrl: process.env.NEXT_PUBLIC_ACCOUNTANT_URL || 'https://carrodosonho.com.br/portal-contador',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP?.replace(/\D/g, '') || '',
};
export const root = '/para-revendas';
export const publicUrl = (path: string) => `${config.siteUrl}${config.basePath}${path}`;
