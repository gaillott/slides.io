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
          title: 'Portrait : Eren, Jean',
          image: '/aot/jean.jpg'
        },
        {
          partNumber: 'PARTIE IV',
          title: 'Gaby : Absurdité de la guerre',
          image: '/aot/mywar.jpg'
        },
        {
          partNumber: 'PARTIE V',
          title: "Les Leçons d'Isayama",
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
      type: 'content',
      theme: 'orange',
      category: 'ARCHÉTYPE DU PEUPLE DE PARADIS',
      title: 'Hannes',
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
        { url: '/aot/video/s1e16_integration_bataillon.mp4', title: 'S1E16 — Intégration du bataillon' },
      ],
      leftColumn: {
        title: 'La Quête Philosophique',     
        content: '',    
        bulletPoints: [
          {
            icon: 'compass',
            title: 'Quête de Vérité',
            content: 'Sortir des murs, c\'est choisir la connaissance sur l\'ignorance confortable.'
          },
          {
            icon: 'heart',
            title: 'Le Prix de la Liberté',
            content: 'Les épreuves et le confort sont le prix de la liberté.'
          },
          {
            icon: 'flame',
            title: "l'éveil de la conscience",
            content: "Jean, Connie et Sasha se révèlent en choisissant une cause supérieur à leur égo."
          }
        ],
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
            title: "Le choix de la Philosophie",
            highlightedText: '',
            content: [
              "La philosophie, comme le Bataillon, nous demande de sortir de notre zone de confort pour affronter la vérité — même quand elle dérange."
            ],
            footer: {
              title: '"Celui qui travaille pour sa seule vie ne construit rien. Mais celui qui travaille pour l\'éternité, celui-là bâtit un empire [...]."',
              text: "Saint-Exupéry, Citadelle"
            }
          }
        ]
      }
    },

    // Slide 10: Erwin Smith (vidéo intégrée)
    {
      id: 'erwin-philosophie',
      type: 'content',
      theme: 'green',
      category: 'STOÏCISME ET TRANSCENDANCE',
      title: 'Erwin Smith',
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
          content: '"Songe que tu pourrais à l\'instant quitter la vie. Agis, parle, pense en conséquence."',
          highlight: 'Agir en conséquence',
          subtext: 'Pensées pour moi-même, Livre II, §11'
        }
      ],
      quote: {
        text: '"Quels que soient vos rêves ou vos espoirs [...] , l\'homme ne peut échapper à la mort."',
        author: 'Erwin Smith — La charge vers le Titan Bestial (S3 E16, Ep53)'
      },
      bulletPointsTitle: '',
      bulletPoints: [
        'Métitation stoïcienne sur la mort,',
        "L'idéal au dessus de sa propre vie",
      ]
    },

    // Slide 11: Section - Partie III
    {
      id: 'partie-3',
      type: 'section',
      theme: 'blue',
      partNumber: 'III',
      title: 'Partie III',
      subtitle: 'Portrait : Eren, Jean',
      backgroundImage: '/aot/jean.jpg'
    },

    // Slide 12: Introduction Bhagavad Gîta (vidéo intégrée)
    {
      id: 'bhagavad-gita-intro',
      type: 'content',
      theme: 'blue',
      category: 'PORTRAIT • LA BHAGAVAD GÎTA',
      title: 'Eren : Combat Intérieur',
      subtitle: 'Quand l\'homme tombe à genoux',
      videos: [
        { url: '/aot/video/s2e12_eren_combat_interieur.mp4', title: 'S2E12 (Ep37) — Eren à genoux, impuissant' }
      ],
      content: {
        highlightedText: 'Dans la Bhagavad Gîta, Arjuna doit lancer le combat.',
        text: " En voyant dans le camp ennemi ses amis et sa famille, il refuse de combattre et s'effondre.",
        quote: {
          text: '"Mon arc glisse de mes mains, ma peau brûle, je ne peux plus tenir debout, mon esprit vacille..."',
          author: 'Arjuna — Bhagavad Gîta, Chant I'
        },
      },
      cards: [
        {
          title: 'Krishna à Arjuna',
          content: '"Tu t\'apitoies là où il ne faut pas. Les sages ne pleurent ni les vivants ni les morts. Lève-toi, fils de Kuntî, et combats."',
          highlight: 'Lève-toi et combats',
          subtext: 'Bhagavad Gîta, Chant II, v.11 & v.37'
        },
         {
          title: 'Un combat à l\'intérieur en nous',
          content: 'Nos défauts, nos défaites, nos mauvais désirs nous hantent. Ils nous attaquent pour nous empêcher de faire notre devoir.',
          highlight: 'Conscience vs  Personnalité',
        }
      ]
    },

    // Slide 15: Jean Kirschtein — Portrait
    {
      id: 'jean',
      type: 'content',
      theme: 'blue',
      category: 'PORTRAIT • L\'HUMANITÉ',
      title: 'Jean Kirschtein',
      subtitle: 'L\'Homme Ordinaire qui agit extraordinairement',
      videos: [
        { url: '/aot/video/s4e8_jean_sasha.mp4', title: 'S4E8 — Mort de Sasha' }
      ],
      sections: [
        {
          title: 'L\'éveil de la conscience',
          content: "Jean rêvait des Brigades Spéciales : une vie tranquille à l'intérieur des murs. Il n'a aucun idéal, aucune rage, aucun pouvoir spécial. Quand Marco meurt, il ne se transforme pas en héros — il se retrouve simplement seul avec sa conscience. Et il choisit de ne pas fuir."
        },
        {
          title: 'Le meilleur de l\'humanité',
          content: "Jean est tiraillé en permanence. Il a peur, il doute, il voudrait fuir. Mais à chaque croisement, il choisit d'écouter sa conscience plutôt que sa peur. Il ne tue pas Gaby — celle qui a tué Sasha — parce que ce ne serait pas juste. Jean représente ce que l'on peut faire de mieux en tant qu'humain : agir bien, avec nos doutes et nos faiblesses."
        }
      ],
      cards: [
        {
          title: 'Aristote — Éthique à Nicomaque',
          content: '"C\'est en pratiquant les actions justes que nous devenons justes, les actions tempérantes que nous devenons tempérants, les actions courageuses que nous devenons courageux."',
          highlight: 'Devenir juste en agissant justement',
          subtext: 'Livre II, chap. 1 — On ne naît pas bon. On le devient par ses actes.'
        }
      ],
      
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
      type: 'content',
      theme: 'red',
      category: 'LE CYCLE DE LA HAINE',
      title: 'Gaby Braun',
      subtitle: 'Produit de la Propagande • Vision Binaire',
      videos: [
        { url: '/aot/video/s4e2_gaby_tranchee.mp4', title: 'S4E1 (Ep60) — Fort Slava' },
        { url: '/aot/video/s4e11_gaby_dogme.mp4', title: 'S4E10 (Ep70) — Gaby Dogme' }
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
      type: 'content',
      theme: 'red',
      category: 'LA MAÏEUTIQUE',
      title: 'Gaby Braun',
      subtitle: 'La Déconstruction • La Maïeutique de Kaya',
      videos: [
        { url: '/aot/video/s4e11_gaby_kaya_socrate.mp4', title: 'S4E11 (Ep70) — Kaya confronte Gaby' },
        { url: '/aot/video/s4e12_peresasha.mp4', title: 'S4E12 (Ep71) — Le père de Sasha brise le cercle' },
        { url: '/aot/video/e77_gaby_sagesse.mp4', title: 'S4E18 (Ep77) — Gaby prise de conscience' }
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
        },
      ],
      bulletPointsTitle: '',
      bulletPoints: [
        'De la certitude au doute : le premier pas vers la sagesse',
        'Sortir de la caverne est difficile et long...',
      ]
    },

    // Slide 19: Section - Partie V
    {
      id: 'partie-5',
      type: 'section',
      theme: 'blue',
      partNumber: 'V',
      title: 'Partie V',
      subtitle: "Les Leçons d'Isayama",
      backgroundImage: '/aot/putin.jpg'
    },

    // Slide 20: Les Leçons d'Isayama (vidéos intégrées)
    {
      id: 'lecons-isayama',
      type: 'parallels',
      theme: 'red',
      title: "Les Leçons d'Isayama",
      subtitle: "Ce que l'Attaque des Titans nous enseigne",
      videos: [
        { url: '/aot/video/mywar.mp4', title: 'Générique saison finale — My War' },
        { url: '/aot/video/e87_eren_grand_terassement.mp4', title: 'S4E28 (Ep87) - Grand Terassement' }
      ],
      parallels: [
        {
          icon: 'alert',
          title: "L'Absurdité de la Guerre",
          anime: "L'ennemi n'est plus le Titan, mais l'homme de l'autre côté de la mer — puis son propre voisin. La déshumanisation engendre l'escalade.",
          realWorld: "\"On se battait contre des gens comme nous.\" La guerre crée des monstres des deux côtés — Gaby et Eren sont le miroir l'un de l'autre."
        },
        {
          icon: 'flame',
          title: "La Liberté Absolue Détruit",
          anime: "Eren, Surhomme nietzschéen, brise toutes les chaînes — mais sa liberté absolue mène au Grand Terrassement, la destruction totale.",
          realWorld: "Une liberté sans conscience ni limites morales devient la pire des tyrannies. La volonté de puissance sans sagesse est auto-destructrice."
        },
        {
          icon: 'heart',
          title: 'Le Combat Intérieur et la Conscience',
          anime: "Jean choisit d'écouter sa conscience plutôt que sa peur. Il ne tue pas Gaby. Il combat ses propres démons avant de combattre l'ennemi.",
          realWorld: "Comme Arjuna dans la Bhagavad Gîta, le vrai combat est intérieur. Suivre sa conscience — même quand le monde entier dit le contraire — c'est le premier acte de liberté."
        },
        {
          icon: 'users',
          title: 'Briser le Cercle, Créer un Cercle Vertueux',
          anime: "Le père de Sasha refuse de tuer Gaby — il brise le cycle de la vengeance. L'humanisme n'est pas une faiblesse, c'est un choix courageux.",
          realWorld: "On ne naît pas bon, on le devient par ses actes (Aristote). Chaque acte de conscience crée un cercle vertueux — chaque acte de haine relance le cercle vicieux."
        }
      ],
      bottomQuote: "\"Cette guerre, on ne savait pas pourquoi on la faisait. On se battait contre des gens comme nous.\" — Lazare Ponticelli, dernier poilu français"
    },

    // Slide 21: Conclusion - La Liberté (vidéos intégrées)
    {
      id: 'conclusion',
      type: 'content',
      theme: 'blue',
      category: 'CONCLUSION',
      title: 'Qu\'est-ce que la Liberté ?',
      subtitle: 'Trois visions, trois chemins',
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
          title: 'Se Responsabiliser — Grandir et Agir',
          content: 'On est libre de se transformer intérieurement et d\'agir pour le monde extérieur — en même temps. Le développement personnel sans action est stérile. L\'action sans travail intérieur reproduit les mêmes erreurs.',
        },
        {
          title: 'Le Bataillon — L\'Idéal',
          content: 'On est libre de choisir un idéal plus grand que soi et de se battre pour lui. C\'est le bataillon d\'exploration; C\'est le père de Sasha; C\'est L\'humanité de Jean.',
        }
      ],
      quote: {
        text: '"Une excellente manière de te défendre d\'eux, c\'est d\'éviter de leur ressembler."',
        author: 'Marc Aurèle, Pensées pour moi-même'
      },
    }
  ]
}
