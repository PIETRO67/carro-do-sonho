import { LeadForm } from '@/components/lead-form';
import { PageIntro } from '@/components/sections';
import { config } from '@/lib/config';
import { pageMetadata } from '@/lib/metadata';
import { leadReady } from '@/lib/lead-adapter';
export const dynamic = 'force-dynamic';
export const metadata = pageMetadata('Contato comercial', 'Converse sobre a rotina da sua revenda e as condições do Carro do Sonho.', '/contato');
export default function Contact() { return <><PageIntro eyebrow="CONTATO COMERCIAL" title="Vamos falar sobre a sua revenda." description="Tire dúvidas sobre o sistema, requisitos de implantação e condições comerciais."/><section className="container contact-layout"><div><h2>O próximo passo começa pela sua rotina.</h2><p>Informe o básico sobre a loja. A equipe poderá entender os desafios e apresentar o fluxo mais relevante para você.</p>{config.email && <p><a className="text-link" href={`mailto:${config.email}`}>{config.email}</a></p>}{config.whatsapp && <a className="button secondary" href={`https://wa.me/${config.whatsapp}`}>Conversar no WhatsApp ↗</a>}{!config.email && !config.whatsapp && <p className="notice">Os canais diretos oficiais ainda precisam ser fornecidos pela equipe. Nenhum endereço ou telefone foi presumido.</p>}<p className="muted small-text">Desenvolvido pela {config.developer}. O contato comercial não recebe certificados digitais, senhas ou documentos de clientes.</p></div><LeadForm ready={leadReady()}/></section></>; }
