'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Plus, Search, ArrowRight } from 'lucide-react';
import { faqs } from '@/lib/content';
import { root } from '@/lib/config';
import { track } from './analytics';
export function FAQList({ searchable = false }: { searchable?: boolean }) {
  const [query, setQuery] = useState(''); const [category, setCategory] = useState('Todas'); const [open, setOpen] = useState<number | null>(null);
  const normalized = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const items = (searchable ? faqs : faqs.filter((_, i) => [1, 2, 4, 7, 9, 10, 17].includes(i))).filter(f => (category === 'Todas' || category === f.category) && normalized(f.question + f.answer).includes(normalized(query)));
  return <div className="faq-widget">{searchable && <><label className="search-box"><Search size={19}/><span className="sr-only">Buscar nas dúvidas</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="O que você quer saber? Ex.: RENAVE, celular, planos"/></label><div className="filter-list" aria-label="Filtrar dúvidas por tema">{['Todas', ...new Set(faqs.map(f => f.category))].map(c => <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}</div><p className="small-text muted" role="status">{items.length} {items.length === 1 ? 'dúvida encontrada' : 'dúvidas encontradas'}</p></>}
    <div className="faq-list">{items.map(f => { const i = faqs.indexOf(f); return <div className="faq-item" key={f.question}><h3><button type="button" id={`faq-question-${i}`} aria-expanded={open === i} aria-controls={`faq-answer-${i}`} onClick={() => { setOpen(open === i ? null : i); if (open !== i) track('faq_open', f.question); }}>{f.question}<Plus size={19} className={open === i ? 'rotated' : ''}/></button></h3><div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={open !== i} className="faq-answer"><p>{f.answer}</p>{f.category === 'Fiscal e RENAVE' && <p className="fiscal-note">As configurações tributárias devem ser validadas com o contador responsável.</p>}<Link href={`${root}${f.href}`}>Saiba mais <ArrowRight size={14}/></Link></div></div>; })}</div>{!items.length && <div className="empty-state"><h3>Nenhuma dúvida com esse termo.</h3><p>Tente outra palavra ou escolha outro tema.</p><button type="button" className="button secondary" onClick={() => { setQuery(''); setCategory('Todas'); }}>Limpar busca</button></div>}</div>;
}
