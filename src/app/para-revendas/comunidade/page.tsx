import Link from 'next/link';
import { Community } from '@/components/community';
import { PageIntro } from '@/components/sections';
import { root } from '@/lib/config';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Comunidade de revendas', 'Um espaço em preparação para troca de experiências sobre estoque, documentos, vendas e rotina da revenda.', '/comunidade');
export default function CommunityPage() { return <><PageIntro eyebrow="EXPERIÊNCIAS QUE AJUDAM A ROTINA" title="Uma conversa entre quem vive de revenda." description="Um espaço para compartilhar dúvidas operacionais e experiências de uso do Carro do Sonho, com respeito à privacidade."/><Community/><div className="container community-link"><Link className="button secondary" href={`${root}/duvidas`}>Consultar dúvidas oficiais →</Link></div></>; }
