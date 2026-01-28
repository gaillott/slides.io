import { Presentation } from './types'

export const attackOnTitanPresentation: Presentation = {
  id: 'attack-on-titan',
  title: "Ciné Philo - L'Attaque des Titans",
  author: "Café Philosophique",
  description: "Liberté, Déterminisme et Moralité dans un Monde en Cage - Une exploration philosophique de l'œuvre d'Hajime Isayama",
  coverImage: '/images/aot-title-bg.png',
  createdAt: '2026-01-28',
  slides: [
    // Slide 1: Title
    {
      id: 'title',
      type: 'title',
      theme: 'red',
      category: 'CAFÉ PHILOSOPHIQUE',
      title: "L'Attaque des Titans",
      subtitle: 'Liberté, Déterminisme et Moralité dans un Monde en Cage',
      description: "Une exploration philosophique de l'œuvre d'Hajime Isayama",
      backgroundImage: '/images/aot-title-bg.png'
    },
    
    // Slide 2: Introduction
    {
      id: 'introduction',
      type: 'content',
      theme: 'red',
      category: '',
      title: 'Introduction',
      content: {
        highlightedText: "L'Attaque des Titans",
        text: "(進撃の巨人, Shingeki no Kyojin) n'est pas qu'un simple anime d'action. C'est une œuvre profondément philosophique qui interroge les notions fondamentales de notre existence.\n\nÀ travers l'histoire d'une humanité enfermée derrière des murs, confrontée à des géants mangeurs d'hommes, Hajime Isayama explore des thèmes universels :",
        bulletPoints: [
          'La nature de la liberté et du déterminisme',
          'Le cycle de la violence et de la vengeance',
          'La relativité morale dans les conflits',
          'Le prix du sacrifice pour le bien commun'
        ]
      },
      image: {
        src: '/images/philosophers.png',
        alt: 'Socrate et philosophes grecs'
      }
    },
    
    // Slide 3: Section - Partie I
    {
      id: 'partie-1',
      type: 'section',
      theme: 'red',
      partNumber: 'Partie I',
      title: 'Partie I',
      subtitle: 'Paradis : La Prison Dorée'
    },
    
    // Slide 4: La Caverne de Platon
    {
      id: 'caverne-platon',
      type: 'content',
      theme: 'red',
      category: 'ALLÉGORIE PHILOSOPHIQUE',
      title: 'Paradis : La Caverne de Platon',
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
        src: '/images/walls.png',
        alt: 'Les murs de Paradis',
        caption: '"Que préférez-vous : vivre dans une cage dorée ou mourir libre ?"'
      }
    },
    
    // Slide 5: Hannes
    {
      id: 'hannes',
      type: 'character',
      theme: 'orange',
      category: 'ARCHÉTYPE DU PEUPLE DE PARADIS',
      name: 'Hannes',
      subtitle: "L'Homme Moyen • Le Troupeau",
      sections: [
        {
          title: 'Le Symbole du Conformisme',
          content: 'Hannes incarne l\'homme qui a arrêté de se poser des questions. Il représente la masse qui suit aveuglément la société, préférant la sécurité illusoire des murs à l\'incertitude de la liberté.'
        }
      ],
      cards: [
        {
          title: 'Le Concept de "Dernier Homme"',
          content: 'Nietzsche décrit le "dernier homme" comme celui qui a renoncé à tout idéal, qui ne cherche que son petit bonheur personnel et sa sécurité.',
          highlight: '',
          subtext: 'Hannes est ce dernier homme : il préfère boire et rire plutôt que de combattre, jusqu\'à ce que la tragédie le force à voir la réalité.'
        },
        {
          title: 'Pour Eren, ce discours est insupportable',
          content: 'Les Titans oppressent l\'homme et le privent de son plus grand besoin : La Liberté',
          highlight: 'La Liberté',
          subtext: 'Le conflit générationnel entre l\'acceptation (Hannes) et la rébellion (Eren) reflète le débat éternel entre sécurité et liberté.'
        }
      ],
      quote: {
        text: '"À quoi bon sortir ? On a tout ce qu\'il faut ici. De la nourriture, de l\'eau, des murs pour nous protéger..."',
        author: 'Hannes, avant la chute du Mur Maria'
      },
      bulletPoints: [
        'Acceptation passive de la situation',
        'Méfiance envers ceux qui remettent en question l\'ordre établi',
        'Préférence pour le confort immédiat sur la vérité'
      ]
    },
    
    // Slide 6: Le Bataillon d'Exploration
    {
      id: 'bataillon',
      type: 'two-column',
      theme: 'green',
      category: 'LES AILES DE LA LIBERTÉ',
      title: "Le Bataillon d'Exploration",
      subtitle: "Une bouée de sauvetage d'un monde qui a accepté sa prison matérielle",
      leftColumn: {
        title: 'Le Symbole de la Résistance',
        content: "Pour Eren, l'idéaliste, le Bataillon d'Exploration représente bien plus qu'une unité militaire. C'est l'incarnation vivante de la volonté humaine de transcender ses limites, de refuser la résignation.",
        bulletPoints: [
          {
            icon: 'compass',
            title: 'La Quête de Vérité',
            content: 'Ceux qui sortent des murs ne cherchent pas seulement à combattre les Titans, mais à découvrir la vérité sur le monde.'
          },
          {
            icon: 'heart',
            title: 'Le Sacrifice Noble',
            content: 'Taux de mortalité : 90%. Mais ils continuent. Car certaines causes valent plus que la simple survie.'
          },
          {
            icon: 'flame',
            title: "L'Espoir pour l'Humanité",
            content: "Dans un monde résigné, ils sont la preuve que l'esprit humain peut refuser l'emprisonnement."
          }
        ],
        quote: {
          text: '"Dévouez vos cœurs !"',
          author: "Le cri de ralliement du Bataillon : donnez tout pour la liberté de l'humanité"
        }
      },
      rightColumn: {
        cards: [
          {
            title: 'Opposition à la Prison Matérielle',
            highlightedText: 'Le peuple de Paradis',
            content: [
              "s'est habitué aux murs. Ils ont créé une société, des marchés, des familles. Ils ont transformé leur prison en foyer.",
              "Le Bataillon refuse cette normalisation de l'oppression. Chaque expédition est un acte de rébellion contre l'acceptation passive.",
              "C'est la tension entre la vie confortable dans les chaînes et la lutte dangereuse pour la liberté."
            ]
          },
          {
            title: "Pour l'Enfant Eren",
            highlightedText: '',
            content: [
              "Le Bataillon représente tout ce qu'il rêve de devenir. Ces soldats incarnent le refus de la médiocrité, le courage face à l'impossible, et surtout :"
            ],
            footer: {
              title: 'La dignité humaine retrouvée',
              text: "Car être humain, c'est aussi refuser d'être une proie"
            }
          }
        ]
      }
    },
    
    // Slide 7: Contexte Historique
    {
      id: 'contexte-historique',
      type: 'timeline',
      theme: 'red',
      title: 'Contexte Historique',
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
        src: '/images/cemetery.png',
        alt: 'Cimetière symbolisant les morts'
      }
    },
    
    // Slide 8: Section - Partie II
    {
      id: 'partie-2',
      type: 'section',
      theme: 'blue',
      partNumber: 'Partie II',
      title: 'Partie II',
      subtitle: 'Le Réveil de la Conscience'
    },
    
    // Slide 9: Extrait Vidéo
    {
      id: 'video-erwin',
      type: 'video',
      theme: 'red',
      title: 'Extrait Vidéo',
      placeholder: "Insérer l'extrait vidéo de Attack on Titan",
      description: "(Exemple : Le discours d'Erwin avant la charge finale)",
      quote: {
        text: '"Si on abandonne, on ne gagne rien. Si on résiste, on peut perdre... Mais si on ne résiste pas, on est sûr de perdre !"',
        author: 'Erwin Smith'
      }
    },
    
    // Slide 10: Section - Partie III
    {
      id: 'partie-3',
      type: 'section',
      theme: 'blue',
      partNumber: 'Partie III',
      title: 'Partie III',
      subtitle: 'Philosophie des Personnages'
    },
    
    // Slide 11: Eren Jäger
    {
      id: 'eren',
      type: 'character',
      theme: 'red',
      category: 'PHILOSOPHIE DES PERSONNAGES',
      name: 'Eren Jäger',
      subtitle: 'Le Titan Assaillant',
      sections: [
        {
          title: 'Philosophie',
          content: "Eren incarne la volonté de puissance nietzschéenne poussée à l'extrême. Sa quête de liberté absolue le conduit à des choix moralement ambigus, illustrant le paradoxe de la violence libératrice."
        },
        {
          title: 'Concept Philosophique',
          content: "L'existentialisme de Sartre : nous sommes condamnés à être libres. Eren refuse tout déterminisme, quitte à devenir lui-même l'oppresseur."
        }
      ],
      quote: {
        text: '"Je suis libre. Peu importe ce que les autres pensent de moi, je suis libre de faire ce que je veux."',
        author: 'Eren Jäger'
      }
    },
    
    // Slide 12: Mikasa Ackerman
    {
      id: 'mikasa',
      type: 'character',
      theme: 'red',
      category: 'PHILOSOPHIE DES PERSONNAGES',
      name: 'Mikasa Ackerman',
      subtitle: 'La Loyauté Incarnée',
      sections: [
        {
          title: 'Philosophie',
          content: "Mikasa représente l'attachement absolu et le sens du devoir. Sa force réside dans ses liens, mais ces mêmes liens peuvent devenir une prison émotionnelle."
        },
        {
          title: 'Concept Philosophique',
          content: "L'éthique du care : la moralité fondée sur les relations et la responsabilité envers ceux que l'on aime, même quand cela contredit la raison."
        }
      ],
      quote: {
        text: '"Ce monde est cruel... mais il est aussi très beau."',
        author: 'Mikasa Ackerman'
      }
    },
    
    // Slide 13: Armin Arlert
    {
      id: 'armin',
      type: 'character',
      theme: 'blue',
      category: 'PHILOSOPHIE DES PERSONNAGES',
      name: 'Armin Arlert',
      subtitle: 'Le Rêveur Idéaliste',
      sections: [
        {
          title: 'Philosophie',
          content: "Armin représente l'espoir dans la raison et le dialogue. Il croit en la possibilité de compréhension mutuelle, même face à l'horreur. Sa force réside dans son intellect et sa compassion."
        },
        {
          title: 'Concept Philosophique',
          content: "L'humanisme des Lumières : la foi en la raison humaine et le progrès moral malgré les ténèbres."
        }
      ],
      quote: {
        text: '"Un bon choix ou un mauvais choix... On ne peut le savoir qu\'après avoir pris cette décision et s\'être confronté au résultat."',
        author: 'Armin Arlert'
      }
    },
    
    // Slide 14: Erwin Smith
    {
      id: 'erwin',
      type: 'character',
      theme: 'blue',
      category: 'PHILOSOPHIE DES PERSONNAGES',
      name: 'Erwin Smith',
      subtitle: 'Le Stratège Sacrificiel',
      sections: [
        {
          title: 'Philosophie',
          content: "Erwin incarne le chef qui porte le poids des décisions impossibles. Il sacrifie des vies pour un idéal, conscient de la charge morale de ses choix."
        },
        {
          title: 'Concept Philosophique',
          content: "L'utilitarisme moral : sacrifier le peu pour sauver le plus grand nombre. Mais aussi le fardeau du leader qui doit vivre avec ces choix."
        }
      ],
      quote: {
        text: '"Mes soldats ne reculent pas ! Mes soldats avancent ! Dévouez vos cœurs !"',
        author: 'Erwin Smith'
      }
    },
    
    // Slide 15: Citations Philosophiques
    {
      id: 'citations',
      type: 'quotes-grid',
      theme: 'red',
      title: 'Citations Philosophiques',
      quotes: [
        {
          text: "Si tu gagnes, tu vis. Si tu perds, tu meurs. Si tu ne combats pas, tu ne peux pas gagner.",
          author: "Eren Yeager",
          description: "La nécessité de l'action face à l'adversité"
        },
        {
          text: "Je veux voir ce qu'il y a au-delà des murs. Ceux qui refusent d'agir mourront sans rien voir.",
          author: "Armin Arlert",
          description: "La quête de connaissance et de liberté"
        },
        {
          text: "Abandonnez vos rêves et mourrez. Menez les recrues directement en enfer. Je prendrai le Titan-Singe.",
          author: "Erwin Smith",
          description: "Le sacrifice pour un but plus grand"
        },
        {
          text: "Le monde est cruel, mais il est aussi très beau.",
          author: "Mikasa Ackerman",
          description: "L'acceptation de la dualité de l'existence"
        },
        {
          text: "Personne ne peut devenir quelqu'un de grand en restant dans son confort.",
          author: "Eren Yeager",
          description: "Le dépassement de soi"
        },
        {
          text: "Nous sommes tous libres. Ceux qui nient cela, peu importe leur force, n'ont aucune importance.",
          author: "Eren Yeager",
          description: "La liberté comme valeur absolue"
        }
      ]
    },
    
    // Slide 16: Parallèles avec Notre Monde
    {
      id: 'paralleles',
      type: 'parallels',
      theme: 'red',
      title: 'Parallèles avec Notre Monde',
      subtitle: "L'anime comme miroir de nos réalités socio-politiques",
      parallels: [
        {
          icon: 'globe',
          title: 'Impérialisme et Colonialisme',
          anime: "L'Empire Eldien oppressant le monde pendant 1800 ans",
          realWorld: "Les empires coloniaux européens et leurs conséquences historiques"
        },
        {
          icon: 'users',
          title: 'Propagande et Manipulation',
          anime: "Les mémoires effacées par le Roi Fritz",
          realWorld: "Le contrôle de l'information et la réécriture de l'histoire par les régimes totalitaires"
        },
        {
          icon: 'scale',
          title: 'Justice et Vengeance',
          anime: "Les Mahrs opprimant les Eldiens pour les crimes de leurs ancêtres",
          realWorld: "Les cycles de violence et de représailles dans les conflits géopolitiques"
        },
        {
          icon: 'alert',
          title: 'Dilemme du Tramway',
          anime: "Eren choisit de sacrifier le monde pour sauver Paradis",
          realWorld: "Les dilemmes moraux en temps de guerre : sacrifier quelques-uns pour sauver le plus grand nombre"
        }
      ],
      bottomQuote: "\"Attack on Titan nous force à confronter les questions les plus inconfortables sur la nature humaine, la justice, et le prix de la survie dans un monde moralement ambigu.\""
    },
    
    // Slide 17: Section - Partie IV
    {
      id: 'partie-4',
      type: 'section',
      theme: 'red',
      partNumber: 'Partie IV',
      title: 'Partie IV',
      subtitle: 'Réflexions et Débat'
    },
    
    // Slide 18: Questions
    {
      id: 'questions',
      type: 'content',
      theme: 'red',
      category: 'DÉBAT PHILOSOPHIQUE',
      title: 'Questions de Réflexion',
      content: {
        bulletPoints: [
          'La liberté justifie-t-elle tous les moyens pour l\'atteindre ?',
          'Peut-on briser le cycle de la violence sans violence ?',
          'L\'ignorance est-elle parfois préférable à la vérité ?',
          'Existe-t-il des guerres justes ?',
          'Comment définir le "monstre" dans un conflit où chaque camp a ses raisons ?'
        ]
      }
    },
    
    // Slide 17: Conclusion
    {
      id: 'conclusion',
      type: 'content',
      theme: 'red',
      category: 'CONCLUSION',
      title: 'Ce que nous enseigne Attack on Titan',
      content: {
        text: "L'Attaque des Titans nous confronte à l'inconfort de la complexité morale. Il n'y a pas de héros purs ni de méchants absolus, seulement des êtres humains pris dans les engrenages de l'Histoire.\n\nL'œuvre nous invite à questionner nos certitudes, à comprendre l'Autre avant de le juger, et à réfléchir au prix véritable de la liberté.",
        quote: {
          text: '"Si tu veux changer quelque chose, tu dois être prêt à tout perdre."',
          author: 'Armin Arlert'
        }
      }
    },
    
    // Slide 18: Merci
    {
      id: 'merci',
      type: 'section',
      theme: 'red',
      partNumber: 'Merci',
      title: 'Merci',
      subtitle: 'Questions et Discussion'
    }
  ]
}
