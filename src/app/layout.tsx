import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Carro do Sonho | Gestão para revendas', template: '%s | Carro do Sonho' }, description: 'Pátio, documentos, NF-e, RENAVE, vendas e resultados conectados na rotina da revenda.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
