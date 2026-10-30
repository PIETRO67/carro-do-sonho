import Link from 'next/link';
export const metadata = { robots: { index: false, follow: false } };
export default function Index() { return <main className="standalone"><p className="eyebrow">Carro do Sonho</p><h1>Gestão para a sua revenda.</h1><p>Este projeto contém o site de apresentação comercial. O portal de veículos e o ERP continuam nos seus endereços existentes.</p><Link className="button primary" href="/para-revendas">Conhecer o sistema →</Link></main>; }
