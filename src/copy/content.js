/**
 * Copy centralizada da landing page.
 * Fonte: docs/superpowers/specs/2026-07-10-rga-landing-page-design.md
 *
 * Diretrizes fixas de copy:
 *  - Nunca comparar RGA-BH negativamente com outras academias
 *  - Linhagem começa em Renzo, não em Carlos/Hélio
 *  - Primeiros alunos se chamam "Membros Originais"
 *  - Evitar em-dashes (—) na copy visível
 */

export const OFFER_DEADLINE = '2026-07-25T23:59:00-03:00';
export const CART_URL = 'https://evo-totem.w12app.com.br/evo/9178/site/AAeG4kxWhjYHyxNvFhiKIg%5BEQUAL%5D%5BEQUAL%5D';
export const WHATSAPP_NUMBER = '5531971775617';
export const WHATSAPP_MESSAGE = 'Olá, quero saber mais sobre a RGA-BH.';
export const INSTAGRAM_URL = 'https://www.instagram.com/renzograciebh/';
export const ADDRESS = 'Rua Paraíba, 889 · Savassi · Belo Horizonte · MG';
export const GOOGLE_MAPS = 'https://www.google.com/maps/search/?api=1&query=Rua+Para%C3%ADba+889+Savassi+Belo+Horizonte';

