export interface Product {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  badge: string;
  description: string;
  features: string[];
  image: string;
  dimensions?: string;
  fabricOptions?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const siteData = {
  name: "Martinni Móveis | Sofás e Camas Cuiabá",
  shortName: "Martinni Móveis",
  segment: "Loja de Móveis, Sofás de Alto Padrão, Camas e Colchões",
  tagline: "Sofás sob medida, camas de alta qualidade e móveis para o seu conforto em Cuiabá",
  cep: "78050-568",
  address: "Av. Oátomo Canavarros, 160 - Bela Vista, Cuiabá - MT, 78050-568, Brasil",
  street: "Av. Oátomo Canavarros, 160",
  neighborhood: "Bela Vista",
  city: "Cuiabá",
  state: "MT",
  phone: "+55 65 99276-7912",
  phoneRaw: "5565992767912",
  whatsappUrl: "https://wa.me/5565992767912?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20sof%C3%A1s%20ou%20camas%20na%20Martinni%20M%C3%B3veis.",
  openingHours: "Segunda a Sábado: 09h às 18h",
  openingHoursDetail: {
    weekdays: "Segunda a Sexta: 09:00 às 18:00",
    saturday: "Sábado: 09:00 às 18:00",
    sunday: "Domingo: Fechado",
  },
  googleRating: 5.0,
  googleReviewsCount: 41,
  instagram: "https://instagram.com/martinnimoveis",
  instagramHandle: "@martinnimoveis",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+O%C3%A1tomo+Canavarros,+160+-+Bela+Vista,+Cuiab%C3%A1+-+MT,+78050-568",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.822268307999!2d-56.0718717!3d-15.5891398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e51b1f8ebf%3A0x6b7caad62d989fce!2sAv.%20O%C3%A1tomo%20Canavarros%2C%20160%20-%20Bela%20Vista%2C%20Cuiab%C3%A1%20-%20MT%2C%2078050-568!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr",

  stats: [
    {
      value: "5.0 / 5.0",
      label: "Nota Máxima no Google",
      description: "41+ avaliações reais de clientes com 100% de satisfação",
    },
    {
      value: "Alto Padrão",
      label: "Acabamento Premium",
      description: "Espumas D33/HR, molas ensacadas e estruturas maciças",
    },
    {
      value: "Sob Medida",
      label: "Projeto Personalizado",
      description: "Dimensões, modulações e mais de 120 opções de tecidos",
    },
    {
      value: "Atendimento Direto",
      label: "Orçamento Ágil",
      description: "Consultoria personalizada direto no WhatsApp da loja",
    },
  ],

  categories: [
    { id: 'todos', label: 'Todos os Móveis' },
    { id: 'sofas-retraveis', label: 'Sofás Retráteis' },
    { id: 'sofas-sob-medida', label: 'Sofás sob Medida' },
    { id: 'camas-box', label: 'Camas Box & Cabeceiras' },
    { id: 'colchoes', label: 'Colchões Especiais' },
    { id: 'poltronas', label: 'Poltronas & Puffs' },
  ],

  products: [
    {
      id: "sofa-monaco-retratil",
      name: "Sofá Retrátil & Reclinável Mônaco",
      category: "sofas-retraveis",
      categoryLabel: "Sofás Retráteis",
      badge: "Mais Vendido",
      description: "Assento retrátil com molas ensacadas individuais, pillow top de alta densidade e encosto com catraca de 5 estágios. Conforto térmico e ergonômico absoluto.",
      features: ["Molas ensacadas individuais", "Linho de alta gramatura", "Abertura suave até 1,80m", "Estrutura em eucalipto tratado"],
      dimensions: "Opções de 2,30m a 3,60m de largura",
      fabricOptions: "Linho cru, cinza grafite, terracota e suede premium",
      image: "/src/assets/images/product_sofa_retractil_luxo_1791831920843.jpg",
    },
    {
      id: "sofa-bellini-organico",
      name: "Sofá Modular Orgânico Bellini",
      category: "sofas-sob-medida",
      categoryLabel: "Sofás sob Medida",
      badge: "Design Exclusivo",
      description: "Linhas curvas contemporâneas e curvas orgânicas esculpidas sob medida para a sua sala. Estofamento em boucle aveludado e sustentação ergonômica de alto padrão.",
      features: ["Curvatura planejada para seu ambiente", "Tecido boucle importado", "Espuma D33 hiper soft", "Módulos conectáveis e reconfiguráveis"],
      dimensions: "Fabricado sob medida para o seu living",
      fabricOptions: "Boucle off-white, linho rústico e veludo italiano",
      image: "/src/assets/images/product_sofa_sob_medida_organic_1791831931451.jpg",
    },
    {
      id: "cama-milao-estofada",
      name: "Cama Box & Cabeceira Canelada Milão",
      category: "camas-box",
      categoryLabel: "Camas Box",
      badge: "Alto Padrão",
      description: "Conjunto completo com base estofada reforçada e cabeceira canelada vertical com iluminação de recorte. Estrutura maciça com revestimento nobre anti-ruído.",
      features: ["Cabeceira canelada em veludo touch", "Base box em madeira maciça reflorestada", "Estrutura anti-ruído reforçada", "Disponível em Queen e King"],
      dimensions: "Padrão Casal (138x188), Queen (158x198) e King (193x203)",
      fabricOptions: "Camurça warm bronze, linho bege e cinza chumbo",
      image: "/src/assets/images/product_cama_box_estofada_1791831941046.jpg",
    },
    {
      id: "poltrona-florenca-couro",
      name: "Poltrona Decorativa Florença",
      category: "poltronas",
      categoryLabel: "Poltronas",
      badge: "Peça Assinada",
      description: "Estrutura escultórica em madeira nobre nogueira com estofamento em couro legítimo caramelo. Perfeita para complementar salas de estar e quartos sofisticados.",
      features: ["Assento e encosto anatômicos", "Couro legítimo natural", "Madeira nobre com verniz acetinado", "Design atemporal de alta durabilidade"],
      dimensions: "82cm largura x 88cm profundidade x 85cm altura",
      fabricOptions: "Couro legítimo caramelo, preto ebony e nozes",
      image: "/src/assets/images/product_poltrona_decorativa_1791831950083.jpg",
    },
    {
      id: "sofa-verona-living",
      name: "Sofá Living Minimalista Verona",
      category: "sofas-sob-medida",
      categoryLabel: "Sofás sob Medida",
      badge: "Sob Medida",
      description: "Design contemporâneo de perfil baixo e braços ultra finos, maximizando o aproveitamento do assento. Conforto em plumas e espumas de memória.",
      features: ["Base suspensa em metal carbono", "Almofadas com toque de plumas", "Profundidade generosa de 1,05m", "Acabamento em costura pespontada dupla"],
      dimensions: "Comprimento personalizável de 2,00m a 4,20m",
      fabricOptions: "Linho puro, microfibra tecnológica hidro-repelente",
      image: "/src/assets/images/hero_luxury_sofa_living_room_1791831905577.jpg",
    },
    {
      id: "colchao-imperial-pocket",
      name: "Colchão Master Suíte Imperial Pocket",
      category: "colchoes",
      categoryLabel: "Colchões",
      badge: "Conforto Hotel 5 Estrelas",
      description: "Sistema de molas ensacadas 2.0 com zoneamento corporal, euro top com látex natural e malha com fios de seda fresca. Suporte ortopédico ideal para o clima de Cuiabá.",
      features: ["Molas ensacadas independentes", "Látex natural com alívio de pressão", "Malha fria respirável anti-ácaro", "Suporte de até 150kg por pessoa"],
      dimensions: "Solteirão, Casal, Queen e King Size",
      fabricOptions: "Malha belga com bordado matelassê em relevo",
      image: "/src/assets/images/product_cama_box_estofada_1791831941046.jpg",
    },
  ],

  differentials: [
    {
      id: "qualidade-google",
      title: "Nota 5.0 Máxima no Google",
      description: "Reconhecimento comprovado por 41 avaliações de clientes reais que destacam a pontualidade, atendimento consultivo e acabamento de alto padrão.",
      icon: "ShieldCheck",
    },
    {
      id: "sofas-sob-medida",
      title: "Sofás e Camas sob Medida",
      description: "Personalização completa de comprimento, profundidade, modulação, densidade e tecidos para se encaixar com perfeição no seu projeto de interiores.",
      icon: "Armchair",
    },
    {
      id: "conforto-ergonomico",
      title: "Conforto Ergonômico Superior",
      description: "Espumas de alta densidade (D33 e HR), molas ensacadas individuais e catracas silenciosas que garantem relaxamento e durabilidade por anos.",
      icon: "Bed",
    },
    {
      id: "variedade-tecidos",
      title: "Amplo Mostruário de Tecidos",
      description: "Mais de 120 amostras de linhos nobres, boucles, couros naturais, veludos e tecidos tecnológicos com tratamento repelente a líquidos.",
      icon: "ThumbsUp",
    },
    {
      id: "localizacao-privilegiada",
      title: "Showroom na Av. Oátomo Canavarros",
      description: "Loja física no bairro Bela Vista com estacionamento fácil e ambiente preparado para você testar pessoalmente o toque e o conforto de cada peça.",
      icon: "MapPin",
    },
    {
      id: "entrega-montagem",
      title: "Entrega e Montagem Pontual",
      description: "Logística ágil e equipe de montagem própria e treinada em Cuiabá e Várzea Grande, assegurando transporte seguro e posicionamento exato no seu imóvel.",
      icon: "Clock",
    },
  ],

  testimonials: [
    {
      id: "beatriz-silveira",
      name: "Beatriz Silveira",
      role: "Bela Vista, Cuiabá",
      rating: 5,
      text: "Simplesmente apaixonada pelo meu sofá novo! Qualidade impecável, tecido maravilhoso e entrega antes do prazo. Atendimento nota 10 na loja da Av. Oátomo Canavarros.",
      date: "Avaliação recente",
      verified: true,
    },
    {
      id: "thiago-ribeiro",
      name: "Thiago Ribeiro",
      role: "Jardim das Américas, Cuiabá",
      rating: 5,
      text: "Comprei o colchão e a cama box. Atendimento excelente, vendedores muito atenciosos e produtos de primeiríssima linha. Super recomendo.",
      date: "Avaliação recente",
      verified: true,
    },
    {
      id: "larissa-mendes",
      name: "Larissa Mendes",
      role: "Santa Rosa, Cuiabá",
      rating: 5,
      text: "Melhor loja de móveis de Cuiabá para quem busca conforto e sofisticação. Meu sofá sob medida ficou perfeito na sala.",
      date: "Avaliação recente",
      verified: true,
    },
  ],

  faqs: [
    {
      id: "faq-entrega",
      question: "Vocês fazem entrega em Cuiabá e região?",
      answer: "Sim! Realizamos entrega e montagem profissional de sofás, camas e móveis em Cuiabá, Várzea Grande e municípios vizinhos. Nossa equipe própria cuida de todo o transporte para garantir a integridade total do seu móvel.",
    },
    {
      id: "faq-personalizacao",
      question: "Posso personalizar o tamanho e o tecido do sofá?",
      answer: "Sim! Trabalhamos com opções de sofás sob medida e uma grande variedade de tecidos e cores para você escolher. É possível definir a largura exata, tipo de assento (retrátil, fixo ou modular) e o revestimento que melhor harmoniza com sua decoração.",
    },
    {
      id: "faq-orcamento",
      question: "Como faço para solicitar um orçamento?",
      answer: "É só clicar em qualquer botão do WhatsApp no site, enviar o modelo de seu interesse ou as medidas do seu ambiente para nossa equipe calcular na hora. Enviamos fotos de tecidos e especificações detalhadas sem compromisso.",
    },
    {
      id: "faq-pagamento",
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos Pix com condições especiais, cartões de crédito com opções de parcelamento facilitado e transferências bancárias. Consulte condições detalhadas e planos de pagamento diretamente pelo WhatsApp.",
    },
    {
      id: "faq-localizacao",
      question: "Onde a loja física está localizada?",
      answer: "Estamos localizados na Av. Oátomo Canavarros, 160 - Bairro Bela Vista, Cuiabá - MT (CEP 78050-568). Temos espaço com sofás e camas para você sentar, deitar e experimentar o conforto pessoalmente.",
    },
  ],
};

export function buildWhatsAppLink(productName?: string) {
  const base = "https://wa.me/5565992767912";
  if (productName) {
    const text = `Olá! Gostaria de um orçamento para o "${productName}" que vi no site da Martinni Móveis.`;
    return `${base}?text=${encodeURIComponent(text)}`;
  }
  const defaultText = "Olá! Vim pelo site e gostaria de solicitar um orçamento de sofás ou camas na Martinni Móveis.";
  return `${base}?text=${encodeURIComponent(defaultText)}`;
}
