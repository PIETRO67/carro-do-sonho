import { config, publicUrl, root } from '@/lib/config';
export function GET() {
  const paths = ['', '/funcionalidades', '/demonstracao', '/duvidas', '/comunidade', '/contato'];
  const urls = config.siteUrl ? paths.map(path => `<url><loc>${publicUrl(root + path).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')}</loc></url>`).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
