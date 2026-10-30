# Redesign — Automotive Tech Premium

## Implementação

Reformulação da homepage e da linguagem visual compartilhada, preservando Next.js 16, React 19, TypeScript, rotas sob `/para-revendas`, metadata, SEO, formulário, adapter comercial, regras de captação e os destinos externos do ERP e Portal do Contador. Nenhuma mudança no backend.

- Hero cinematográfico com automóvel integrado à composição, conteúdo legível, CTAs reais, fotografia editorial local e entrada curta sem bloquear a leitura.
- Comparação Antes/Com Carro do Sonho com estado real, reorganização dos elementos e descrição acessível da mudança.
- Jornada do veículo em nove etapas: linha horizontal com indicador progressivo no desktop e stepper vertical no mobile. Texto, benefício e mídia mudam com cada seleção. Controles anterior/próxima com limites.
- Seção documental editorial clara com seleção RENAVE, NF-e e contratos. Mantém requisitos do parceiro, A1, pré-configurações de Goiás e revisão contábil/jurídica.
- Abas de produto com composição ampliada: narrativa e benefícios acima de uma área grande de mídia. Navegação por setas/Home/End preservada.
- Três demonstrações com três passos cada, avanço/retorno, limites, seleção de jornada e modal acessível. Sem operações reais.
- Mapa de integrações com cadastro no centro, conexão visual e nomes dos canais. Não afirma ativação automática ou usa marcas gráficas sem assets.
- Seções claras de comparação, documentação e organização; grafite na jornada; petróleo na demonstração. Ritmo visual sem sequência uniforme de cards.
- Encerramento fotográfico com CTA para o formulário existente.
- Fontes locais de sistema, textos maiores, foco visível, transições curtas, revelação por IntersectionObserver e respeito a `prefers-reduced-motion`. Sem biblioteca de animação adicional ou loops contínuos.
- FAQ ampliada para 18 perguntas. Comunidade continua vazia e sem publicação; categorias Primeiros passos, RENAVE, Fiscal, Gestão, Integrações e Sugestões.

## Produto real: limitação de material

Nenhuma captura real do ERP foi utilizada: continuam ausentes PDF, screenshots, logo oficial e vídeo. A busca foi repetida no projeto. Não há dados de faturamento, clientes ou telas artificiais apresentados como prova.

Em vez dos antigos espaços vazios, `ProductScreen` mostra mapas conceituais dos processos, com aviso explícito de que não representam a interface. Isso não satisfaz o critério de produto visível com capturas reais; a conclusão desse ponto depende do fornecimento de material oficial.

`src/lib/product-media.ts` centraliza os arquivos a fornecer. Ao preencher `src` com o caminho local oficial, o componente usa imagem responsiva, legenda e lightbox nativo. Revisar textos alternativos e proporções. Prioridades: Dashboard, Estoque/Avaliação, NF-e/RENAVE, CRM, Financeiro, Website e GED/Portal do Contador. O hero ainda usa o mapa conceitual e deve receber composição com Dashboard oficial na etapa de integração dos assets.

## Imagem editorial e proveniência

Ferramenta: **imagegen nativo**, sem API key ou fallback CLI. Arquivos finais:

- `public/assets/automotive-studio.webp`, 1536 × 1024, 126.338 bytes.
- `public/assets/automotive-studio-mobile.webp`, 960 × 640, 54.394 bytes; derivado reservado para uso posterior.

Não foram utilizados assets externos licenciados: o download externo estava indisponível. A imagem foi gerada, não fotografada em uma loja real. O site identifica esse caráter ilustrativo. O original fica no diretório de imagens geradas do ambiente; somente o WebP local é consumido pelo site.

Prompt final usado:

> Create a premium automotive editorial photograph for a Brazilian automotive SaaS marketing website. Photorealistic, sophisticated, NOT an illustration or 3D looking render. Wide landscape 1536x1024 or wider. A beautiful contemporary unbranded graphite silver sports coupe parked in a dark architectural automotive studio/showroom, front three quarter view, facing left, car occupies right 70% of composition, full car visible and low in frame. No logos, no readable license plates, no people, no words or UI. Carbon black polished concrete, brushed metal walls, thin overhead white studio light strips reflecting naturally along the sculpted body, very subtle emerald reflected ambient light on the floor, silver and warm grey highlights. Cinematic but restrained, genuine photographic detail, large negative dark space upper left, crisp car, soft architectural depth. Used as illustrative editorial photography, not evidence of real customer showroom. Save generated image asset for local website integration.

## Verificações

- Lint, TypeScript e build de produção: aprovados.
- 6 testes unitários aprovados.
- 12 testes Playwright em Chromium aprovados: rotas, links externos, abas/teclado, FAQ/busca, formulário sem sucesso falso, modal, comunidade vazia, comparação, nove etapas, seletor fiscal, tutorial com retorno, API, carregamento de imagem e movimento reduzido.
- Sem overflow horizontal nas seis páginas principais em 360, 390, 768, 1024 e 1440 px.
- Capturas em `artifacts/home-{largura}.png` e `artifacts/redesign-*.png`. Revisão visual de hero desktop/mobile, comparação, jornada mobile e seção de produto desktop.
- Arquivo WebP já otimizado é servido diretamente; evitada a recompressão dinâmica que atrasou o carregamento desktop neste ambiente.

Sem medição Lighthouse ou auditoria formal WCAG. Não há publicação neste trabalho. Para executar, `npm.cmd run dev` e abrir `/para-revendas`.

## Pendências preservadas

PDF/telas/logo oficiais; política e termos revisados; canais de contato oficiais; webhook comercial e rate limit de produção configurados. O formulário continua informando a indisponibilidade quando esses requisitos não estão satisfeitos. Comunidade só poderá publicar após auth, persistência, moderação e antispam reais.
