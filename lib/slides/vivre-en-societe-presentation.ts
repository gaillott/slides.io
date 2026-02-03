import { Presentation } from './types'

export const vivreEnSocietePresentation: Presentation = {
  id: 'vivre-en-societe',
  title: '8. Vivre en Société',
  author: 'Philosophie à Vivre',
  description: 'Le défi du vivre ensemble',
  coverImage: '/societe/cover.jpg',
  createdAt: '2026-02-03',
  category: 'conference',
  slides: [
    // Slide 1: Title
    {
      id: 'title',
      type: 'title',
      theme: 'blue',
      category: 'PHILOSOPHIE À VIVRE',
      title: 'Vivre en Société',
      subtitle: 'Le défi du vivre ensemble',
      description: 'Peut-on vraiment vivre seul ?',
      backgroundImage: '/societe/cover.jpg',
    },

    // Slide 2: Question d'ouverture
    {
      id: 'ouverture',
      type: 'content',
      theme: 'blue',
      blocks: [
        {
          type: 'heading',
          data: {
            category: 'INSTANT RÉFLEXION',
            title: 'Peut-on vivre seul ?',
            image: '/societe/alone.jpg',
          },
        },
        {
          type: 'quote',
          data: {
            text: '"L\'homme est par nature un animal politique."',
            author: 'Aristote',
          },
        },
        {
          type: 'card',
          step: 1,
          data: {
            content: 'Si nous sommes faits pour vivre ensemble, pourquoi est-ce si difficile ?',
          },
        },
      ],
    },

    // Slide 3: Plan
    {
      id: 'plan',
      type: 'plan',
      theme: 'blue',
      category: 'PLAN',
      title: 'Vivre en Société',
      items: [
        { partNumber: 'I - Vivre ensemble selon quels critères', title: 'La Convivencia', image: '/societe/together.jpg' },
        { partNumber: 'II - Allégorie de notre société', title: 'Le Train Fantôme', image: '/societe/train.jpg' },
        { partNumber: 'III - Proposition', title: '3 pilliers', image: '/societe/ideal.jpg' },
      ],
    },

    // Slide 4: Section I
    {
      id: 'partie-1',
      type: 'section',
      theme: 'green',
      partNumber: 'I',
      title: 'La Convivencia',
      subtitle: "L'art de vivre ensemble",
      backgroundImage: '/societe/together.jpg',
    },

    // Slide 5: Convivencia
    {
      id: 'convivencia',
      type: 'content',
      theme: 'green',
      blocks: [
        {
          type: 'heading',
          data: {
            category: 'VIVRE ENSEMBLE',
            title: 'La Convivencia',
            subtitle: 'Vivre avec, pas seulement à côté',
            image: '/societe/hands.jpg',
          },
        },
        {
          type: 'quote',
          data: {
            text: '"La convivencia est l\'art de vivre et de laisser vivre, et elle commence par faire ses propres expériences pour ensuite les partager."',
            author: 'Jorge Angel Livraga',
          },
        },
        {
          type: 'card',
          step: 1,
          column: 'left',
          data: {
            title: 'Le problème',
            content: 'Notre tendance est égocentrée',
          },
        },
        {
          type: 'card',
          step: 1,
          column: 'right',
          data: {
            title: 'Le défi',
            content: 'Déplacer le centre hors de l\'ego',
          },
        },
      ],
    },

    // Slide 6: Obstacles
    {
      id: 'obstacles',
      type: 'content',
      theme: 'green',
      blocks: [
        {
          type: 'heading',
          data: {
            category: 'LES OBSTACLES',
            title: 'Pourquoi échouons-nous ?',
            image: '/societe/conflict.jpg',
          },
        },
        {
          type: 'icon-bullets',
          data: {
            items: [
              { icon: 'eye-off', title: 'Ignorance', content: 'La racine de la plupart des conflits' },
              { icon: 'shield', title: 'Radicalisation', content: 'Chacun dans sa forteresse' },
              { icon: 'x-circle', title: 'Fermeture', content: 'Toute tentative de rapprochement échoue' },
            ],
          },
        },
      ],
    },

    // Slide 7: Section II
    {
      id: 'partie-2',
      type: 'section',
      theme: 'orange',
      partNumber: 'II',
      title: 'Le Train Fantôme',
      subtitle: 'Une allégorie de notre monde',
      backgroundImage: '/societe/train.jpg',
    },

    // Slide 8: L'allégorie
    {
      id: 'train-allegorie',
      type: 'content',
      theme: 'orange',
      blocks: [
        {
          type: 'heading',
          data: {
            category: 'ALLÉGORIE',
            title: 'Le Train Fantôme',
            subtitle: 'Jorge Angel Livraga',
            image: '/societe/train-dark.jpg',
          },
        },
        {
          type: 'quote',
          data: {
            text: '"Notre monde est pareil à un train express qui ne sait d\'où il vient, ni où il va, ni pourquoi il roule."',
            author: 'Jorge Angel Livraga',
          },
        },
        {
          type: 'bullets',
          step: 1,
          data: {
            items: [
              'Les mécaniciens ne savent pas non plus...',
              'Personne ne sait rien.',
            ],
          },
        },
      ],
    },

    // Slide 9: Les passagers
    {
      id: 'train-passagers',
      type: 'content',
      theme: 'orange',
      blocks: [
        {
          type: 'heading',
          data: {
            category: 'DANS LE TRAIN',
            title: 'Deux classes',
            image: '/societe/classes.jpg',
          },
        },
        {
          type: 'card',
          column: 'left',
          data: {
            title: 'Première classe',
            content: 'Prospérité apparente',
          },
        },
        {
          type: 'card',
          column: 'right',
          data: {
            title: 'Seconde classe',
            content: 'Entassement misérable',
          },
        },
        {
          type: 'quote',
          step: 1,
          data: {
            text: '"Tous portent sur le visage la peur de ne pas savoir où va le train."',
            author: 'Jorge Angel Livraga',
          },
        },
      ],
    },

    // Slide 10: Le cirque politique
    {
      id: 'train-politique',
      type: 'content',
      theme: 'orange',
      blocks: [
        {
          type: 'heading',
          data: {
            category: 'LE CIRQUE',
            title: 'Qui conduit ?',
            image: '/societe/circus.jpg',
          },
        },
        {
          type: 'quote',
          data: {
            text: '"L\'élu est le plus charlatan, le plus menteur, le meilleur clown."',
            author: 'Jorge Angel Livraga',
          },
        },
        {
          type: 'bullets',
          step: 1,
          data: {
            items: [
              'Des promesses impossibles',
              'Des boutons et des leviers... sans destination',
              'Des sirènes fracassantes',
            ],
          },
        },
      ],
    },

    // Slide 11: Questions
    {
      id: 'train-questions',
      type: 'content',
      theme: 'orange',
      blocks: [
        {
          type: 'heading',
          data: {
            category: 'RÉFLEXION',
            title: 'Et vous ?',
            image: '/societe/mirror.jpg',
          },
        },
        {
          type: 'icon-bullets',
          data: {
            items: [
              { icon: 'compass', title: 'Où va ce train ?', content: '' },
              { icon: 'user', title: 'Qui le conduit vraiment ?', content: '' },
              { icon: 'map-pin', title: 'Où êtes-vous dans ce train ?', content: '' },
            ],
          },
        },
      ],
    },

    // Slide 12: Section III
    {
      id: 'partie-3',
      type: 'section',
      theme: 'blue',
      partNumber: 'III',
      title: 'Un Idéal',
      subtitle: 'Construire un monde meilleur',
      backgroundImage: '/societe/ideal.jpg',
    },

    // Slide 13: Trois piliers
    {
      id: 'ideal-piliers',
      type: 'content',
      theme: 'blue',
      blocks: [
        {
          type: 'heading',
          data: {
            category: 'PROPOSITION',
            title: 'Trois Piliers',
            subtitle: 'Pour un monde nouveau',
            image: '/societe/pillars.jpg',
          },
        },
        {
          type: 'icon-bullets',
          data: {
            items: [
              { icon: 'heart', title: 'Fraternité', content: 'Respect de la dignité humaine' },
              { icon: 'book-open', title: 'Connaissance', content: 'L\'amour de la sagesse' },
              { icon: 'trending-up', title: 'Développement', content: 'Le meilleur du potentiel humain' },
            ],
          },
        },
      ],
    },

    // Slide 14: L'éducation
    {
      id: 'education',
      type: 'content',
      theme: 'blue',
      blocks: [
        {
          type: 'heading',
          data: {
            category: 'LE GRAND DÉFI',
            title: 'L\'Éducation',
            image: '/societe/education.jpg',
          },
        },
        {
          type: 'section',
          data: {
            title: 'Former des citoyens conscients',
            content: 'Indispensable pour s\'améliorer soi-même, améliorer son environnement et le monde.',
          },
        },
        {
          type: 'quote',
          step: 1,
          data: {
            text: '"La jeunesse a toujours eu un rôle prépondérant dans l\'imagination et la mise en œuvre du changement."',
            author: 'Nouvelle Acropole',
          },
        },
      ],
    },

    // Slide 15: Conclusion
    {
      id: 'conclusion',
      type: 'content',
      theme: 'blue',
      blocks: [
        {
          type: 'heading',
          data: {
            category: 'CONCLUSION',
            title: 'Le choix nous appartient',
            image: '/societe/choice.jpg',
          },
        },
        {
          type: 'quote',
          data: {
            text: '"Il faut se rappeler la différence entre la condition humaine — notre nature avec ses limitations — et la dignité humaine — la partie lumineuse de notre nature."',
            author: 'Jorge Angel Livraga',
          },
        },
        {
          type: 'card',
          step: 1,
          data: {
            content: 'Condition ou Dignité : que choisissez-vous de cultiver ?',
          },
        },
      ],
    },
  ],
}
