export type FAQ = { question: string; answer: string; category: string; href: string };
export const faqs: FAQ[] = [
  { question: 'O Carro do Sonho serve apenas para controlar o estoque?', answer: 'Não. É um ERP que conecta pátio, avaliação de troca, documentos, contratos, NF-e, RENAVE, CRM, financeiro e vitrine online na rotina da revenda.', category: 'Começando', href: '/funcionalidades' },
  { question: 'Minha loja consegue controlar entrada e saída no RENAVE?', answer: 'O módulo organiza filas de entrada e saída pelo parceiro RENAVEfácil. O uso depende de configuração, requisitos e condições aplicáveis ao serviço.', category: 'Fiscal e RENAVE', href: '/funcionalidades#financeiro' },
  { question: 'O sistema emite NF-e?', answer: 'Sim, NF-e modelo 55. São necessários CNPJ, dados do emitente e certificado digital A1 configurados, além da revisão das regras fiscais com o contador.', category: 'Fiscal e RENAVE', href: '/funcionalidades#financeiro' },
  { question: 'As regras fiscais funcionam automaticamente em qualquer estado?', answer: 'O material descreve seis operações de NF-e e pré-configurações para Goiás. Outros estados e condições exigem validação específica com o fornecedor e o contador responsável.', category: 'Fiscal e RENAVE', href: '/funcionalidades#financeiro' },
  { question: 'É possível trabalhar com veículos consignados?', answer: 'Sim. Há processos de consignação e controle financeiro de repasse para acompanhar a operação e os valores relacionados ao veículo.', category: 'Comercial', href: '/funcionalidades#financeiro' },
  { question: 'Posso divulgar veículos em vários portais?', answer: 'A estrutura oferece feeds e integrações com portais. A disponibilidade depende de ativação, credenciais, homologação e condições contratuais de cada parceiro.', category: 'Integrações', href: '/funcionalidades#patio' },
  { question: 'O sistema tem CRM?', answer: 'Sim. O funil organiza leads em etapas Kanban e acompanha as negociações. A entrada de leads pelos canais depende das integrações configuradas.', category: 'Comercial', href: '/funcionalidades#comercial' },
  { question: 'Consigo saber o lucro de cada carro?', answer: 'O registro do custo de entrada, dos custos de preparação e da venda permite acompanhar indicadores e o resultado por veículo. Os dados precisam ser alimentados pela equipe.', category: 'Comercial', href: '/funcionalidades#financeiro' },
  { question: 'A loja recebe um site próprio?', answer: 'O módulo Website oferece uma vitrine configurável nos estilos Moderno, Premium Dark e Varejo/Feirão. Confirme com a equipe a contratação e as condições para domínio próprio.', category: 'Integrações', href: '/funcionalidades#sistema' },
  { question: 'Consigo usar no celular?', answer: 'O acesso é pelo navegador, com possibilidade de instalar como PWA. Isso não significa um aplicativo nativo disponível nas lojas de aplicativos.', category: 'Começando', href: '/demonstracao' },
  { question: 'Posso dar acesso para vendedores e contador?', answer: 'A equipe pode ter permissões por módulo. O Portal do Contador permite acesso aos XMLs, conforme configuração e permissões da operação.', category: 'Planos e acesso', href: '/funcionalidades#sistema' },
  { question: 'Consultas veiculares têm custo adicional?', answer: 'O material descreve cobrança por uso para consultas veiculares. Confirme valores e condições atuais com a equipe comercial.', category: 'Planos e acesso', href: '/contato' },
  { question: 'Quais são os planos e os preços?', answer: 'O material cita os planos Start e Pro, mas não estabelece uma tabela pública de preços. Consulte nossa equipe para as condições atuais e a composição adequada à sua revenda.', category: 'Planos e acesso', href: '/contato' },
  { question: 'Quanto tempo leva para implantar?', answer: 'O prazo depende da implantação e das configurações necessárias à sua operação. A equipe deverá confirmar as etapas e o prazo após entender a rotina da revenda.', category: 'Começando', href: '/demonstracao' },
  { question: 'Preciso de certificado digital?', answer: 'Para emitir NF-e pelo módulo fiscal, é necessário um certificado digital A1 configurado. A equipe orientará os pré-requisitos de implantação.', category: 'Fiscal e RENAVE', href: '/funcionalidades#financeiro' },
  { question: 'O sistema substitui o serviço do contador?', answer: 'Não. Ele organiza operações e documentos. Os procedimentos e as configurações fiscais devem ser acompanhados e validados pelo contador responsável.', category: 'Fiscal e RENAVE', href: '/funcionalidades#financeiro' },
  { question: 'O Carro do Sonho serve para pequenas revendas?', answer: 'O sistema é voltado a revendas e operações de consignação. Converse com a equipe para avaliar os módulos, as condições comerciais e os requisitos adequados ao tamanho e à rotina da sua loja.', category: 'Começando', href: '/contato' },
  { question: 'Como solicitar uma demonstração?', answer: 'Acesse a página de demonstração e preencha nome, revenda e WhatsApp. O recebimento depende da ativação do canal comercial, informada no próprio formulário; não há confirmação de envio enquanto ele estiver em configuração.', category: 'Começando', href: '/demonstracao#solicitar' },
];
export const families = [
  { id: 'patio', title: 'Gestão & Pátio', intro: 'Da primeira avaliação ao veículo pronto para anunciar.', modules: [
    ['Dashboard', 'Uma visão da operação para acompanhar estoque, vendas e indicadores, a partir dos dados registrados.'],
    ['Estoque', 'Cadastro com até 30 fotos, custos de preparação e QR Code de para-brisa para aproximar o pátio da informação.'],
    ['Avaliações de Troca', 'Checklist de 8 itens, referência FIPE e teto de compra para apoiar uma negociação mais informada.'],
    ['Consultas/Laudos', 'Histórico de consultas relacionado ao veículo. Consultas são cobradas por uso; confirme as condições.'],
    ['Portais & Integrações', 'Campanhas e publicação por veículo, feeds e canais sujeitos a credenciais, homologação e disponibilidade dos parceiros.'],
  ] },
  { id: 'comercial', title: 'Comercial & CRM', intro: 'Mantenha o contexto da negociação até o pós-venda.', modules: [
    ['Leads/CRM', 'Etapas Kanban para acompanhar oportunidades e leads recebidos pelos canais configurados.'],
    ['Clientes', 'Cadastro que reúne os dados usados nas negociações e nos documentos da operação.'],
    ['Contratos', 'Reutilize dados do veículo e do cliente no fechamento da venda, com acompanhamento de garantia e pós-venda.'],
    ['Modelos de Contratos', 'Organize os modelos da loja. Textos e condições devem ser revisados pelo responsável jurídico.'],
  ] },
  { id: 'financeiro', title: 'Financeiro & Fiscal', intro: 'Documente a operação e entenda o resultado de cada carro.', modules: [
    ['Financeiro ERP', 'Caixa, DRE, conciliação OFX/CSV, comissão, rappel e consignações, com custos e resultado por veículo.'],
    ['Fiscal NF-e', 'NF-e 55 com seis operações descritas no material. Exige certificado A1, dados do emitente e revisão tributária; pré-configurações documentadas para Goiás.'],
    ['RENAVE', 'Filas de entrada e saída via RENAVEfácil, mediante configuração, requisitos e condições aplicáveis.'],
  ] },
  { id: 'sistema', title: 'Vitrine & Sistema', intro: 'Uma estrutura para apresentar seu estoque e organizar a equipe.', modules: [
    ['Website', 'Vitrine nos estilos Moderno, Premium Dark e Varejo/Feirão. Condições de domínio próprio a confirmar com a equipe.'],
    ['Equipe & Acessos', 'Permissões por módulo para a equipe, organização documental em GED e Portal do Contador para XMLs.'],
    ['Configurações', 'Dados da loja, preferências e credenciais dos serviços, conforme a implantação de cada operação.'],
    ['Manual do Usuário', 'Orientações de uso para consultar os fluxos e apoiar a rotina de quem opera o sistema.'],
  ] },
];
export const productTabs = [
  { label: 'Pátio e avaliação', title: 'Conheça o carro antes de fechar a troca.', text: 'Informações do veículo e da negociação no mesmo contexto.', bullets: ['Checklist de 8 itens e referência FIPE', 'Teto de compra e custos de preparação', 'Até 30 fotos e QR Code de para-brisa'], screen: 'Estoque e avaliação de troca', icon: 'car' },
  { label: 'Fiscal e RENAVE', title: 'A documentação acompanha a operação.', text: 'Organize o fluxo fiscal e as filas de regularização.', bullets: ['NF-e 55 com certificado A1', 'Entradas e saídas via RENAVEfácil', 'Regras tributárias revisadas com seu contador'], screen: 'Fiscal NF-e e filas RENAVE', icon: 'file' },
  { label: 'Vendas e CRM', title: 'Cada negociação com um próximo passo.', text: 'Acompanhe a oportunidade até o fechamento e o pós-venda.', bullets: ['Funil de leads em Kanban', 'Clientes e contratos conectados', 'Garantia e acompanhamento pós-venda'], screen: 'Leads e negociações', icon: 'users' },
  { label: 'Financeiro', title: 'Enxergue o resultado além do preço de venda.', text: 'Considere os custos registrados para entender cada operação.', bullets: ['Caixa, DRE e lucro por carro', 'Comissões, rappel e consignações', 'Conciliação de arquivos OFX/CSV'], screen: 'Financeiro e resultados', icon: 'chart' },
  { label: 'Vitrine e divulgação', title: 'Seu estoque pronto para ser encontrado.', text: 'Prepare a apresentação e os canais de publicação da revenda.', bullets: ['Vitrine própria em três estilos', 'Publicação e campanhas por veículo', 'Feeds sujeitos à ativação dos parceiros'], screen: 'Website e portais', icon: 'globe' },
  { label: 'Equipe e documentos', title: 'A informação certa para cada pessoa.', text: 'Organize documentos e acessos conforme a rotina da equipe.', bullets: ['Permissões por módulo', 'Dossiê digital e GED', 'Portal do Contador para XMLs'], screen: 'Equipe, GED e Portal do Contador', icon: 'shield' },
];
export const journey = [
  { title: 'Avaliar / Comprar', text: 'Entre na negociação com informação.', steps: ['1. Avaliação e compra'] },
  { title: 'Cadastrar / Documentar', text: 'Dê contexto a cada veículo.', steps: ['2. Entrada no estoque'] },
  { title: 'Regularizar', text: 'Organize a entrada e a preparação.', steps: ['3. Entrada no RENAVE', '4. Preparação'] },
  { title: 'Anunciar / Negociar', text: 'Conecte estoque e oportunidade.', steps: ['5. Publicação', '6. Lead e negociação'] },
  { title: 'Vender / Acompanhar', text: 'Feche o ciclo, acompanhe o resultado.', steps: ['7. Fechamento da venda', '8. Saída RENAVE', '9. Pós-venda'] },
];
export const communityCategories = ['Primeiros passos', 'RENAVE', 'Fiscal', 'Gestão', 'Integrações', 'Sugestões'];
