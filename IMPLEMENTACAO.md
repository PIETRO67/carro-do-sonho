# Registro de implementação e revisão

## Escopo e auditoria

- Workspace vazio; nenhuma experiência em produção alterada.
- PDF e assets não encontrados em busca recursiva no workspace.
- Conteúdo derivado exclusivamente dos fatos consolidados do briefing, com ressalvas fiscais e comerciais.
- Next.js App Router + React + TypeScript; CSS com tokens, sem biblioteca de UI pesada.
- Entrega local; publicação em domínio não executada.

## Implementado

- Homepage com dez blocos editoriais, navegação sticky, menu mobile, CTAs consistentes e rodapé.
- Hero tipográfico e diagrama conceitual, sem dashboard fictício.
- Jornada com cinco macroetapas e nove etapas detalhadas.
- Abas operáveis por teclado, FAQ de item único e busca sem sensibilidade a acentos.
- Showroom com três passos e modal nativo acessível.
- Dezesseis módulos organizados nas quatro famílias solicitadas.
- Comunidade vazia com busca/filtros, regras visíveis e publicação desabilitada.
- Formulário com validação de cliente/servidor, máscara, honeypot e adapter comercial privado.
- Captação bloqueada enquanto destino, política e proteções de produção não estiverem configurados.
- Metadata por rota, canonical configurável, Open Graph textual, sitemap isolado e JSON-LD sem ofertas/ratings inventados.
- Tokens responsivos para 360–1440 px, foco visível e preferência por movimento reduzido.

## Itens pendentes de material/decisão da equipe

- PDF completo, logo oficial e screenshots legíveis. Substituir placeholders e conferir conteúdo contra as 30 páginas.
- Política/termos definitivos e identificação legal; liberação explícita por configuração.
- Contatos oficiais, origem pública, eventual basePath e ambiente final.
- Destino de leads e contrato de confirmação/idempotência; Redis compartilhado, segredo e proxy confiável.
- Backend/auth/moderação antes de habilitar comunidade real.
- Confirmação de planos, serviços pagos, parceiros e condições de implantação.

Consulte `README.md` e `.env.example` para executar e configurar.

## Validação executada

- `npm run lint`: passou, sem erros ou avisos.
- `npm run typecheck`: passou.
- `npm test`: 6 testes passaram (normalização, contato válido, consentimento, honeypot, payload adulterado e máscara).
- `npm run build`: passou; Next.js 16.3.8, rotas estáticas e dinâmicas geradas.
- Playwright em Chromium: 10 testes passaram. Rotas, destinos do ERP, teclado nas abas, busca/accordion, validação de formulário, indisponibilidade sem sucesso falso, modal, comunidade vazia e API.
- Responsividade: seis páginas principais sem overflow horizontal em 360, 390, 768, 1024 e 1440 px. Menu abre e fecha com Escape nas larguras compactas.
- Capturas `artifacts/home-{largura}.png`, `artifacts/mobile-hero.png` e `artifacts/desktop-hero.png`. Inspeção visual de desktop completo e heroes desktop/mobile realizada.
- Uma pequena extensão horizontal causada pelo efeito decorativo do hero foi corrigida antes da rodada final.

Os testes foram executados com servidor de produção local na porta 3001 (`TEST_PORT=3001`, `TEST_EXTERNAL_SERVER=1`). Dependências foram instaladas do cache público npm existente porque a rede externa estava restrita; o lockfile final referencia o registro npm padrão, sem URLs do auxiliar local. Nenhum serviço comercial real foi configurado ou recebeu dados de teste. Entrega não publicada.

Não foi realizada auditoria formal WCAG nem medição Lighthouse. Capturas oficiais, validação com a equipe e teste de entrega do webhook continuam pendentes.
