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

    // Slide 2: Synopsis
    {
      id: 'synopsis',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { category: 'SYNOPSIS', title: "L'Attaque des Titans" , subtitle : 'Une oeuvre profondément philosophique', image: '/aot/wall.jpg' } },
        {
          type: 'text',
          step : 1,
          data: {
            highlightedText: 'L\'humanité est enfermée derrière trois murs immenses.',
            content: "Depuis plus d'un siècle, les derniers humains vivent retranchés, protégés de créatures géantes — les Titans — qui dévorent les hommes sans raison apparente. Personne ne sait ce qu'il y a au-delà."
          }
        },
       
         {
          type: 'bullets',
          column: "left",
           step : 1,
          data: {
            items: [
              'Les habitants ignorent tout du monde extérieur',
              'Le gouvernement maintient l\'ordre par le secret et la peur',
              'La plupart acceptent cette vie, préférant le confort à la vérité'
            ]
          }
        },
        { type: 'videos', step : 1, column: 'left', data: { items: [{ url: '/aot/video/EP1_00_00.mp4', title: 'S01E01 — A toi qui vis 2000 ans plus tard' }] } },
        {
          type: 'card',
          step: 2,
          column: 'right',
          data: {
            title: 'Eren, une aventure philosophique',
            content: "Derrière l'action, Isayama interroge nos choix de vie et notre idéal.",
          }
        },
      ]
    },

    // Slide 3: Plan
    {
      id: 'introduction',
      type: 'plan',
      theme: 'red',
      category: 'PLAN DE LA PRÉSENTATION',
      title: "L'Attaque des Titans",
      subtitle: "Une exploration philosophique de l'œuvre d'Hajime Isayama",
      items: [
        { partNumber: 'PARTIE I', title: 'Paradis : La Caverne de Platon', image: '/aot/wall.webp' },
        { partNumber: 'PARTIE II', title: "Bataillon d'exploration : Aventure de la conscience", image: '/aot/expo.jpg' },
        { partNumber: 'PARTIE III', title: 'Portrait : Eren, Jean', image: '/aot/jean.jpg' },
        { partNumber: 'PARTIE IV', title: 'Gaby : Absurdité de la guerre', image: '/aot/mywar.jpg' },
        { partNumber: 'PARTIE V', title: "Les Leçons d'Isayama", image: '/aot/putin.jpg' }
      ]
    },

    // Slide 4: Section - Partie I
    {
      id: 'partie-1',
      type: 'section',
      theme: 'red',
      partNumber: 'I',
      title: 'Partie I',
      subtitle: 'Paradis : la Caverne de Platon',
      backgroundImage: '/aot/wall.webp'
    },

    // Slide 5: Hannes
    {
      id: 'hannes',
      type: 'content',
      theme: 'orange',
      blocks: [
        { type: 'heading', data: { category: 'ARCHÉTYPE DU PEUPLE DE PARADIS', title: 'Hannes', subtitle: 'Capitaine de la Garnison - Protection du Mur Maria', image: '/aot/hannes.jpg' } },
        {
          type: 'quote',
          step: 1,
          data: {
            text: '"Nous avons inventé le bonheur" — disent les derniers hommes, et ils clignent de l\'œil. Ils ont quitté les contrées où il était dur de vivre : car on a besoin de chaleur. [...] On travaille encore, car le travail est un divertissement. Mais on veille à ce que le divertissement ne fatigue point."',
            author: 'Friedrich Nietzsche — Ainsi parlait Zarathoustra, Prologue §5'
          }
        },
        {
          type: 'videos',
          step: 1,
          column: 'left',
          data: {
            items: [
              { url: '/aot/video/EP1_Hannes.mp4', title: 'S1E1 — Hannes ivre, insouciant' },
            ]
          }
        },
        {
          type: 'card',
          step: 2,
          column: 'right',
          data: {
            title: 'Isayama nous questionne',
            content: 'Hannes, une image de l\'homme moderne ?',
          }
        },
         {
          type: 'videos',
          step: 2,
          column: 'right',
          data: {
            items: [
              { url: '/aot/video/EP1_Hannes_Actes.mp4', title: 'S1E2 — Hannes paralysé devant le Titan Souriant' }
            ]
          }
        },
      ]
    },

    // Slide 6: La Caverne de Platon
    {
      id: 'caverne-platon',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { category: 'ALLÉGORIE PHILOSOPHIQUE', title: 'La Caverne de Platon', image: '/aot/wall3.jpg' } },
        {
          type: 'quote',
          data: {
            text: "Est-on vraiment libre, si on est enchaîné par des chaînes que l'on ne voit plus ?"
          }
        },
        {
          type: 'text',
          data: {
            highlightedText: "Le peuple de Paradis ne connaît que les ombres projetées sur les murs.",
            content: " Les trois enceintes ne sont pas seulement des remparts contre les Titans — ce sont les parois d'une prison mentale. Leur mémoire a été effacée. Ils ne savent même pas qu'ils sont prisonniers."
          }
        },
        { type: 'videos', column: 'right', data: { items: [{ url: '/aot/video/caverne_verite.mp4', title: 'S3E20 (Ep57) — Révélation du sous-sol' }] } },
        {
          type: 'icon-bullets',
          step: 1,
          column: 'right',
          data: {
            items: [
              { icon: 'scale', title: 'Brigades Spéciales', content: 'Protègent le Roi et l\'ordre établi — gardiens de la caverne' },
              { icon: 'users', title: 'Garnison', content: 'Défendent les murs — maintiennent le statu quo' },
              { icon: 'compass', title: 'Bataillon d\'exploration', content: 'Les seuls qui sortent des murs — chercheurs de vérité' }
            ]
          }
        },
        {
          type: 'image',
          step: 1,
          column: 'right',
          data: {
            src: '/aot/corpsarmee.webp',
            alt: 'Les trois corps d\'armée'
          }
        },
         {
          type: 'card',
          step: 2,
           column: 'right',
          data: {
            title: 'Et nous ?',
            content: '',
            highlight: ''
          }
        },
      ]
    },

    // Slide 7: Section - Partie II
    {
      id: 'partie-2',
      type: 'section',
      theme: 'green',
      partNumber: 'II',
      title: 'Partie II',
      subtitle: 'Bataillon d\'exploration : Aventure de la conscience',
      backgroundImage: '/aot/expo.jpg'
    },

    // Slide 8: Le Bataillon d'Exploration (was two-column)
    {
      id: 'bataillon',
      type: 'content',
      theme: 'green',
      blocks: [
        { type: 'heading', data: { category: 'LES AILES DE LA LIBERTÉ', title: "Le Bataillon d'Exploration", subtitle: "Confort ou Liberté — qu'est-ce qui compte vraiment ?" } },
        {
          type: 'icon-bullets',
          data: {
            items: [
              { icon: 'compass', title: 'Quête de Vérité', content: 'Sortir des murs, c\'est choisir la connaissance sur l\'ignorance confortable.' },
              { icon: 'heart', title: 'Le Prix de la Liberté', content: 'Les épreuves et le confort sont le prix de la liberté.' },
              { icon: 'flame', title: "l'éveil de la conscience", content: "Jean, Connie et Sasha se révèlent en choisissant une cause supérieur à leur égo." }
            ]
          }
        },
        { type: 'videos', column: 'right', data: { items: [{ url: '/aot/video/s1e16_integration_bataillon.mp4', title: 'S1E16 — Intégration du bataillon' }] } },
        {
          type: 'cards',
          column: 'right',
          data: {
            items: [
              {
                title: 'Le Miroir de Notre Société',
                content: "Préférons-nous la sécurité de nos murs modernes — écrans, confort, consommation — à l'incertitude de la quête de sens ? Le Bataillon refuse la normalisation de l'oppression. Chaque expédition est un acte philosophique : choisir la liberté sur le confort.",
                highlight: 'Préférons-nous'
              },
              {
                title: 'Le choix de la Philosophie',
                content: "La philosophie, comme le Bataillon, nous demande de sortir de notre zone de confort pour affronter la vérité — même quand elle dérange.",
                subtext: "\"Celui qui travaille pour sa seule vie ne construit rien. Mais celui qui travaille pour l'éternité, celui-là bâtit un empire [...].\" — Saint-Exupéry, Citadelle"
              }
            ]
          }
        }
      ]
    },

    // Slide 9: Erwin Smith
    {
      id: 'erwin-philosophie',
      type: 'content',
      theme: 'green',
      blocks: [
        { type: 'heading', data: { category: 'STOÏCISME ET TRANSCENDANCE', title: 'Erwin Smith', subtitle: 'Le Stoïcien • Le Chef qui transcende la mort' } },
        { type: 'section', data: { title: 'Le Stoïcisme Incarné', content: "Erwin accepte ce qui ne dépend pas de lui (la mort) et agit avec excellence sur ce qui en dépend (ses choix). Il ne philosophe pas sur ce que doit être un homme de bien — il l'est." } },
        {
          type: 'quote',
          step: 1,
          data: {
            text: '"Quels que soient vos rêves ou vos espoirs [...] , l\'homme ne peut échapper à la mort."',
            author: 'Erwin Smith — La charge vers le Titan Bestial (S3 E16, Ep53)'
          }
        },
        {
          type: 'bullets',
          step: 1,
          data: {
            items: [
              'Métitation stoïcienne sur la mort,',
              "L'idéal au dessus de sa propre vie"
            ]
          }
        },
        { type: 'videos', step: 2, column: 'right', data: { items: [{ url: '/aot/video/erwin_speech.mp4', title: 'S3E16 (Ep53) — La charge d\'Erwin' }] } },
        {
          type: 'card',
          step: 2,
          column: 'right',
          data: {
            title: 'Marc Aurèle',
            content: '"Songe que tu pourrais à l\'instant quitter la vie. Agis, parle, pense en conséquence."',
            highlight: 'Agir en conséquence',
            subtext: 'Pensées pour moi-même, Livre II, §11'
          }
        }
      ]
    },

    // Slide 10: Section - Partie III
    {
      id: 'partie-3',
      type: 'section',
      theme: 'blue',
      partNumber: 'III',
      title: 'Partie III',
      subtitle: 'Portrait : Eren, Jean',
      backgroundImage: '/aot/jean.jpg'
    },

    // Slide 11: Bhagavad Gîta — Eren
    {
      id: 'bhagavad-gita-intro',
      type: 'content',
      theme: 'blue',
      blocks: [
        { type: 'heading', data: { category: 'PORTRAIT • LA BHAGAVAD GÎTA', title: 'Eren : Combat Intérieur', subtitle: 'Quand l\'homme tombe à genoux' } },
        {
          type: 'text',
          data: {
            highlightedText: 'Dans la Bhagavad Gîta, Arjuna doit lancer le combat.',
            content: " En voyant dans le camp ennemi ses amis et sa famille, il refuse de combattre et s'effondre."
          }
        },
        {
          type: 'quote',
          data: {
            text: '"Mon arc glisse de mes mains, ma peau brûle, je ne peux plus tenir debout, mon esprit vacille..."',
            author: 'Arjuna — Bhagavad Gîta, Chant I'
          }
        },
        { type: 'videos', column: 'right', data: { items: [{ url: '/aot/video/s2e12_eren_combat_interieur.mp4', title: 'S2E12 (Ep37) — Eren à genoux, impuissant' }] } },
        {
          type: 'cards',
          column: 'right',
          data: {
            items: [
              {
                title: 'Krishna à Arjuna',
                content: '"Tu t\'apitoies là où il ne faut pas. Les sages ne pleurent ni les vivants ni les morts. Lève-toi, fils de Kuntî, et combats."',
                highlight: 'Lève-toi et combats',
                subtext: 'Bhagavad Gîta, Chant II, v.11 & v.37'
              },
              {
                title: 'Un combat à l\'intérieur en nous',
                content: 'Nos défauts, nos défaites, nos mauvais désirs nous hantent. Ils nous attaquent pour nous empêcher de faire notre devoir.',
                highlight: 'Conscience vs  Personnalité'
              }
            ]
          }
        }
      ]
    },

    // Slide 12: Jean Kirschtein
    {
      id: 'jean',
      type: 'content',
      theme: 'blue',
      blocks: [
        { type: 'heading', data: { category: 'PORTRAIT • L\'HUMANITÉ', title: 'Jean Kirschtein', subtitle: 'L\'Homme Ordinaire qui agit extraordinairement' } },
        {
          type: 'section',
          data: {
            title: 'L\'éveil de la conscience',
            content: "Jean rêvait des Brigades Spéciales : une vie tranquille à l'intérieur des murs. Il n'a aucun idéal, aucune rage, aucun pouvoir spécial. Quand Marco meurt, il ne se transforme pas en héros — il se retrouve simplement seul avec sa conscience. Et il choisit de ne pas fuir."
          }
        },
        {
          type: 'section',
          step: 1,
          data: {
            title: 'Le meilleur de l\'humanité',
            content: "Jean est tiraillé en permanence. Il a peur, il doute, il voudrait fuir. Mais à chaque croisement, il choisit d'écouter sa conscience plutôt que sa peur. Il ne tue pas Gaby — celle qui a tué Sasha — parce que ce ne serait pas juste. Jean représente ce que l'on peut faire de mieux en tant qu'humain : agir bien, avec nos doutes et nos faiblesses."
          }
        },
        { type: 'videos', column: 'right', data: { items: [{ url: '/aot/video/s4e8_jean_sasha.mp4', title: 'S4E8 — Mort de Sasha' }] } },
        {
          type: 'card',
          step: 1,
          column: 'right',
          data: {
            title: 'Aristote — Éthique à Nicomaque',
            content: '"C\'est en pratiquant les actions justes que nous devenons justes, les actions tempérantes que nous devenons tempérants, les actions courageuses que nous devenons courageux."',
            highlight: 'Devenir juste en agissant justement',
            subtext: 'Livre II, chap. 1 — On ne naît pas bon. On le devient par ses actes.'
          }
        }
      ]
    },

    // Slide 13: Section - Partie IV
    {
      id: 'partie-4',
      type: 'section',
      theme: 'red',
      partNumber: 'IV',
      title: 'Partie IV',
      subtitle: 'Gaby : Absurdité de la guerre',
      backgroundImage: '/aot/gaby.jpg'
    },

    // Slide 14: Gaby — Produit de la Propagande
    {
      id: 'gaby-propagande',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { category: 'LE CYCLE DE LA HAINE', title: 'Gaby Braun', subtitle: 'Produit de la Propagande • Vision Binaire' } },
        { type: 'section', data: { title: 'Produit de la Propagande', content: "Gaby est ce que la propagande peut créer : une enfant-soldat convaincue d'être un \"bon Eldien\", prête à tout pour prouver sa valeur à ses oppresseurs. Elle a intériorisé la haine de son propre peuple." } },
        {
          type: 'quote',
          step: 1,
          data: {
            text: '"Je vais tous les tuer ! Ces démons de Paradis !"',
            author: 'Gaby Braun — Avant sa déconstruction'
          }
        },
        {
          type: 'bullets',
          step: 1,
          data: {
            items: [
              'Vision binaire du monde héritée de la propagande',
              'Début du voyage initiatique de la conscience'
            ]
          }
        },
        {
          type: 'videos',
          column: 'right',
          data: {
            items: [
              { url: '/aot/video/s4e2_gaby_tranchee.mp4', title: 'S4E1 (Ep60) — Fort Slava' },
              { url: '/aot/video/s4e11_gaby_dogme.mp4', title: 'S4E10 (Ep70) — Gaby Dogme' }
            ]
          }
        },
        {
          type: 'card',
          step: 1,
          column: 'right',
          data: {
            title: 'Le Miroir d\'Eren',
            content: 'Gaby est Eren de l\'autre côté de la mer. Même rage, même certitude d\'être du côté du bien. La haine se reproduit identiquement des deux côtés.',
            highlight: 'Le miroir d\'Eren',
            subtext: 'Début du voyage initiatique : la confrontation avec l\'Autre va briser ses certitudes.'
          }
        }
      ]
    },

    // Slide 15: Gaby — Déconstruite
    {
      id: 'gaby-deconstruite',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { category: 'LA MAÏEUTIQUE', title: 'Gaby Braun', subtitle: 'La Déconstruction • La Maïeutique de Kaya' } },
        { type: 'section', data: { title: 'La Maïeutique de Kaya', content: "\"Qu'est-ce que ma mère avait fait de mal ?\" — Cette question simple fait s'effondrer tout l'édifice. Socrate utilisait la maïeutique pour \"accoucher\" les esprits de la vérité. Kaya, sans le savoir, devient la sage-femme de la conscience de Gaby." } },
        {
          type: 'bullets',
          step: 1,
          data: {
            items: [
              'De la certitude au doute : le premier pas vers la sagesse',
              'Sortir de la caverne est difficile et long...'
            ]
          }
        },
        {
          type: 'videos',
          column: 'right',
          data: {
            items: [
              { url: '/aot/video/s4e11_gaby_kaya_socrate.mp4', title: 'S4E11 (Ep70) — Kaya confronte Gaby' },
              { url: '/aot/video/s4e12_peresasha.mp4', title: 'S4E12 (Ep71) — Le père de Sasha brise le cercle' },
              { url: '/aot/video/e77_gaby_sagesse.mp4', title: 'S4E18 (Ep77) — Gaby prise de conscience' }
            ]
          }
        },
        {
          type: 'card',
          step: 1,
          column: 'right',
          data: {
            title: 'La Prise de Conscience',
            content: 'Les "démons" de Paradis vivent, aiment, souffrent comme elle. La réalité est plus complexe que la propagande.',
            highlight: 'Ces gens... ne sont pas des démons',
            subtext: 'La déconstruction de Gaby est un chemin philosophique : du dogme à la pensée libre.'
          }
        }
      ]
    },

    // Slide 16: Section - Partie V
    {
      id: 'partie-5',
      type: 'section',
      theme: 'blue',
      partNumber: 'V',
      title: 'Partie V',
      subtitle: "Les Leçons d'Isayama",
      backgroundImage: '/aot/putin.jpg'
    },

    // Slide 17: Les Leçons d'Isayama (was parallels)
    {
      id: 'lecons-isayama',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { title: "Les Leçons d'Isayama", subtitle: "Ce que l'Attaque des Titans nous enseigne" } },
        {
          type: 'videos',
          data: {
            items: [
              { url: '/aot/video/mywar.mp4', title: 'Générique saison finale — My War' },
              { url: '/aot/video/e87_eren_grand_terassement.mp4', title: 'S4E28 (Ep87) - Grand Terassement' }
            ]
          }
        },
        {
          type: 'parallels',
          data: {
            items: [
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
          }
        }
      ]
    },

    // Slide 18: Conclusion
    {
      id: 'conclusion',
      type: 'content',
      theme: 'blue',
      blocks: [
        { type: 'heading', data: { category: 'CONCLUSION', title: 'Qu\'est-ce que la Liberté ?', subtitle: 'Trois visions, trois chemins' } },
        { type: 'section', data: { title: 'La Liberté selon Spinoza', content: "\"L'homme qui s'adonne à ses plaisirs devient moins libre que celui qui s'en restreint.\" La vraie liberté n'est pas l'absence de contraintes, mais la maîtrise de soi. Hannes, Eren et le Bataillon incarnent trois rapports différents à cette liberté." } },
        {
          type: 'section',
          step: 1,
          data: {
            title: 'Ce que nous enseigne AoT',
            content: "Ce que peut faire de mieux un arbre, c'est grandir et se développer. Ce que peut faire de mieux un homme, c'est suivre sa conscience — même quand le monde entier lui dit qu'il a tort."
          }
        },
        {
          type: 'cards',
          step: 1,
          column: 'right',
          data: {
            items: [
              { title: 'Hannes — La Non-Action', content: 'On est libre de ne pas agir, de choisir le confort de l\'ignorance. Mais cette liberté-là est une prison dorée.' },
              { title: 'Se Responsabiliser — Grandir et Agir', content: 'On est libre de se transformer intérieurement et d\'agir pour le monde extérieur — en même temps. Le développement personnel sans action est stérile. L\'action sans travail intérieur reproduit les mêmes erreurs.' },
              { title: 'Le Bataillon — L\'Idéal', content: 'On est libre de choisir un idéal plus grand que soi et de se battre pour lui. C\'est le bataillon d\'exploration; C\'est le père de Sasha; C\'est L\'humanité de Jean.' }
            ]
          }
        },
        {
          type: 'quote',
          step: 2,
          data: {
            text: '"Une excellente manière de te défendre d\'eux, c\'est d\'éviter de leur ressembler."',
            author: 'Marc Aurèle, Pensées pour moi-même'
          }
        }
      ]
    }
  ]
}
