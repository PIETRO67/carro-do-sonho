import { Footer, Header } from '@/components/site-shell';
import { MotionObserver } from '@/components/motion';
import '../redesign.css';
import { config, publicUrl, root } from '@/lib/config';
export default function CommercialLayout({ children }: { children: React.ReactNode }) {
  const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'Organization', name: config.developer }, { '@type': 'SoftwareApplication', name: config.brand, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: publicUrl(root), description: 'ERP SaaS para gestão de revendas de veículos.', author: { '@type': 'Organization', name: config.developer } }] };
  return <>{config.siteUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>}<Header/><main id="conteudo">{children}</main><Footer/><MotionObserver/></>;
}
