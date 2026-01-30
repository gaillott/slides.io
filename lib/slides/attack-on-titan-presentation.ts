import { Presentation } from './types'

export const attackOnTitanPresentation: Presentation = {
  id: 'attack-on-titan',
  title: "Ciné Philo - L'Attaque des Titans",
  author: "Ciné Philo",
  description: "Liberté, conscience et absurdité de la guerre - Une exploration philosophique de l'œuvre d'Hajime Isayama",
  coverImage: '/aot/attackontitanbg.jpg',
  createdAt: '2026-01-28',
  slides: [
    // Slide 1: Title
    {
      id: 'title',
      type: 'title',
      theme: 'red',
      category: 'CINÉ PHILOSOPHIQUE',
      title: "L'Attaque des Titans",
      subtitle: 'Liberté, conscience et absurdité de la guerre',
      description: "Une exploration philosophique de l'œuvre d'Hajime Isayama",
      backgroundImage: '/aot/attackontitanbg.jpg',
    },

    // Slide 2: Introduction - Plan
    {
      id: 'introduction',
      type: 'plan',
      theme: 'red',
      category: 'PLAN DE LA PRÉSENTATION',
      title: "L'Attaque des Titans",
      subtitle: "Une exploration philosophique de l'œuvre d'Hajime Isayama",
      description: "À travers l'histoire d'une humanité enfermée derrière des murs, confrontée à des géants mangeurs d'hommes, nous explorerons les thèmes universels de la liberté, de la violence et de la morale.",
      items: [
        {
          partNumber: 'PARTIE I',
          title: 'Paradis : La Caverne de Platon',
          image: '/aot/wall.webp'
        },
        {
          partNumber: 'PARTIE II',
          title: "Bataillon d'exploration : Aventure de la conscience",
          image: '/aot/expo.jpg'
        },
        {
          partNumber: 'PARTIE III',
          title: 'Livai, Armin, Jean : Combat Intérieur',
          image: '/aot/armin.jpg'
        },
        {
          partNumber: 'PARTIE IV',
          title: 'Gaby : Absurdité de la guerre',
          image: '/aot/mywar.jpg'
        },
        {
          partNumber: 'PARTIE V',
          title: "Isayama : Mise en garde",
          image: '/aot/putin.jpg'
        }
      ]
    },

    // Slide 3: Section - Partie I
    {
      id: 'partie-1',
      type: 'section',
      theme: 'red',
      partNumber: 'I',
      title: 'Partie I',
      subtitle: 'Paradis : la Caverne de Platon',
      backgroundImage: '/aot/wall.webp'
    },

    // Slide 4: Contexte Historique (vidéo situation initiale intégrée)
    {
      id: 'contexte-historique',
      type: 'timeline',
      theme: 'red',
      title: 'Contexte Historique',
      videos: [
        { url: '/aot/video/EP1_00_00.mp4', title: 'EP01 — Situation initiale' }
      ],
      events: [
        {
          date: '~2000 ans avant',
          title: 'Ymir Fritz obtient le pouvoir des Titans',
          description: "Début du cycle de la violence et de l'oppression"
        },
        {
          date: '~1820 ans avant',
          title: "L'Empire Eldien domine le monde",
          description: 'Les Titans comme armes de guerre - 1800 ans de terreur'
        },
        {
          date: '~100 ans avant',
          title: 'La Grande Guerre des Titans',
          description: 'Karl Fritz, pacifiste, construit les trois murs et efface les mémoires'
        },
        {
          date: 'An 743 - 845',
          title: 'Paradis vit en paix, en autarcie',
          description: 'Pendant que le monde se fait la guerre, Paradis ignore tout, prisonnier de sa caverne'
        },
        {
          date: 'An 845',
          title: 'Chute du Mur Maria',
          description: "Le Titan Colossal brise l'illusion - réveil brutal de la réalité"
        }
      ],
      image: {
        src: '/aot/eldia.webp',
        alt: 'Cimetière symbolisant les morts'
      },
      cards: [{
        title: "L'illusion du sentiment de sécurité",
        content: "",
        highlight: 'Fausse sécurité - Illusion - Séparativisme',
        subtext: "Face à l'actualité et le contexte écologique, nous préférérons vivre heureux, loin des problèmes. Tant que le problème est à un continent près, une frontière près, une ville près, nous ne nous sentons pas concernés. Pourtant, cela ne veut pas dire que la menace est fausse."
      }]
    },

    // Slide 6: Hannes (vidéos intégrées)
    {
      id: 'hannes',
      type: 'character',
      theme: 'orange',
      category: 'ARCHÉTYPE DU PEUPLE DE PARADIS',
      name: 'Hannes',
      subtitle: 'Le Dernier Homme de Nietzsche',
      videos: [
        { url: '/aot/video/EP1_Hannes.mp4', title: 'S1E1 — Hannes ivre, insouciant' },
        { url: '/aot/video/EP1_Hannes_Actes.mp4', title: 'S1E2 — Hannes paralysé devant le Titan Souriant' }
      ],
      sections: [
        {
          title: 'Le Symbole du Conformisme',
          content: 'Hannes incarne le "dernier homme" de Nietzsche : celui qui a renoncé à tout idéal, cherchant uniquement le confort et la sécurité.'
        }
      ],
      cards: [
        {
          title: 'Le "Dernier Homme" — Nietzsche',
          content: 'Hannes est ce dernier homme : il boit, rit, et refuse de voir la réalité — jusqu\'à ce que la tragédie le rattrape.',
          highlight: 'Le dernier homme',
          subtext: ''
        }
      ],
      quote: {
        text: '"Nous avons inventé le bonheur" — disent les derniers hommes, et ils clignent de l\'œil. Ils ont quitté les contrées où il était dur de vivre : car on a besoin de chaleur. [...] On travaille encore, car le travail est un divertissement. Mais on veille à ce que le divertissement ne fatigue point."',
        author: 'Friedrich Nietzsche — Ainsi parlait Zarathoustra, Prologue §5'
      },
      bulletPointsTitle: '',
      bulletPoints: [
        'Préférence pour le confort sur la vérité',
        'Pour Eren, ce discours est insupportable : la Liberté est un besoin vital'
      ]
    },

    // Slide 7: La Caverne de Platon (vidéo intégrée)
    {
      id: 'caverne-platon',
      type: 'content',
      theme: 'red',
      category: 'ALLÉGORIE PHILOSOPHIQUE',
      title: 'Paradis : La Caverne de Platon',
      videos: [
        { url: '/aot/video/caverne_verite.mp4', title: 'S3E20 (Ep57) — Révélation du sous-sol' }
      ],
      content: {
        highlightedText: 'Pendant que le monde se fait la guerre',
        text: ', Paradis vit en paix, en autarcie, ignorant...',
        quote: {
          text: "Comme les prisonniers de la caverne de Platon, le peuple de Paradis ne connaît que les ombres projetées sur les murs. Les trois enceintes ne sont pas seulement des remparts contre les Titans, mais les parois d'une prison mentale.",
          author: ''
        },
        bulletPoints: [
          "L'ignorance comme protection : Karl Fritz a effacé les mémoires pour créer un paradis artificiel",
          "La vérité douloureuse : Sortir de la caverne signifie découvrir une réalité insupportable",
          "Le refus de savoir : La majorité préfère le confort de l'illusion à la liberté de la connaissance"
        ]
      },
      image: {
        src: '/aot/wall3.jpg',
        alt: 'Les murs de Paradis',
        caption: '"Que préférez-vous : vivre dans une cage dorée ou mourir libre ?"'
      }
    },

    // Slide 8: Section - Partie II
    {
      id: 'partie-2',
      type: 'section',
      theme: 'green',
      partNumber: 'II',
      title: 'Partie II',
      subtitle: 'Bataillon d\'exploration : Aventure de la conscience',
      backgroundImage: '/aot/expo.jpg'
    },

    // Slide 9: Le Bataillon d'Exploration (vidéos intégrées)
    {
      id: 'bataillon',
      type: 'two-column',
      theme: 'green',
      category: 'LES AILES DE LA LIBERTÉ',
      title: "Le Bataillon d'Exploration",
      subtitle: "Confort ou Liberté — qu'est-ce qui compte vraiment ?",
      videos: [
        { url: '/aot/video/bataillon_liberte.mp4', title: 'S1E1 — Eren fasciné par le Bataillon' },
        { url: '/aot/video/erwin_verite.mp4', title: 'S3E16 (Ep53) — La quête de vérité' }
      ],
      leftColumn: {
        title: 'La Question Philosophique',
        content: "Le Bataillon pose la question fondamentale de notre rapport au confort : sommes-nous prêts à risquer notre sécurité pour vivre libres ? Dans notre société moderne, nous avons nos propres murs — confort matériel, routine, conformisme — qui nous protègent autant qu'ils nous emprisonnent.",
        bulletPoints: [
          {
            icon: 'compass',
            title: 'Quête de Vérité',
            content: 'Sortir des murs, c\'est choisir la connaissance sur l\'ignorance confortable.'
          },
          {
            icon: 'heart',
            title: 'Le Prix de la Liberté',
            content: '90% de mortalité. Mais certaines causes valent plus que la survie.'
          },
          {
            icon: 'flame',
            title: 'Le Chemin Philosophique',
            content: "Comme Socrate buvant la ciguë, le Bataillon préfère mourir libre que vivre enchaîné."
          }
        ],
        quote: {
          text: '"Dévouez vos cœurs !"',
          author: "Cri de ralliement du Bataillon"
        }
      },
      rightColumn: {
        cards: [
          {
            title: 'Le Miroir de Notre Société',
            highlightedText: 'Préférons-nous',
            content: [
              "la sécurité de nos murs modernes — écrans, confort, consommation — à l'incertitude de la quête de sens ?",
              "Le Bataillon refuse la normalisation de l'oppression. Chaque expédition est un acte philosophique : choisir la liberté sur le confort."
            ]
          },
          {
            title: "Le Chemin Philosophique",
            highlightedText: '',
            content: [
              "La philosophie, comme le Bataillon, nous demande de sortir de notre zone de confort pour affronter la vérité — même quand elle dérange."
            ],
            footer: {
              title: 'Être humain, c\'est refuser d\'être une proie',
              text: "La dignité se conquiert, elle ne se donne pas"
            }
          }
        ]
      }
    },

    // Slide 10: Erwin Smith (vidéo intégrée)
    {
      id: 'erwin-philosophie',
      type: 'character',
      theme: 'green',
      category: 'STOÏCISME ET TRANSCENDANCE',
      name: 'Erwin Smith',
      subtitle: 'Le Stoïcien • Le Chef qui transcende la mort',
      videos: [
        { url: '/aot/video/erwin_speech.mp4', title: 'S3E16 (Ep53) — La charge d\'Erwin' }
      ],
      sections: [
        {
          title: 'Le Stoïcisme Incarné',
          content: "Erwin accepte ce qui ne dépend pas de lui (la mort) et agit avec excellence sur ce qui en dépend (ses choix). Il ne philosophe pas sur ce que doit être un homme de bien — il l'est."
        }
      ],
      cards: [
        {
          title: 'Marc Aurèle',
          content: '"La mort sourit à tous les hommes. Tout ce qu\'un homme peut faire, c\'est lui sourire en retour."',
          highlight: 'lui sourire en retour',
          subtext: 'Erwin charge vers le Titan Singe avec ce sourire.'
        }
      ],
      quote: {
        text: '"Mes soldats ne reculent pas ! Mes soldats avancent ! Mes soldats hurlent ! Mes soldats se battent !"',
        author: 'Erwin Smith — La charge finale (S3 E16, Ep53)'
      },
      bulletPointsTitle: '',
      bulletPoints: [
        'Amor fati : il aime son destin au lieu de le subir',
        'Le sens de la mission dépasse la survie individuelle',
        'Il charge en premier, bras arraché — leadership par l\'exemple'
      ]
    },

    // Slide 11: Section - Partie III
    {
      id: 'partie-3',
      type: 'section',
      theme: 'blue',
      partNumber: 'III',
      title: 'Partie III',
      subtitle: 'Livai, Armin, Jean : Combat intérieur',
      backgroundImage: '/aot/armin.jpg'
    },

    // Slide 12: Introduction Bhagavad Gîta (vidéo intégrée)
    {
      id: 'bhagavad-gita-intro',
      type: 'content',
      theme: 'blue',
      category: 'LA BHAGAVAD GÎTA',
      title: 'Le Combat Intérieur',
      subtitle: 'Quand le devoir s\'oppose au cœur',
      videos: [
        { url: '/aot/video/combat_interieur.mp4', title: 'S3E18 (Ep55) — Livai : Erwin ou Armin ?' }
      ],
      content: {
        highlightedText: 'Dans la Bhagavad Gîta,',
        text: " le guerrier Arjuna se tient sur le champ de bataille, face à ses propres cousins, ses maîtres, ses amis. Il doit les combattre — c'est son dharma (devoir). Mais comment tuer ceux qu'on aime ?",
        quote: {
          text: '"Mon arc glisse de mes mains, ma peau brûle, je ne peux plus tenir debout, mon esprit vacille..."',
          author: 'Arjuna — Bhagavad Gîta, Chant I'
        },
        bulletPoints: [
          'Le dharma du guerrier : agir selon son devoir, même quand cela déchire l\'âme',
          'Krishna enseigne : l\'action juste, détachée du fruit de ses actes',
          'Trois personnages d\'AoT incarnent ce combat : Livai, Armin, Jean'
        ]
      }
    },

    // Slide 13: Livai Ackerman
    {
      id: 'livai',
      type: 'character',
      theme: 'blue',
      category: 'LE COMBAT INTÉRIEUR • BHAGAVAD GÎTA',
      name: 'Livai Ackerman',
      subtitle: 'Le Guerrier qui tue ceux qu\'il aime',
      sections: [
        {
          title: 'Le Dharma du Soldat',
          content: "Livai a tranché la nuque de ses propres camarades transformés en Titans. Comme Arjuna face à ses cousins, il accomplit son devoir le cœur en lambeaux."
        }
      ],
      cards: [
        {
          title: 'Bhagavad Gîta — Le Détachement',
          content: '"Tu as droit à l\'action, mais jamais à ses fruits."',
          highlight: 'jamais à ses fruits',
          subtext: 'Livai agit parce qu\'il le doit. Chaque victoire lui coûte quelqu\'un qu\'il aimait.'
        }
      ],
      quote: {
        text: '"Fais un choix. Et crois en lui."',
        author: 'Livai Ackerman'
      },
      bulletPointsTitle: '',
      bulletPoints: [
        'Morale : Agir selon son devoir, même quand cela déchire — c\'est cela, la force intérieure'
      ]
    },

    // Slide 14: Armin Arlert
    {
      id: 'armin-combat',
      type: 'character',
      theme: 'blue',
      category: 'LE COMBAT INTÉRIEUR • BHAGAVAD GÎTA',
      name: 'Armin Arlert',
      subtitle: 'Le Pacifiste devenu Arme de Destruction',
      sections: [
        {
          title: 'L\'Innocence Sacrifiée',
          content: "Armin rêvait de voir la mer, pas de la remplir de cadavres. Le garçon du dialogue est devenu celui qui rase des ports. Comment rester soi-même quand le monde vous transforme ?"
        }
      ],
      cards: [
        {
          title: 'Bhagavad Gîta — L\'Action Juste',
          content: '"Mieux vaut accomplir imparfaitement son propre dharma que parfaitement celui d\'autrui."',
          highlight: 'son propre dharma',
          subtext: 'Armin n\'a pas choisi d\'être le Colossal. Mais c\'est désormais son dharma.'
        }
      ],
      quote: {
        text: '"Quelqu\'un qui ne peut rien sacrifier ne peut rien changer."',
        author: 'Armin Arlert'
      },
      bulletPointsTitle: '',
      bulletPoints: [
        'Morale : Accepter le rôle que la vie nous impose, sans perdre notre idéal'
      ]
    },

    // Slide 15: Jean Kirschtein (vidéo intégrée)
    {
      id: 'jean',
      type: 'character',
      theme: 'blue',
      category: 'LE COMBAT INTÉRIEUR • BHAGAVAD GÎTA',
      name: 'Jean Kirschtein',
      subtitle: 'L\'Homme Ordinaire • Nous',
      videos: [
        { url: '/aot/video/jean_combat_interieur.mp4', title: 'S3E2 (Ep39) — Jean tue un humain' }
      ],
      sections: [
        {
          title: 'Le Héros Malgré Lui',
          content: "Jean voulait une vie tranquille. La mort de Marco l'a transformé. Il est devenu leader par nécessité — le plus humain des parcours."
        }
      ],
      cards: [
        {
          title: 'Bhagavad Gîta — Le Guerrier Réticent',
          content: '"Il vaut mieux mourir en accomplissant son propre dharma ; le dharma d\'autrui est plein de danger."',
          highlight: 'plein de danger',
          subtext: 'Jean n\'est pas né guerrier. La guerre l\'a trouvé.'
        }
      ],
      quote: {
        text: '"Je ne veux pas mourir... mais je ne veux pas non plus vivre en ayant laissé mes camarades mourir seuls."',
        author: 'Jean Kirschtein'
      },
      bulletPointsTitle: '',
      bulletPoints: [
        'Morale : Le courage n\'est pas l\'absence de peur, mais le choix d\'agir malgré elle. Que ferions-nous à sa place ?'
      ]
    },

    // Slide 16: Section - Partie IV
    {
      id: 'partie-4',
      type: 'section',
      theme: 'red',
      partNumber: 'IV',
      title: 'Partie IV',
      subtitle: 'Gaby : Absurdité de la guerre',
      backgroundImage: '/aot/gaby.jpg'
    },

    // Slide 17: Gaby — Produit de la Propagande (vidéo intégrée)
    {
      id: 'gaby-propagande',
      type: 'character',
      theme: 'red',
      category: 'LE CYCLE DE LA HAINE',
      name: 'Gaby Braun',
      subtitle: 'Produit de la Propagande • Vision Binaire',
      videos: [
        { url: '/aot/video/gaby_propagande.mp4', title: 'S4E1 (Ep60) — Fort Slava + S4E8 (Ep67) — Gaby tue Sasha' }
      ],
      sections: [
        {
          title: 'Produit de la Propagande',
          content: "Gaby est ce que la propagande peut créer : une enfant-soldat convaincue d'être un \"bon Eldien\", prête à tout pour prouver sa valeur à ses oppresseurs. Elle a intériorisé la haine de son propre peuple."
        }
      ],
      cards: [
        {
          title: 'Le Miroir d\'Eren',
          content: 'Gaby est Eren de l\'autre côté de la mer. Même rage, même certitude d\'être du côté du bien. La haine se reproduit identiquement des deux côtés.',
          highlight: 'Le miroir d\'Eren',
          subtext: 'Début du voyage initiatique : la confrontation avec l\'Autre va briser ses certitudes.'
        }
      ],
      quote: {
        text: '"Je vais tous les tuer ! Ces démons de Paradis !"',
        author: 'Gaby Braun — Avant sa déconstruction'
      },
      bulletPointsTitle: '',
      bulletPoints: [
        'Vision binaire du monde héritée de la propagande',
        'Début du voyage initiatique de la conscience'
      ]
    },

    // Slide 18: Gaby — Déconstruite (vidéo intégrée)
    {
      id: 'gaby-deconstruite',
      type: 'character',
      theme: 'red',
      category: 'LA MAÏEUTIQUE',
      name: 'Gaby Braun',
      subtitle: 'La Déconstruction • La Maïeutique de Kaya',
      videos: [
        { url: '/aot/video/gaby_kaya.mp4', title: 'S4E11 (Ep70) — Kaya confronte Gaby' }
      ],
      sections: [
        {
          title: 'La Maïeutique de Kaya',
          content: "\"Qu'est-ce que ma mère avait fait de mal ?\" — Cette question simple fait s'effondrer tout l'édifice. Socrate utilisait la maïeutique pour \"accoucher\" les esprits de la vérité. Kaya, sans le savoir, devient la sage-femme de la conscience de Gaby."
        }
      ],
      cards: [
        {
          title: 'La Prise de Conscience',
          content: 'Les "démons" de Paradis vivent, aiment, souffrent comme elle. La réalité est plus complexe que la propagande.',
          highlight: 'Ces gens... ne sont pas des démons',
          subtext: 'La déconstruction de Gaby est un chemin philosophique : du dogme à la pensée libre.'
        }
      ],
      quote: {
        text: '"Ces gens... ne sont pas des démons..."',
        author: 'Gaby Braun — Sa prise de conscience'
      },
      bulletPointsTitle: '',
      bulletPoints: [
        'De la certitude au doute : le premier pas vers la sagesse'
      ]
    },

    // Slide 19: Section - Partie V
    {
      id: 'partie-5',
      type: 'section',
      theme: 'blue',
      partNumber: 'V',
      title: 'Partie V',
      subtitle: 'Isayama : Mise en garde',
      backgroundImage: '/aot/putin.jpg'
    },

    // Slide 20: Mise en Garde d'Isayama (vidéos intégrées)
    {
      id: 'mise-en-garde',
      type: 'parallels',
      theme: 'red',
      title: 'Mise en Garde d\'Isayama',
      subtitle: "Les dérives de la mémoire et l'absurdité de la guerre",
      videos: [
        { url: '/aot/video/mywar.mp4', title: 'Générique saison finale — My War' },
        { url: '/aot/video/cycle_recommence.mp4', title: 'Épisode final — Le cycle recommence' }
      ],
      parallels: [
        {
          icon: 'alert',
          title: 'Le Devoir de Mémoire Détourné',
          anime: "Le signe \"Sasageyo\" (Dévouez vos cœurs) devient un symbole de ralliement fasciste pour les Jägeristes",
          realWorld: "Les symboles de résistance récupérés par les extrémismes — la mémoire peut être instrumentalisée"
        },
        {
          icon: 'users',
          title: 'L\'Ennemi Change de Visage',
          anime: "L'ennemi n'est plus le Titan, mais l'homme de l'autre côté de la mer — puis son propre voisin",
          realWorld: "La déshumanisation de l'adversaire : on ne tue pas des hommes, on tue des \"monstres\""
        },
        {
          icon: 'globe',
          title: 'Le Cycle Recommence',
          anime: "Le générique de fin montre des enfants qui trouvent l'arbre d'Ymir — le cycle de violence peut renaître",
          realWorld: "L'histoire se répète quand on oublie ses leçons — nous nous militarisons encore aujourd'hui"
        },
        {
          icon: 'scale',
          title: 'Un Monde Sans Sens',
          anime: "Dans un monde matérialiste où les murs sont tombés, que reste-t-il à défendre ?",
          realWorld: "La philosophie pose les questions essentielles — mais sommes-nous prêts à les écouter ?"
        }
      ],
      bottomQuote: "\"Cette guerre, on ne savait pas pourquoi on la faisait. On se battait contre des gens comme nous.\" — Lazare Ponticelli, dernier poilu français"
    },

    // Slide 21: Conclusion - La Liberté (vidéos intégrées)
    {
      id: 'conclusion',
      type: 'character',
      theme: 'blue',
      category: 'CONCLUSION',
      name: 'Qu\'est-ce que la Liberté ?',
      subtitle: 'Trois visions, trois chemins',
      videos: [
        { url: '/aot/video/pere_sasha.mp4', title: 'S4E13 (Ep72) — Le père de Sasha brise le cycle' },
        { url: '/aot/video/gaby_parents_sasha.mp4', title: 'S4E13 (Ep72) — Gaby face aux parents de Sasha' }
      ],
      sections: [
        {
          title: 'La Liberté selon Spinoza',
          content: "\"L'homme qui s'adonne à ses plaisirs devient moins libre que celui qui s'en restreint.\" La vraie liberté n'est pas l'absence de contraintes, mais la maîtrise de soi. Hannes, Eren et le Bataillon incarnent trois rapports différents à cette liberté."
        },
        {
          title: 'Ce que nous enseigne AoT',
          content: "Ce que peut faire de mieux un arbre, c'est grandir et se développer. Ce que peut faire de mieux un homme, c'est suivre sa conscience — même quand le monde entier lui dit qu'il a tort."
        }
      ],
      cards: [
        {
          title: 'Hannes — La Non-Action',
          content: 'On est libre de ne pas agir, de choisir le confort de l\'ignorance. Mais cette liberté-là est une prison dorée.',
        },
        {
          title: 'Eren — La Liberté Absolue Nietschéenne',
          content: 'On est libre de tout sacrifier pour sa liberté personnelle. Mais cette liberté-là détruit tout sur son passage.',
        },
        {
          title: 'Le Bataillon — L\'Idéal',
          content: 'On est libre de choisir un idéal plus grand que soi et de se battre pour lui. Cette liberté-là donne un sens à la mort.',
        }
      ],
      quote: {
        text: '"Une excellente manière de te défendre d\'eux, c\'est d\'éviter de leur ressembler."',
        author: 'Marc Aurèle, Pensées pour moi-même'
      },
    }
  ]
}
