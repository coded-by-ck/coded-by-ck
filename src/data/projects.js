import auauDesktopImage from '../assets/projects/auau-desktop.png'
import auauMobileImage from '../assets/projects/auau-mobile.png'
import invictusDesktopImage from '../assets/invictus.png'
import invictusMobileImage from '../assets/projects/invictus-mobile.png'
import ladoALadoDesktopImage from '../assets/projects/lado-a-lado.png'
import ladoALadoMobileImage from '../assets/projects/lado-a-lado-mobile.png'

export const projects = [
  {
    title: 'Invictus Barber',
    category: 'Barbearia premium',
    description:
      'Plataforma digital elegante que traduz o posicionamento premium da marca em uma experiencia sofisticada e imersiva.',
    highlights: [
      'Agendamento de horarios online',
      'Apresentacao de servicos e especialistas',
      'Design premium com identidade forte',
    ],
    devices: {
      laptop: { image: invictusDesktopImage, mode: 'fill', alt: 'Print desktop do projeto Invictus no laptop' },
      tablet: { image: invictusDesktopImage, mode: 'contain', alt: 'Print desktop do projeto Invictus no tablet' },
      phone: { image: invictusMobileImage, mode: 'fill', alt: 'Print mobile do projeto Invictus no celular' },
    },
    actions: [
      { label: 'Ver projeto', href: '#' },
      { label: 'Raio-X', href: '#' },
    ],
  },
  {
    title: 'Lado a Lado',
    category: 'Barbearia classica',
    description:
      'Site institucional que combina tradicao e modernidade, reforcando autoestima e estilo com uma identidade marcante.',
    highlights: [
      'Agendamento rapido e pratico',
      'Identidade visual forte e memoravel',
      'Layout responsivo e envolvente',
    ],
    devices: {
      laptop: { image: ladoALadoDesktopImage, alt: 'Print desktop do projeto Lado a Lado no laptop' },
      tablet: { image: ladoALadoMobileImage, mode: 'mobile-fallback', alt: 'Print mobile do projeto Lado a Lado no tablet' },
      phone: { image: ladoALadoMobileImage, alt: 'Print mobile do projeto Lado a Lado no celular' },
    },
    actions: [
      { label: 'Ver projeto', href: '#' },
      { label: 'Raio-X', href: '#' },
    ],
  },
  {
    title: 'Au-Au / Dog do AuAu',
    category: 'Cardapio digital',
    description:
      'Cardapio digital divertido e direto ao ponto, com identidade vibrante que abre o apetite e facilita o pedido pelo WhatsApp.',
    highlights: [
      'Cardapio interativo e responsivo',
      'Pedido direto via WhatsApp',
      'Visual vibrante que gera conexao',
    ],
    devices: {
      laptop: { image: auauDesktopImage, alt: 'Print desktop do projeto Au-Au no laptop' },
      tablet: { image: auauMobileImage, alt: 'Print mobile do projeto Au-Au no tablet' },
      phone: { image: auauMobileImage, alt: 'Print mobile do projeto Au-Au no celular' },
    },
    actions: [
      { label: 'Ver projeto', href: '#' },
      { label: 'GitHub', href: 'https://github.com/coded-by-ck' },
    ],
  },
]
