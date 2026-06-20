import cardapioAuauImage from '../assets/projects/cardapio-auau.png'
import cardapioAuauMobileImage from '../assets/projects/cardapio-auau-mobile.png'
import invictusDesktopImage from '../assets/invictus.png'
import invictusImage from '../assets/projects/invictus-mobile.png'
import ladoALadoImage from '../assets/projects/lado-a-lado.png'
import rhemaCarImage from '../assets/projects/rhema-car.png'

export const projects = [
  {
    title: 'Invictus Barber Studio',
    description:
      'Site premium para barbearia com visual escuro/dourado, presença digital forte e agendamento online.',
    tags: ['Barbearia', 'Agendamento', 'Mobile First'],
    image: invictusImage,
    desktopImage: invictusDesktopImage,
    imageFit: 'contain',
    layout: 'mobile',
    responsiveShowcase: true,
    actions: [
      // Trocar por link real do projeto quando publicado.
      { label: 'Ver projeto', href: '#' },
      // Trocar por link real do estudo/raio-x quando existir.
      { label: 'Raio-X', href: '#' },
    ],
  },
  {
    title: 'Rhema Car',
    description:
      'Site institucional para retífica automotiva, com estética industrial, técnica e profissional.',
    tags: ['Automotivo', 'Institucional', 'Responsivo'],
    image: rhemaCarImage,
    layout: 'wide',
    actions: [
      // Trocar por link real do projeto quando publicado.
      { label: 'Ver projeto', href: '#' },
      // Trocar por link real do estudo/raio-x quando existir.
      { label: 'Raio-X', href: '#' },
    ],
  },
  {
    title: 'Dog do AUAU',
    description:
      'Cardápio digital responsivo para food truck, com visual marcante, WhatsApp e navegação rápida.',
    tags: ['Cardápio Digital', 'Food Truck', 'WhatsApp'],
    image: cardapioAuauMobileImage,
    desktopImage: cardapioAuauImage,
    imageFit: 'contain',
    layout: 'mobile',
    responsiveShowcase: true,
    actions: [
      // Trocar por link real do projeto quando publicado.
      { label: 'Ver projeto', href: '#' },
      { label: 'GitHub', href: 'https://github.com/coded-by-ck' },
    ],
  },
  {
    title: 'Lado a Lado Barber',
    description:
      'Landing page para barbearia com identidade visual forte, estética premium e foco em agendamento.',
    tags: ['Barbearia', 'Landing Page', 'Responsivo'],
    image: ladoALadoImage,
    layout: 'half',
    actions: [
      // Trocar por link real do projeto quando publicado.
      { label: 'Ver projeto', href: '#' },
      // Trocar por link real do estudo/raio-x quando existir.
      { label: 'Raio-X', href: '#' },
    ],
  },
]
