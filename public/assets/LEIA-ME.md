# Assets oficiais pendentes

O workspace estava vazio e não continha o PDF `Carro_do_Sonho_Documentacao_Completa(3).pdf` (30 páginas, 20/10/2026, Agmar Alves Hilario).

Não foram extraídas telas nem logotipo. A marca tipográfica e o símbolo usados no site são provisórios e assim identificados no rodapé. O diagrama do hero é conceitual, não uma captura de interface.

Fornecer o logo oficial em SVG ou PNG e capturas legíveis das páginas 2, 5, 9–12, 15–17, 19–22, 26 e 28. Prioridade: Dashboard, Estoque/Avaliação, NF-e, filas RENAVE, CRM, Financeiro, Website, GED e Portal do Contador.

Remover ou anonimizar dados pessoais das capturas. As telas da loja de teste não comprovam faturamento ou resultados comerciais.

Na integração, preencher o `src` correspondente em `src/lib/product-media.ts`. O componente `ProductScreen` já utiliza `next/image`, tamanhos responsivos, legenda, lazy loading e ampliação por dialog nativo. Verificar a proporção e legibilidade de cada captura antes de publicar. Não substituir por dashboard inventado.

## Fotografia editorial do redesign

`automotive-studio.webp` (1536 × 1024, ~126 KB) e `automotive-studio-mobile.webp` (960 × 640, ~54 KB): imagem sintética criada com a ferramenta nativa imagegen. Uso editorial ilustrativo identificado na página; não é fotografia de cliente, revenda real ou captura do ERP. Sem logotipos, placas legíveis ou pessoas. O arquivo principal já está comprimido e é servido localmente por `next/image` sem recompressão dinâmica. O derivado mobile fica disponível para usos futuros.

Prompt e proveniência detalhados em `REDESIGN.md`.