export const nav = {
  links: [
    { label: 'Academia', href: '#casa' },
    { label: 'Aulas', href: '#aulas' },
    { label: 'Oferta', href: '#oferta' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel: 'Ser Membro Original',
};

export const hero = {
  kicker: 'Linhagem original · Savassi',
  headline: 'A academia do Renzo Gracie chega a Belo Horizonte.',
  sub: 'Inauguração em setembro na Savassi, sob o olhar do Renzo. Faixa preta responsável: Raphael Coelho.',
  ctaLabel: 'Ser um Membro Original',
  legend: 'Oferta válida até 25 de julho, 23h59.',
};

export const videoExplainer = {
  kicker: '2 minutos',
  headline: 'Você nunca mais vai ver uma oferta de matrícula melhor.',
  caption: 'A academia em reforma, o que você recebe como Membro Original, e por que a data limite é 25 de julho.',
  youtubeId: '', // TODO: substituir quando o vídeo estiver no YouTube (unlisted)
  posterCaption: 'Vídeo em breve',
};

export const lineage = {
  kicker: 'Linhagem',
  headline: 'Sob o olhar do Renzo.',
  body: [
    'Em 1996, Renzo Gracie fundou a Renzo Gracie Academy em Nova York. Hoje, a rede é referência mundial em Jiu-Jítsu.',
    'A RGA Belo Horizonte é o novo capítulo dessa história, sob supervisão direta do Renzo.',
  ],
  milestones: [
    { year: '1996', body: 'Renzo Gracie funda a Renzo Gracie Academy em Nova York.' },
    { year: 'Hoje', body: 'Rede mundial de academias oficiais Renzo Gracie.' },
    { year: 'Setembro', body: 'RGA Belo Horizonte abre as portas na Savassi.' },
  ],
  imageAlt: 'Renzo Gracie erguendo cinturão de campeão',
  ctaLabel: 'Conhecer a academia',
};

export const house = {
  kicker: 'Rua Paraíba 889 · Savassi',
  headline: 'A casa foi pensada como uma escola de luxo.',
  body: 'Concreto, madeira, iluminação de galeria. Um octógono, tatames de padrão internacional, banheiros de spa. Cada canto respeita o padrão RGA New York, adaptado para o clima e a cultura de Belo Horizonte.',
  tiles: [
    { id: 'fachada', src: '/images/fachada.jpg', caption: 'Fachada iluminada · Rua Paraíba 889', alt: 'Fachada da RGA-BH iluminada à noite' },
    { id: 'recepcao', src: '/images/recepcao.jpg', caption: 'Recepção e área de espera', alt: 'Recepção da academia com mobiliário escuro e mural do Renzo' },
    { id: 'octogono', src: '/images/octogono.jpg', caption: 'Tatame principal com octógono', alt: 'Tatame com octógono ao fundo' },
    { id: 'loja', src: '/images/loja.jpg', caption: 'Loja RGA · kimonos e camisetas oficiais', alt: 'Loja com kimonos azuis e camisetas oficiais' },
    { id: 'neon', src: '/images/neon.jpg', caption: 'Interior · Mais que um time', alt: 'Interior com painel azul iluminado' },
    { id: 'banheiro', src: '/images/banheiro.jpg', caption: 'Banheiros pensados como spa', alt: 'Banheiro com acabamento premium' },
    { id: 'reuniao', src: '/images/reuniao.jpg', caption: 'Sala de reunião privativa', alt: 'Sala de reunião com mesa de mármore' },
  ],
  ctaLabel: 'Ver aulas',
};

export const professor = {
  kicker: 'Faixa preta responsável',
  headline: 'Raphael Coelho.',
  bio: [
    // TODO: preencher com bio real do Raphael Coelho.
    'Bio em breve. Este espaço vai contar quem é o faixa preta responsável pela RGA Belo Horizonte, sua formação, linhagem e filosofia de ensino.',
  ],
  highlights: [
    // TODO: 3 highlights curtos (títulos, anos de treino, filiação).
    'Faixa preta em Jiu-Jítsu',
    'Formação e títulos [em breve]',
    'Filosofia de ensino [em breve]',
  ],
  photoAlt: 'Raphael Coelho, faixa preta responsável pela RGA Belo Horizonte',
};

export const classes = {
  kicker: 'Aulas',
  headline: 'Jiu-Jítsu para toda a família.',
  cards: [
    { id: 'adulto', title: 'Adulto', desc: 'Aulas técnicas, drills e sparring. Todos os níveis, do iniciante ao competidor.' },
    { id: 'feminino', title: 'Feminino', desc: 'Aula exclusiva para mulheres, ambiente respeitoso e progressão no seu ritmo.' },
    { id: 'kids', title: 'Kids', desc: 'Turmas por faixa etária, foco em disciplina, respeito e diversão. Metodologia RGA.' },
    { id: 'sabado', title: 'Treino livre · sábados', desc: 'Sábado é dia de rolar. Espaço aberto para praticar o que aprendeu na semana.' },
    { id: 'octogono', title: 'Octógono', desc: 'Estrutura completa para MMA e defesa pessoal. Aulas específicas em breve.' },
  ],
  note: 'Grade completa de horários será divulgada em agosto. Fale no WhatsApp para saber prioridades da sua modalidade.',
  ctaLabel: 'Falar no WhatsApp',
};

export const offer = {
  kicker: 'Oferta · até 25 de julho',
  headline: 'Torne-se um Membro Original da RGA-BH.',
  sub: 'Apenas para quem entrar no plano anual até 25 de julho, 23h59. Um grupo permanente com benefícios que não voltam.',
  benefits: [
    'Kimono RGA exclusivo (valor de R$800), seu como Membro Original',
    'Patch oficial de Membro Original, costurado no kimono',
    'Presença garantida no seminário de inauguração com Rayron Gracie (setembro)',
    'Prioridade em eventos, workshops e experiências futuras da academia',
  ],
  plans: [
    {
      id: 'adulto',
      label: 'Plano anual',
      name: 'Plano Adulto',
      price: '12x R$ 329',
      note: 'Ou à vista com condições especiais no WhatsApp.',
      ctaLabel: 'Ser Membro Original',
    },
    {
      id: 'kids',
      label: 'Plano anual',
      name: 'Plano Kids',
      price: '12x R$ 299',
      note: 'Vagas limitadas por turma.',
      ctaLabel: 'Ser Membro Original',
    },
  ],
  urgencyBody: 'Depois disso, o kimono, o patch e o seminário deixam de fazer parte da oferta.',
};

export const seminar = {
  kicker: 'Seminário de inauguração · setembro',
  headline: 'Rayron Gracie no tatame da RGA-BH.',
  bullets: [
    '4x campeão mundial de Jiu-Jítsu',
    'Filho de Ryan Gracie',
    'Presença confirmada na inauguração da RGA Belo Horizonte',
  ],
  body: 'O seminário faz parte da oferta dos Membros Originais. Se você entrar até 25 de julho, sua vaga já está garantida.',
  videoSrc: '/video-rayron.mp4', // TODO: subir MP4 quando disponível
  videoPoster: '/video-rayron-poster.jpg',
  ctaLabel: 'Quero estar no seminário',
};

export const faq = {
  kicker: 'FAQ',
  headline: 'Perguntas frequentes.',
  items: [
    {
      q: 'O que exatamente eu recebo ao me tornar Membro Original?',
      a: 'O plano anual (12x R$329 adulto ou R$299 kids), um kimono RGA exclusivo avaliado em R$800, um patch de Membro Original costurado no kimono, e presença garantida no seminário com Rayron Gracie em setembro.',
    },
    {
      q: 'Quando a academia abre?',
      a: 'Em meados de setembro de 2026 na Rua Paraíba 889, Savassi, Belo Horizonte. A data exata será anunciada em breve.',
    },
    {
      q: 'O que é o patch de Membro Original?',
      a: 'É um patch bordado oficial que vai costurado no seu kimono RGA. Ele identifica você como parte do grupo dos primeiros alunos da RGA-BH, e não voltará a ser distribuído.',
    },
    {
      q: 'Se eu comprar depois de 25 de julho, ainda ganho o kimono e o patch?',
      a: 'Não. Depois de 25 de julho às 23h59 a oferta encerra. Novos alunos que entrarem depois pagam a mensalidade normalmente sem os brindes de Membro Original.',
    },
    {
      q: 'Como funciona o pagamento?',
      a: 'O plano anual é dividido em 12x no cartão pelo link do carrinho oficial. Para condições à vista ou dúvidas de pagamento, fale no WhatsApp +55 31 97177-5617.',
    },
    {
      q: 'Como participo do seminário com o Rayron Gracie?',
      a: 'Ao pagar o plano anual até 25 de julho você já garante sua presença. Detalhes de data, horário e formato do seminário serão enviados aos Membros Originais em agosto.',
    },
    {
      q: 'Vocês têm aulas para mulheres?',
      a: 'Sim. Além das aulas mistas, a RGA-BH terá turmas específicas femininas, com ambiente e progressão pensados para o público feminino.',
    },
    {
      q: 'Meus filhos podem treinar?',
      a: 'Sim. Temos plano Kids (12x R$299) com turmas divididas por faixa etária, usando a metodologia RGA de disciplina, respeito e evolução técnica.',
    },
    {
      q: 'Já tenho experiência de BJJ. Posso migrar minha graduação para a RGA?',
      a: 'Sim. Traga sua faixa e o histórico da sua graduação. O Raphael Coelho avalia e mantém a graduação já conquistada.',
    },
    {
      q: 'Nunca treinei Jiu-Jítsu. Posso começar?',
      a: 'Sim. Todas as turmas têm níveis de iniciante. Você começa do zero, com professor faixa preta e ambiente respeitoso.',
    },
    {
      q: 'Vocês vão ter treino livre? Octógono?',
      a: 'Sim para os dois. Treino livre garantido aos sábados. Octógono instalado para MMA e defesa pessoal.',
    },
    {
      q: 'Onde fica a academia?',
      a: 'Rua Paraíba 889, Savassi, Belo Horizonte. Estacionamento e regras de conveniência serão detalhados no e-mail de boas-vindas.',
    },
    {
      q: 'Posso conhecer a academia antes de comprar?',
      a: 'A academia ainda está em obras. Você pode ver as renders na seção "A casa" acima e assistir ao vídeo explicativo. Para agendar uma visita quando a obra permitir, fale no WhatsApp.',
    },
    {
      q: 'Estou em dúvida. Como falo com alguém?',
      a: 'WhatsApp direto: +55 31 97177-5617. Respondemos em horário comercial.',
    },
  ],
};

export const finalCta = {
  headline: 'Antes de 25 de julho.',
  body: 'Depois disso, o kimono, o patch e o seminário deixam de fazer parte da oferta. Você continua bem-vindo. Mas o grupo dos Membros Originais fecha.',
  ctaLabel: 'Ser Membro Original',
};

export const footer = {
  brand: 'Renzo Gracie Academy · Belo Horizonte',
  address: ADDRESS,
  columns: {
    contact: [
      { label: 'Instagram @renzograciebh', href: INSTAGRAM_URL },
      { label: 'WhatsApp +55 31 97177-5617', href: buildWhatsAppLink() },
      { label: 'Google Maps', href: GOOGLE_MAPS },
    ],
    navigate: [
      { label: 'Academia', href: '#casa' },
      { label: 'Aulas', href: '#aulas' },
      { label: 'Oferta', href: '#oferta' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  legal: '© 2026 Renzo Gracie Academy Belo Horizonte. Todos os direitos reservados.',
};

export function buildWhatsAppLink(message = WHATSAPP_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
