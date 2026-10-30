import { FAQList } from '@/components/faq';
import { CTA, PageIntro } from '@/components/sections';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Dúvidas frequentes', 'Respostas sobre implantação, NF-e, RENAVE, integrações, estoque, CRM, planos e acesso ao Carro do Sonho.', '/duvidas');
export default function Questions() { return <><PageIntro eyebrow="INFORMAÇÃO PARA DECIDIR" title="Perguntas reais. Respostas diretas." description="Entenda o que o sistema oferece, o que precisa ser configurado e o que confirmar com a equipe."/><section className="container questions-page"><FAQList searchable/><p className="fiscal-note">Conteúdo oficial de apresentação, baseado nos fatos consolidados do briefing. Nas questões fiscais, valide as configurações com o contador responsável.</p></section><CTA/></>; }
