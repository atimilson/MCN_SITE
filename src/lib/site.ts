export const SITE = {
  name: "MCN Software",
  legalName: "MCN Sistemas",
  foundedYear: 2002,
  clients: 500,
  email: "glaucia@mcnsistemas.com.br",
  phones: [
    { label: "(65) 3054-4338", href: "tel:6530544338" },
    { label: "(65) 3054-4339", href: "tel:6530544339" },
  ],
  whatsapp: {
    number: "556592695937",
    label: "(65) 99269-5937",
    defaultMessage: "Olá! Gostaria de mais informações sobre os sistemas MCN.",
  },
  address: {
    street: "Av. Agrícola Paes de Barros, 790",
    district: "Cidade Alta",
    city: "Cuiabá/MT",
    zip: "78030-210",
  },
  social: {
    instagram: "https://www.instagram.com/mcnsistemas/",
    youtube: "https://www.youtube.com/@McnSoftware1731",
  },
  /**
   * Apps publicados no Google Play.
   * `match` liga o app da loja ao aplicativo cadastrado no Cosmic (slug ou título).
   */
  playApps: [
    {
      name: "MCN Pedido Externo",
      description: "Pedidos e vendas externas, mesmo sem internet.",
      url: "https://play.google.com/store/apps/details?id=com.atimilson.MobilePedidoOffline2",
      match: /vendas-externa|venda externa|vendas externa/i,
    },
    {
      name: "MCN Estoque",
      description: "Controle de inventário e cadastro de código de barras.",
      url: "https://play.google.com/store/apps/details?id=com.MCN.APPINVENTARIOV2",
      match: /estoque|c[oó]digo de barras/i,
    },
    {
      name: "MCN Faturamento",
      description: "Aplicativo complementar ao ERP MCN Software.",
      url: "https://play.google.com/store/apps/details?id=com.mcnfaturamento.app",
      match: null,
    },
    {
      name: "MCN OS Auto Peças",
      description: "Check-in e execução de ordens de serviço para oficinas e auto peças.",
      url: "https://play.google.com/store/apps/details?id=com.mcn.mobileosautopecas",
      match: null,
    },
  ],
  downloads: {
    teamviewer: "https://mcn-tutoriais.s3.sa-east-1.amazonaws.com/TeamViewerQS10.exe",
    anydesk: "https://mcn-tutoriais.s3.sa-east-1.amazonaws.com/AnyDesk.exe",
  },
  states: [
    { uf: "MT", name: "Mato Grosso" },
    { uf: "MS", name: "Mato Grosso do Sul" },
    { uf: "GO", name: "Goiás" },
    { uf: "RO", name: "Rondônia" },
    { uf: "PA", name: "Pará" },
    { uf: "AC", name: "Acre" },
    { uf: "DF", name: "Distrito Federal" },
    { uf: "ES", name: "Espírito Santo" },
    { uf: "MG", name: "Minas Gerais" },
    { uf: "PR", name: "Paraná" },
    { uf: "MA", name: "Maranhão" },
    { uf: "PI", name: "Piauí" },
    { uf: "RR", name: "Roraima" },
  ],
} as const;

export function waLink(message: string = SITE.whatsapp.defaultMessage) {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** App do Google Play correspondente a um aplicativo do Cosmic, se houver. */
export function playAppFor(slug: string, title: string) {
  return SITE.playApps.find((a) => a.match?.test(`${slug} ${title}`)) ?? null;
}

export const yearsInMarket = () =>
  new Date().getFullYear() - SITE.foundedYear;
