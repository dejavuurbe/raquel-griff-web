export type SiteLevel = 1 | 2 | 3;
type Link = { label: string; url: string };
type ActivityItem = { title: string; type: string; source: string; url: string; description: string };

const works = [
  {
    id: 'capitan-emanuel',
    title: 'Las aventuras del Capitán Emanuel',
    subtitle: 'Una experiencia de lectura pensada también desde la accesibilidad',
    cover: '/images/capitan-emanuel.svg',
    synopsis: 'Un cuento infantil que amplía las formas de acercarse a una historia: combina letra ampliada, Braille, figuras tridimensionales de los personajes y del barco, y acceso a una narración en lengua de señas.',
    genre: 'Literatura infantil',
    year: '',
    pages: '',
    isbn: '',
    publisher: 'Editorial Uno del Oeste',
    sampleUrl: '',
    purchaseLinks: [
      { label: 'Conseguir el libro', url: 'https://editorialunodeloeste.empretienda.com.ar/cuentos/las-aventuras-del-capitan-emanuel' },
    ] as Link[],
    featured: true,
    aliases: ['Las aventuras del Capitan Emanuel'] as string[],
  },
];

export const site = {
  level: 1 as SiteLevel,
  name: 'Patricia Raquel Griff',
  canonicalName: 'Patricia Raquel Griff',
  searchVariants: ['Patricia Griff', 'Raquel Griff'] as string[],
  role: 'Autora · Psicóloga social · Payamédica',
  tagline: 'Literatura infantil, sensibilidad social y una búsqueda concreta por ampliar el acceso a la lectura.',
  description: 'Patricia Raquel Griff es autora de Las aventuras del Capitán Emanuel, un libro infantil publicado por Editorial Uno del Oeste que incorpora recursos de accesibilidad como letra ampliada, Braille, figuras tridimensionales y narración en lengua de señas.',
  url: 'https://dejavuurbe.github.io/raquel-griff-web/',
  email: 'patricia.r.griff@gmail.com',
  location: 'La Matanza, Buenos Aires, Argentina',
  footerLine: 'Autora · La Matanza, Buenos Aires',
  credit: {
    enabled: true,
    label: 'Diseño y desarrollo web por',
    url: 'https://dejavuurbe.github.io/pierre-menard-web/proyecto/',
  },
  social: [] as Link[],
  author: {
    shortBio: 'Autora, psicóloga social y payamédica. Su trabajo reúne literatura, sensibilidad social e inclusión.',
    longBio: 'Patricia Raquel Griff desarrolla su actividad autoral en el circuito cultural de La Matanza. Es presentada públicamente por Editorial Uno del Oeste como autora, psicóloga social y payamédica. Su libro Las aventuras del Capitán Emanuel propone una experiencia infantil que incorpora recursos de accesibilidad y distintas formas de aproximarse a la lectura.',
    photo: '/images/autor-placeholder.svg',
  },

  works,
  featuredBook: works.find((work) => work.featured) ?? works[0],

  activity: [
    {
      title: 'Presentación de libros en Isidro Casanova',
      type: 'Presentación',
      source: 'Biblioteca Popular Rotaria',
      url: 'https://bibliotecapopularrotaria.blogspot.com/2026/06/invitacion_045393494.html',
      description: 'Patricia Griff integró la convocatoria de escritoras y escritores para la presentación realizada el 4 de julio de 2026 en la Biblioteca Popular Rotaria de Isidro Casanova.',
    },
    {
      title: 'XX Festival Internacional de poesía Palabra en el Mundo',
      type: 'Encuentro literario',
      source: 'Frente de Creación Literaria Oficio Puro',
      url: 'https://oficiopuro2013.blogspot.com/2026/05/fip-palabra-en-el-mundo-xx-edicion.html',
      description: 'Raquel Griff aparece entre las participantes del encuentro literario realizado el 30 de mayo de 2026 en San Justo.',
    },
    {
      title: 'Catálogo de libros en tinta y Braille',
      type: 'Accesibilidad',
      source: 'Biblioteca Argentina para Ciegos',
      url: 'https://bac.org.ar/libros-en-tinta-y-braille/',
      description: 'Las aventuras del capitán Emanuel integra el catálogo de libros en tinta y Braille de la Biblioteca Argentina para Ciegos.',
    },
  ] as ActivityItem[],

  recovery: {
    incompleteRecall: [
      'Patricia Griff + Capitán Emanuel',
      'Raquel Griff + Capitán Emanuel',
      'Griff + Capitán Emanuel',
      'Las aventuras del Capitán Emanuel + Braille',
    ],
    spellingVariants: ['Las aventuras del Capitan Emanuel'],
    disambiguationNotes: [
      'Patricia Raquel Griff, Patricia Griff y Raquel Griff se registran como variantes de la misma identidad autoral para recuperación y desambiguación.',
    ],
  },

  faq: [
    {
      question: '¿Quién es Patricia Raquel Griff?',
      answer: 'Es autora, psicóloga social y payamédica, vinculada al circuito cultural de La Matanza y autora de Las aventuras del Capitán Emanuel.',
    },
    {
      question: '¿Qué recursos de accesibilidad tiene Las aventuras del Capitán Emanuel?',
      answer: 'La obra incorpora letra ampliada, texto en Braille, figuras tridimensionales de personajes y barco, y acceso a una narración en lengua de señas.',
    },
  ],
};

export type SiteData = typeof site;
