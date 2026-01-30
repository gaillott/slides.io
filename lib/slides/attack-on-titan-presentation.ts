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
    // Slide 4 
    {
      id: 'video-erwin',
      type: 'video',
      theme: 'red',
      title: "EP01 : Situation initiale",
      videoUrl: '/aot/video/EP1_00_00.mp4',
      placeholder: "Situation initiale",
      description: "Situation initiale",
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
        src: '/aot/eldia.webp',
        alt: 'Cimetière symbolisant les morts'
      },
      cards : [{
        title: "L'illusion du sentiment de sécurité",
        content: "",
        highlight: 'Fausse sécurité - Illusion - Séparativisme',
        subtext: "Face à l'actualité et le contexte écologique, nous préférérons vivre heureux, loin des problèmes. Tant que le problème est à un continent près, une frontière près, une ville près, nous ne nous sentons pas concernés. Pourtant, cela ne veut pas dire que la menace est fausse."
      }]
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
      bulletPointsTitle: 'La Philosophie du Troupeau',
      bulletPoints: [
        'Acceptation passive de la situation',
        'Méfiance envers ceux qui remettent en question l\'ordre établi',
        'Préférence pour le confort immédiat sur la vérité'
      ]
    },
    
    // Slide 6: La Caverne de Platon
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

    
    
    // Slide 9: Extrait Vidéo
    {
      id: 'video-erwin',
      type: 'video',
      theme: 'red',
      title: 'Présentation du bataillon d\'exploration',
      videoUrl: '/aot/video/erwin_speech.mp4',
      placeholder: "Le discours d'Erwin avant la charge finale",
      description: "Le discours d'Erwin Smith avant la charge contre le Titan Singe",
      quote: {
        text: '"Si on abandonne, on ne gagne rien. Si on résiste, on peut perdre... Mais si on ne résiste pas, on est sûr de perdre !"',
        author: 'Erwin Smith'
      }
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

     // Slide 9: Extrait Vidéo
    {
      id: 'video-erwin',
      type: 'video',
      theme: 'red',
      title: 'Episode 16 Saison 3 (53) - Speech Erwin',
      videoUrl: '/aot/video/erwin_speech.mp4',
      placeholder: "Le discours d'Erwin avant la charge finale",
      description: "Le discours d'Erwin Smith avant la charge contre le Titan Singe",
      quote: {
        text: '"Votre séjour en ce monde as-t-il été vide de sens ? [...] A nous d\'empêcher qu\'ils soient morts en vain."',
        author: 'Erwin Smith'
      }
    },

    // Slide: Erwin Smith - Analyse Philosophique
    {
      id: 'erwin-philosophie',
      type: 'character',
      theme: 'green',
      category: 'STOÏCISME ET TRANSCENDANCE',
      name: 'Erwin Smith',
      subtitle: 'Le Stoïcien • Le Chef qui transcende la mort',
      sections: [
        {
          title: 'Le Stoïcisme de Marc Aurèle',
          content: "Erwin incarne parfaitement l'idéal stoïcien : accepter ce qui ne dépend pas de nous (la mort, les circonstances) tout en agissant avec excellence sur ce qui dépend de nous (nos choix, notre courage). Face à la mort certaine, il avance sans se laisser abattre. Comme Marc Aurèle l'écrivait, il ne philosophe pas sur ce que doit être un homme de bien — il l'est."
        },
        {
          title: "L'Idéal plus grand que l'Homme",
          content: "Erwin ne motive pas ses troupes par la peur ou l'obéissance, mais en leur donnant une raison de transcender leur condition mortelle. Il leur offre l'éternité à travers le sens : leurs sacrifices contribuent à quelque chose qui les dépasse infiniment."
        }
      ],
      cards: [
        {
          title: 'Marc Aurèle - Pensées pour moi-même',
          content: '"La mort sourit à tous les hommes. Tout ce qu\'un homme peut faire, c\'est lui sourire en retour."',
          highlight: 'lui sourire en retour',
          subtext: 'Erwin charge vers le Titan Singe avec ce sourire. Il a accepté sa mort et transforme cette acceptation en force.'
        },
        {
          title: 'Saint-Exupéry - Citadelle',
          content: '"Celui qui travaille pour sa seule vie ne construit rien. Mais celui qui travaille pour l\'éternité, celui-là bâtit un empire que la mort elle-même ne peut détruire."',
          highlight: 'travaille pour l\'éternité',
          subtext: 'Erwin donne à ses soldats non pas des ordres, mais un rêve : découvrir la vérité sur ce monde. Il fait naître en eux le désir de la mer.'
        }
      ],
      quote: {
        text: '"Mes soldats ne reculent pas ! Mes soldats avancent ! Mes soldats hurlent ! Mes soldats se battent !"',
        author: 'Erwin Smith — La charge finale'
      },
      bulletPointsTitle: 'Les Vertus Stoïciennes d\'Erwin',
      bulletPoints: [
        'Acceptation stoïcienne : Il sait que 90% de ses hommes mourront, lui y compris',
        'Amor fati : Il aime son destin au lieu de le subir',
        'Transcendance : Le sens de la mission dépasse la survie individuelle',
        'Leadership par l\'exemple : Il charge en premier, bras arraché'
      ]
    },

    // Slide 10: Section - Partie III
    {
      id: 'partie-3',
      type: 'section',
      theme: 'blue',
      partNumber: 'III',
      title: 'Partie III',
      subtitle: 'Livai, Armin, Jean : Combat intérieur',
      backgroundImage: '/aot/armin.jpg'
    },
  

    
    // Slide: Introduction Bhagavad Gîta
    {
      id: 'bhagavad-gita-intro',
      type: 'content',
      theme: 'blue',
      category: 'LA BHAGAVAD GÎTA',
      title: 'Le Combat Intérieur',
      subtitle: 'Quand le devoir s\'oppose au cœur',
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

    // Slide: Livai Ackerman
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
          content: "Livai a dû tuer ses propres camarades transformés en Titans. Il a tranché la nuque de ceux avec qui il avait combattu, ri, pleuré. Comme Arjuna face à ses cousins, il accomplit son devoir le cœur en lambeaux."
        },
        {
          title: 'Le Choix Impossible',
          content: "Erwin ou Armin ? Livai doit choisir qui sauver avec l'unique sérum. Ce n'est pas un choix tactique — c'est un choix qui le détruit intérieurement. Il choisit de laisser Erwin mourir en paix plutôt que de le ramener dans cet enfer."
        }
      ],
      cards: [
        {
          title: 'Bhagavad Gîta — Le Détachement',
          content: '"Tu as droit à l\'action, mais jamais à ses fruits. Que le fruit de l\'action ne soit jamais ton mobile."',
          highlight: 'jamais à ses fruits',
          subtext: 'Livai agit parce qu\'il le doit, sans espoir de récompense. Chaque victoire lui coûte quelqu\'un qu\'il aimait.'
        }
      ],
      quote: {
        text: '"Fais un choix. Et crois en lui. Ou crois en tes camarades. Je ne sais pas... Je n\'ai jamais su."',
        author: 'Livai Ackerman'
      },
      bulletPointsTitle: 'Le Poids du Survivant',
      bulletPoints: [
        'A perdu son escouade originelle face au Titan Féminin',
        'A tué Zeke par devoir, pas par vengeance personnelle',
        'Incarne le guerrier stoïque qui souffre en silence'
      ]
    },

    // Slide: Armin Arlert
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
          content: "Armin rêvait de voir la mer, pas de la remplir de cadavres. Héritier du Titan Colossal, le garçon qui croyait au dialogue est devenu celui qui rase des ports entiers. Chaque transformation le rapproche de ce qu'il haïssait."
        },
        {
          title: 'Le Fardeau d\'Être Choisi',
          content: "Pourquoi lui et pas Erwin ? Cette question le hante. Il doit prouver que le sacrifice d'Erwin n'était pas vain — mais comment un idéaliste peut-il justifier d'être devenu une bombe nucléaire vivante ?"
        }
      ],
      cards: [
        {
          title: 'Bhagavad Gîta — L\'Action Juste',
          content: '"Mieux vaut accomplir imparfaitement son propre dharma que parfaitement celui d\'autrui."',
          highlight: 'son propre dharma',
          subtext: 'Armin n\'a pas choisi d\'être le Colossal. Mais il doit accomplir ce rôle, même s\'il le déteste, car c\'est désormais son dharma.'
        }
      ],
      quote: {
        text: '"Quelqu\'un qui ne peut rien sacrifier ne peut rien changer."',
        author: 'Armin Arlert'
      },
      bulletPointsTitle: 'La Tragédie du Rêveur',
      bulletPoints: [
        'De stratège pacifiste à arme de guerre ultime',
        'Porte le poids d\'avoir été choisi à la place d\'Erwin',
        'Son idéalisme survit malgré les horreurs qu\'il commet'
      ]
    },

    // Slide: Jean Kirschtein
    {
      id: 'jean',
      type: 'character',
      theme: 'blue',
      category: 'LE COMBAT INTÉRIEUR • BHAGAVAD GÎTA',
      name: 'Jean Kirschtein',
      subtitle: 'L\'Homme Ordinaire face à l\'Extraordinaire',
      sections: [
        {
          title: 'Le Héros Malgré Lui',
          content: "Jean voulait une vie tranquille dans les Brigades Spéciales. Il n'a jamais demandé à être un héros. Mais la mort de Marco l'a transformé. Il est devenu leader non par ambition, mais par nécessité — le plus humain des parcours."
        },
        {
          title: 'Tuer l\'Ennemi... Humain',
          content: "Jean est le premier à hésiter quand il faut tuer des humains et non des Titans. Cette hésitation, ce tremblement de la main, c'est Arjuna sur le champ de Kurukshetra. Il finit par tirer — et une part de lui meurt à chaque fois."
        }
      ],
      cards: [
        {
          title: 'Bhagavad Gîta — Le Guerrier Réticent',
          content: '"Il vaut mieux mourir en accomplissant son propre dharma ; le dharma d\'autrui est plein de danger."',
          highlight: 'plein de danger',
          subtext: 'Jean n\'est pas né guerrier. Mais la guerre l\'a trouvé. Il assume un dharma qui n\'était pas le sien, et c\'est ce qui le rend si humain.'
        }
      ],
      quote: {
        text: '"Je ne veux pas mourir... mais je ne veux pas non plus vivre en ayant laissé mes camarades mourir seuls."',
        author: 'Jean Kirschtein'
      },
      bulletPointsTitle: 'L\'Évolution de l\'Homme Ordinaire',
      bulletPoints: [
        'De lâche assumé à leader respecté',
        'Représente le spectateur : que ferions-nous à sa place ?',
        'Son humanité est sa force et sa faiblesse'
      ]
    },
    
   
    // Slide 17: Section - Partie IV
    {
      id: 'partie-4',
      type: 'section',
      theme: 'red',
      partNumber: 'IV',
      title: 'Partie IV',
      subtitle: 'Gaby : Absurdité de la guerre',
      backgroundImage: '/aot/gaby.jpg'
    },
    
    // Slide: Gaby Braun
    {
      id: 'gaby',
      type: 'character',
      theme: 'red',
      category: 'LE CYCLE DE LA HAINE',
      name: 'Gaby Braun',
      subtitle: 'Le Miroir d\'Eren • La Déconstruction',
      sections: [
        {
          title: 'Produit de la Propagande',
          content: "Gaby est l'incarnation parfaite de ce que la propagande peut créer : une enfant-soldat convaincue d'être un \"bon Eldien\", prête à tout pour prouver sa valeur à ses oppresseurs. Elle a intériorisé la haine de son propre peuple — un fascisme retourné contre soi."
        },
        {
          title: 'Le Reflet d\'Eren',
          content: "Gaby est Eren de l'autre côté de la mer. Même rage, même détermination aveugle, même certitude d'être du côté du bien. Isayama nous montre que la haine n'a pas de camp : elle se reproduit identiquement des deux côtés du conflit."
        }
      ],
      cards: [
        {
          title: 'La Maïeutique de Kaya',
          content: 'Kaya, dont la mère a été dévorée par un Titan, confronte Gaby avec une question socratique : "Qu\'est-ce que ma mère avait fait de mal ?" Cette question simple fait s\'effondrer l\'édifice de certitudes de Gaby.',
          highlight: 'Qu\'est-ce que ma mère avait fait de mal ?',
          subtext: 'Socrate utilisait la maïeutique pour faire "accoucher" les esprits de la vérité. Kaya, sans le savoir, devient la sage-femme de la conscience de Gaby.'
        },
        {
          title: 'Le Père de Sasha',
          content: '"Il vaut mieux subir l\'injustice que de la commettre." En refusant de tuer Gaby pour venger sa fille, M. Braus brise le cycle. Il choisit de ne pas créer une nouvelle Gaby de l\'autre côté.',
          highlight: 'Subir plutôt que commettre',
          subtext: 'Citation de Socrate dans le Gorgias. Le père de Sasha incarne cette sagesse antique : la vengeance corrompt celui qui l\'exerce.'
        }
      ],
      quote: {
        text: '"Ces gens... ne sont pas des démons..."',
        author: 'Gaby Braun — Sa prise de conscience'
      },
      bulletPointsTitle: 'Les Étapes de la Déconstruction',
      bulletPoints: [
        'Confrontation : Les échanges avec Kaya révèlent l\'absurdité de la haine héritée',
        'Observation : Les "démons" de Paradis vivent, aiment, souffrent comme elle',
        'Rupture : La scène du père de Sasha — le pardon là où la vengeance semblait évidente',
        'Transformation : De soldat fanatique à témoin de l\'humanité partagée'
      ]
    },

    // Slide: Vidéo Gaby
    {
      id: 'video-gaby',
      type: 'video',
      theme: 'red',
      title: 'La Déconstruction de Gaby',
      videoUrl: '/aot/video/gaby.mp4',
      placeholder: "Le voyage initiatique de Gaby sur l'île de Paradis",
      description: "De la haine aveugle à la compréhension — le parcours de Gaby",
      quote: {
        text: '"Il vaut mieux subir l\'injustice que de la commettre."',
        author: 'Socrate (Gorgias) — incarné par le père de Sasha'
      }
    },

      // Slide 10: Section - Partie III
    {
      id: 'partie-5',
      type: 'section',
      theme: 'blue',
      partNumber: 'V',
      title: 'Partie V',
      subtitle: 'Isayama : Mise en garde',
      backgroundImage: '/aot/putin.jpg'
    },
      // Slide 11: Extrait Vidéo
    {
      id: 'video-mywar',
      type: 'video',
      theme: 'blue',
      title: 'Générique : Saison finale',
      videoUrl: '/aot/video/mywar.mp4',
      placeholder: "Le discours d'Erwin avant la charge finale",
      description: "Le discours d'Erwin Smith avant la charge contre le Titan Singe",
      quote: {
        text: '"L\'escalade de la violence..."',
        author: 'Unknown'
      }
    },

    // Slide 22: Mise en garde d'Isayama
    {
      id: 'mise-en-garde',
      type: 'parallels',
      theme: 'red',
      title: 'Mise en Garde d\'Isayama',
      subtitle: "Les dérives de la mémoire et l'absurdité de la guerre",
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

    // Slide 23: Conclusion - La Liberté
    {
      id: 'conclusion',
      type: 'character',
      theme: 'blue',
      category: 'CONCLUSION',
      name: 'Qu\'est-ce que la Liberté ?',
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
