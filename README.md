# Carro do Sonho — site comercial

Implementação local em Next.js App Router, TypeScript e CSS com tokens. Componentes acessíveis leves e ícones Lucide. Sem dependência de fontes externas, trackers ou animação pesada. Nenhuma API ou regra do ERP é recriada.

## Executar

Requer Node.js 22.18+ (ou 24+) e npm para executar os testes TypeScript nativos. No PowerShell, utilize `npm.cmd` se a política local bloquear `npm.ps1`.

```sh
npm ci
npm run dev
# http://localhost:3000/para-revendas

npm run lint
npm run typecheck
npm test
npm run build
npm run start
npm run test:e2e
```

Os testes de navegador exigem o Chromium do Playwright (`npx playwright install chromium` quando não estiver disponível). Capturas desktop/mobile são gravadas em `artifacts/`.

## Auditoria e fonte de conteúdo

O diretório estava vazio: sem repositório do produto, convenções, rotas, dependências, autenticação, backend, serviços comerciais, logo, screenshots ou PDF. Foram usados os fatos consolidados no briefing do usuário; **não foi possível ler ou conferir o PDF**. Não há clientes, preços, métricas, certificados, integrações ativadas ou depoimentos presumidos.

As telas oficiais continuam pendentes. O redesign utiliza mapas de processo rotulados, sem imitar o ERP, e fotografia editorial sintética automotiva local. O logo é provisório e precisa ser substituído pelo oficial. Consulte `public/assets/LEIA-ME.md` e `REDESIGN.md`.

## Rotas

- `/para-revendas`: apresentação completa, jornada, abas, demo guiada e FAQ.
- `/para-revendas/funcionalidades`: 16 módulos nas quatro famílias do briefing.
- `/para-revendas/demonstracao`: showroom ilustrativo e formulário.
- `/para-revendas/duvidas`: 18 respostas, busca local e categorias.
- `/para-revendas/comunidade`: interface com busca e filtros, estado vazio e publicação desabilitada.
- `/para-revendas/contato`: formulário e canais oficiais configuráveis.
- `/para-revendas/privacidade` e `/para-revendas/termos`: rascunhos sinalizados, fora do índice.
- `/para-revendas/api/leads`: POST validado, adapter HTTPS e proteção de envio.
- `/para-revendas/sitemap.xml`: sitemap apenas das rotas comerciais.

A raiz deste projeto separado é apenas um acesso à apresentação. Não implante este projeto substituindo a raiz do portal. Integre as rotas em um projeto existente ou use proxy para encaminhar exclusivamente `/para-revendas` (incluindo `/para-revendas/api/*`) e os assets Next necessários em hospedagem dedicada. **Não sobrescreva `/admin`, `/portal-contador`, vitrines ou o agregador.** O botão de acesso aponta ao ERP existente. Não existem rotas locais que o imitem.

## Configuração para a equipe

Copie `.env.example` para `.env.local` e ajuste:

1. Origem pública `NEXT_PUBLIC_SITE_URL` para canonical, Open Graph, JSON-LD e sitemap. Sem essa origem o conteúdo fica `noindex`. Não há `robots.txt` global, evitando alterar as regras do portal; referencie o sitemap no arquivo oficial após revisão.
2. `APP_BASE_PATH` e `NEXT_PUBLIC_APP_BASE_PATH` devem ter o mesmo valor (vazios por padrão). Prefixo adicional sem barra final, ex.: `/institucional`. O caminho comercial passa a ser `/institucional/para-revendas`. Rebuild necessário. Não use `/para-revendas` como basePath porque as rotas já contêm esse prefixo.
3. URLs oficiais do ERP e do Portal do Contador. Confirmar e-mail e WhatsApp oficiais, sem segredos em variáveis `NEXT_PUBLIC_*`.
4. Logo oficial, screenshots nítidos e eventual vídeo oficial legendado. Substituir placeholders e identidade provisória. Criar imagem Open Graph oficial se fornecida; não há thumbnail fictícia.
5. Revisão jurídica e publicação da política e dos termos; depois `LEAD_PRIVACY_APPROVED=true`. Atualizar a versão de consentimento no adapter ao revisar o documento.
6. `LEAD_WEBHOOK_URL` HTTPS e token privado opcional. Pode apontar para CRM/n8n/e-mail transacional. O endpoint deve retornar 2xx **somente após aceitar/persistir o lead**, e respeitar `Idempotency-Key`. Sem destino, o site não declara sucesso nem salva contatos. Erros e indisponibilidade são mostrados ao usuário. Não há fila local nem promessa de entrega em caso de timeout.
7. Em produção: Redis REST compartilhado (`UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`) e `RATE_LIMIT_SECRET` aleatório de pelo menos 32 caracteres. Limite: 5 solicitações por identificador de rede a cada janela de 10 minutos; chave com hash e expiração. Em desenvolvimento, mapa local efêmero. Não capturar logs com payloads pessoais.
8. Proxy de produção deve **sobrescrever** `X-Forwarded-For` e impedir acesso direto ao origin; não confiar em cabeçalho fornecido pelo cliente. Configurar também limites de corpo e rate limit no ingress. Sem Redis/segredo em produção, captação fica bloqueada.
9. Para comunidade real: implementar o contrato `src/lib/community-service.ts` com autenticação, persistência, permissões de autor/moderador, paginação, denúncia, exclusão lógica, antispam/rate limit, validação server-side e logs de moderação. Não ativar publicação antes desses controles.
10. Confirmar comercialmente planos Start/Pro, preços, condições de consultas por uso, requisitos RENAVEfácil, estados fiscais, portais e domínio próprio. Não publicar tutorial DNS: o briefing aponta divergência nos destinos CNAME da documentação.

## Privacidade e segurança

Validação BR de celular e dos campos em cliente e servidor, erros por campo, honeypot, verificação de origem, limite de corpo e limite de tentativas. O adapter usa timeout e não expõe credenciais. O recebimento só informa sucesso após confirmação 2xx do destino. Não são persistidos leads em arquivos públicos. Dados nunca vão a analytics.

Eventos `view_demo`, `start_lead_form`, `submit_lead_success`, `faq_open`, `feature_tab_change` disponíveis por `CustomEvent('cds:analytics')`, apenas se consentimento explícito estiver registrado como `cds_analytics_consent=granted`. Não existe transmissão, tracker ou banner de consentimento desnecessário; uma futura integração deve criar a experiência aplicável de consentimento.

## Decisões visuais e limites

Direção Automotive Tech Premium: hero e encerramento com imagem automotiva local, alternância de carbono, grafite e superfícies claras minerais, tipografia grande e composição editorial. Comparação Antes/Depois, jornada de nove etapas, seletor documental e tutoriais interativos. CSS nativo e IntersectionObserver, sem biblioteca de motion adicional. Tipografia de sistema (Bahnschrift/Arial) evita dependência externa; fonte oficial pode ser adicionada com `next/font/local` quando disponibilizada.

Não há vídeo, métricas comerciais fictícias, NF-e simulada ou registros RENAVE de mentira. A imagem sintética é editorial, identificada na página, sem associação a uma loja real. As respostas fiscais explicitam pré-requisitos e revisão contábil. Preços, SLA e garantias não documentados são encaminhados à equipe.
