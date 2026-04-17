import { Presentation } from './types'

export const attackOnTitanPresentation: Presentation = {
  id: 'attack-on-titan',
  title: "L'Attaque des Titans",
  author: "Ciné Philo",
  description: "Liberté, conscience et choix",
  coverImage: '/aot/attackontitanbg.jpg',
  createdAt: '2026-01-28',
  category: 'cine-philo',
  slides: [
    // Slide 1: Title
    {
      id: 'title',
      type: 'title',
      theme: 'red',
      category: 'CINÉ PHILO',
      title: "L'Attaque des Titans ",
      subtitle: 'Liberté et aventure de la conscience (Saison 1 et 2)',
      description: "Une exploration philosophique du chef d'œuvre d'Hajime Isayama",
      backgroundImage: '/aot/attackontitanbg.jpg',
      notes: `
Bonjour à tous,
Merci d'être présent ce soir pour ce ciné-philo sur l'attaque des Titans, qui est un manga japonais qui personnellement, m'a profondément touché tant il dépeint des personnages humains et profond, et des sociétés, politiques et religions qui est frappante tant elle ressemble à nos sociétés.

Pour ceux qui n'ont jamais vu de manga, on pourrait s'attendre à quelque chose d'enfantin et fantastique, dénué de messages et seulement là le divertisssement.
Si on lit le synopsis d'ailleurs, 
* " Témoin du massacre de sa ville natale, le jeune Eren Yeager décide de prendre sa revanche et de tuer les géants qui menacent d'exterminer l'humanité. " *
je comprend que l'on ait du mal à entrevoir quelconque finesse ou message.

Et je vous propose donc de vous laisser surprendre...

### Pourquoi un ciné-philo ?
Je suis un amateur de cinéma comme beaucoup d'entre nous ce soir, et c'est pour moi un art qui permet de vivre et de partager une expérience commune, sans mentalliser, le vécu est direct. Et la philosophie est ce qui permet de comprendre un vécu, et d'en tirer des apprentissages.

Encore faut-il que l'oeuvre ait un message philosophique et ne soit pas seulement un oeuvre commerciale pour divertir.

Dans l'Attaque des Titans, j'ai été touché par la profondeur des personnages et de l'histoire ; qui m'a transporté dans une vrai aventure, celle où on oublie tout le reste.
Ensuite, est venue la philosophie qui m'a permis de mettre des mots sur ce que j'avais vécu.


Ce ciné-philo a pour objectif de faire le pont entre mes deux vécu : le premier visionnage, qui comme pour certains vont découvir l'oeuvre à travers les extraits,
et mon second visionnage où j'ai essayé de comprendre à l'aide de la philosophie, ce qui m'avait touché la première fois.


### Avant d'aller plus loin ...
Je m'appelle Thomas,
J'ai 29 ans, je suis développeur informatique dans la vie, mais ici, je fais partie de l'école de philosophie Nouvelle Acropole.

Et pour moi, Nouvelle Acropole, c'est une école qui met l'accent sur ce qui est vraiment important : "Avoir confiance en soi". Car lorsque l'on a confiance en soi, on reprend le chemin vers ses rêves et on accepte que la seule personne qui peut nous y emmener, c'est nous même.

C'est pour cela que ce soir, en ne me sentant absolument pas prêt pour cet exercice, je suis présent, et je remercie N.A. et tout ceux qui m'ont donné confiance pour me lancer dans le grand bain.

### Bienvenue dans ce ciné-philo sur l'attaque des titans.
`,
    },

    // Slide 2: Synopsis
    {
      id: 'synopsis',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { category: 'SYNOPSIS', title: "L'Attaque des Titans" , subtitle : 'L\'humanité ignorante, enfermée derrière trois murs.', image: '/aot/wall.jpg' } },
        { type: 'video', column: 'left', data: { video: { url: '/aot/video/s1e2_explication.mp4', title: 'S1E2 (Ep2) — L\'explication du monde' } } },

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

        { type: 'video', step : 2, column: 'right', data: { video: { url: '/aot/video/EP1_00_00.mp4', title: 'S1E1 (Ep1) — Début de l\'anime' } } },
       {
          type: 'bullets',
          column: "right",
           step : 2,
          data: {
            items: [
              'La paix est sur le point d\'être brisée ...',
            ]
          }
        },
      ],
      notes: `
L'attaque des Titans, dépeint une humanité qui a oublié d'où elle venait. Une histoire commune est néanmoins partagée : "Il y a 100 ans, sont apparus les titans, géants mangeurs d'humain. L'humanité a construit des murs dans lesquels ils se sont réfugiés."
Voilà l'explication qu'on reçu tout les habitants.
### Vidéo S1E2
- En résumé, les habitants ont oubliés leur propre histoire ;
- ils vivent dans un semblant de paix, assuré par le secret, la peur et l'ordre ;
- La plupart acceptent cette vie et font mine d'ignorer le problème, pourtant bien visible;
Pourtant, l'histoire comporte des trous : 
Que s'est-il passé avant ces 100 ans, comment sont apparus les titans, comment assiégés par des titans on peut construire des murs de plusieurs centaines de mètre de hauts, ...
Toutes ces questions, on a pas vraiment le temps de se les poser, nous spectateurs, car l'anime commence par la fin du semblant de paix qui régnait entre les murs...
### Vidéo S1E1

La prémière scène de l'attaque des titans annonce la fin de la paix. 
Les titans sont revenus, et les murs sont sur le points d'être détruits.

      `,
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
        { partNumber: 'I. SITUATION INITIALE', title: 'La Caverne de Platon', image: '/aot/wall.webp' },
        { partNumber: 'II. LE BATAILLON D\'EXPLORATION', title: "L\'Aventure de la conscience", image: '/aot/expo.jpg' },
        { partNumber: 'III. PORTRAIT', title: 'Jean', image: '/aot/jean.jpg' },
        { partNumber: 'IV. UN ANIME A MESSAGE', title: "L'art du choix", image: '/aot/snkbg.webp' }
      ],
      notes:`
L'attaque des titans est un animé qui en plus d'être brillament mis en scène, est remplis de messages philosophiques qui pourraient être survolés tant l'histoire est prenante.

Isayama, l'auteur du manga aborde des sujets complexes tel que la notion de liberté, les relations humaines et l'injustice.

J'ai décidé de vous parler ce soir de 4 thèmes qui m'ont particulièrement touchés dans cet anime : 
1. La situation initiale de l'anime, ayant oublié sa nature et vivant dans des murs, c'est la caverne de Platon.
2. Néanmoins, un petit groupe ose sortir des murs à la recherche de la vérité, et ce peux importe les risques car ils sont conscients que la vérité est plus important que leur propre vie : c'est le bataillon d'exploration, dont le symbole est les ailes de la liberté, et ça représente pour moi l'aventure de la conscience.
3. Ensuite, j'aimerais présenter le personnage qui pour moi est le plus proche du philosophe : Jean, l'homme qui doute et dont ce doute le rend profondément humain.
4. Enfin, nous terminerons sur la notion de choix : Faire des choix, dans l'attaque des titans, c'est une question de vie ou de mort. Mais ceux qui choisissent de mourir digne nous inspirent plus que ceux qui préfèrent le confort.

Sans plus attendre, découvrons la manière dont Isayama, comme Platon à son époque, nous dépeint à travers une histoire la manière dont les hommes s'enchainent eux-mêmes et refusent de voir la vérité en face.


`
    },

    // Slide 4: Section - Partie I
    {
      id: 'partie-1',
      type: 'section',
      theme: 'red',
      partNumber: 'I',
      title: 'I. La caverne de Platon',
      subtitle: 'Les 3 murs ou la caverne de Platon',
      backgroundImage: '/aot/wall.webp',
      notes: `
Pause. Respire. Boit de l'eau.

`,
    },

   // Slide 5: La Caverne de Platon
    {
      id: 'caverne-platon',
      type: 'content',
      theme: 'red',
      notes: `
      *Platon disait : 'Imaginez ...' *

      Cette histoire de l'homme dans la caverne est une allégorie.
      Une allégorie, c'est une manière d'exprimer quelque chose d'abstrait sous la forme d'une histoire.

      C'est ce que fait Platon, dans l'allégorie de la caverne, où il explique que nous, les êtres humains, nous sommes ces hommes qui refusont de voir la réalité tel qu'elle est et préférons nous enchainer nous-même dans une caverne.
      Platon explique que nous nous enchainons nous-même par confort, par peur du rejet des autres, même si cela nous rend malheureux. 
      Le seul moyen de se libérer est de se défaire de ses chaines, de ses illusions et oser sortir de la caverne.

      Dans le 1er épisode de la série, Isayama nous montre pour moi sa version de la caverne de Platon : le peuple vit retranché à l'intérieur des murs. 
      Ce peuple devrait avoir envie de découvrir la vérité : Pourquoi y a t il des titans ? Quel est leur nature ? Pourquoi les livres d'histoires n'expliquent rien avant 100 ans ? 
      C'est d'ailleurs l'objectif principal d'un corps d'armée : Le bataillon d'exploration, un groupe d'hommes et de femmes qui sortent des murs pour découvrir la vérité, au péril de leur vie.

      Mais vous allez voir dans cette scène où l'on voit le bataillon d'exploration rentrer après une expédition, que le peuple n'est plus en accord avec cette idée de découvrir la vérité : elle s'est confortée dans la caverne.
     
      *Vidéo*

      En voyant cet extrait, on peut comprendre le peuple : A quoi bon chercher la vérité si elle est tant difficile à atteindre, si elle coute la vie et l'argent du contribuable ?

      Pourtant, à travers les yeux d'Eren, on se questionne : La quête de la vérité n'est pas-elle supérieur à n'importe quelle bien matériel ?
      
      En tant que spectateur, as-t-on envie de suivre le peuple et de rester enfermer dans les murs ? Ou as-t-on envie de suivre Eren et le bataillon d'exploration, qui continuent de sortir des murs pour essayer de trouver des réponses ...
      Dans l'anime, nous allons suivre Eren, ce jeune idéaliste, qui va decider de rejoindre l'armée, après avoir vu sa mère se faire dévorer par un Titan.

      *Step 3 - Les 3 Corps d'armée*
      
      Il va suivre une formation, où on va lui présenter les 3 corps d'armée : 
      - La garnison, pour garder les murs de Titans qui n'attaquent pas, 
      - La brigade spéciale, pour les meilleurs qui auront la gloire, proche du pouvoir. 
      - Ou le bataillon d'exploration, avec ses ailes vertes de la liberté, pour sortir des murs à la recherche de la vérité.

      *Vidéo*

      Isayama nous propose de choisir : A leur place, choisirons nous le confort, la gloire ou la quête de la vérité.
      Bon, on est d'accord, à ce moment de l'anime, on a tous eu envie de choisir le bataillon d'exploration, et suivre notre soif d'aventure.

      Mais dans notre vie, et moi le premier, ma vie ressemble plutôt à celle de la Garnison et du confort, et un personnage est l'archétype de l'homme qui a choisi de rester dans la caverne plutôt que de suivre son Idéal.

      `,
      blocks: [
        { type: 'heading', data: { category: 'LES 3 MURS', title: 'La Caverne de Platon', image: '/aot/wall3.jpg' } },

        {
          type: 'quote',

          data: {
            text: "« Imagine des hommes enchaînés dans une demeure souterraine, ne voyant que des ombres projetées sur le mur en face d'eux, et prenant ces ombres pour la réalité. »",
            author: "Platon, La République, Livre VII"
          }
        },

        { type: 'video',step : 1, column: 'left', data: { video: { url: '/aot/video/S1E1_Retour_du_bataillon.mp4', title: 'S1E1 (Ep1) - Eren au retour du bataillon d\'exploration' } } },
         {
          type: 'video',
          step: 3,
          column: 'right',
          data: {

              video : {url: '/aot/video/S1E4_Trois_Corps_Armee.mp4', title: 'S1E4 (Ep4) - Fin de la sélection, 3 corps d\'armée' }

          }
        },
        {
          type: 'image',
          step: 2,
          column: 'right',
          data: {
            src: '/aot/corpsarmee.webp',
            alt: 'Les trois corps d\'armée'
          }
        }
      ]
    },

 // Slide 6: Hannes
    {
      id: 'hannes',
      type: 'content',
      theme: 'orange',
      blocks: [
        { type: 'heading', data: { category: 'ARCHÉTYPE DU PEUPLE DE PARADIS', title: 'Hannes', subtitle: 'Capitaine de la Garnison - Protection du Mur', image: '/aot/hannes.jpg' } },
         {
          type: 'video',
          step: 1,
          column: 'left',
          data: {
             video : { url: '/aot/video/EP1_Hannes.mp4', title: 'S1E1 — Hannes : L`homme de la caverne' },
          }
        },
        {
          type: 'quote',
          step: 2,
          data: {
            text: '"Nous avons inventé le bonheur" — disent les derniers hommes, et ils clignent de l\'œil. Ils ont quitté les contrées où il était dur de vivre : car on a besoin de chaleur. [...] On travaille encore, car le travail est un divertissement. Mais on veille à ce que le divertissement ne fatigue point."',
            author: 'Friedrich Nietzsche — Ainsi parlait Zarathoustra, Prologue §5'
          }
        },
       
        {
          type: 'card',
          step: 3,
          column: 'left',
          data: {
            content: 'Isayama nous questionne : Est-ce que la vie d\'Hannes nous fait vibrer ?',
          }
        },
         {
          type: 'video',
          step: 4,
          column: 'right',
          data: { video: { url: '/aot/video/EP1_Hannes_Actes.mp4', title: 'S1E1 — Hannes : Paroles vs actions' } }
        },
      ],
          notes : `
Hannes, c'est le Capitaine de la Garnison, ce corps d'armée qui doit sécuriser les murs. Mais les murs n'ont pas été attaqués depuis 100ans. 
Alors Hannes, préfère le confort et le divertissement plutôt que de travailler pour sa vocation. 

**Vidéo Hannes, L'homme de la caverne**

J'ai choisi une citation de Nietzsche qui au 19ème sièce avait prédit l'homme moderne, sans but et sans valeurs. Il dit : 

" Nous avons inventé [...] "

Hannes est ce dernier homme comme dit Nietzsche, qui a inventé son bonheur dans le divertissement et le confort. 
C'est un personnage qui n'est pas inspirant, on a l'impression de tout savoir de lui : il a abandonné ses rêves, il vit sans ambition même si il à l'air gentil.

Eren à côté, alors que ce n'est qu'un enfant, est beaucoup plus inspirant par ses convictions fortes, il assume de tenir tête à des adultes et ça le rend intéréssant.

**NEXT : Isayama nous questionne ...**

Un travail confortable, en uniforme, agréable. Du temps avec les amis. Dans notre société, c'est synonyme de réussite de vie.
Pourtant, pourquoi est-ce que cela ne nous donne pas envie ?

Pour enfoncer le clou, Isayama nous montre ce que produit un homme qui refusé de devenir fort et s'est conformé à la vie paisible.
Dans cette scène, le mur vient d'être détruit, les titans attaquent les humains, et Hannes, protecteur du mur à l'opportunité de sauver la mère d'Eren.

**Vidéo**


Personnellement, j'ai cru aussi que le confort rendrait heureux. Mais il ne m'a rendu que plus mou et vide.
Je pense que l'on cherche l'aventure dans notre vie, et que c'est lorsque l'on ose que l'on peut véritablement se découvrir et être heureux.

Ca tombe bien, car nous allons suivre ceux qui osent chercher la vérité : Le bataillon d'exploration.
     `
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

    // Slide 8: Le Bataillon d'Exploration
    {
      id: 'bataillon',
      type: 'content',
      theme: 'green',
      blocks: [
        { type: 'heading', data: { category: 'LES AILES DE LA LIBERTÉ', title: "Le Bataillon d'Exploration", subtitle: "Confort ou Liberté — qu'est-ce qui compte vraiment ?", image : '/aot/bataillon.jpg' } },
        { type: 'video', column: 'left',  data: { video: { url: '/aot/video/s1e16_integration_bataillon.mp4', title: 'S1E16 — Les recrues choisissent leur corps d\'armée' } } },
        {
          type: 'icon-bullets',
          step : 1,
          data: {
            items: [
              { icon: 'compass', title: 'Quête de Vérité', content: 'Sortir des murs, c\'est choisir.' },
              { icon: 'heart', title: 'Le Prix de la Liberté', content: 'Les épreuves, la mort et le doute.' },
              { icon: 'flame', title: "l'éveil de la conscience", content: "Jean, Connie et Sasha se révèlent." }
            ]
          }
        },
         {
          type: 'quote',
          step: 2,
          column : 'right',
          data: {
            text: "\"Celui qui travaille pour sa seule vie ne construit rien. Mais celui qui travaille pour l'éternité, celui-là bâtit un empire [...].\"",
            author: 'Saint-Exupéry, Citadelle'
          }
        },
      ]
    },

    // Slide 9: Erwin Smith
    {
      id: 'erwin-philosophie',
      type: 'content',
      theme: 'green',
      notes: `# Erwin Smith — Le Stoïcien

## Contexte

Erwin est le commandant du bataillon d'exploration. Il incarne le **stoïcisme** face à la mort.

## Références philosophiques

- **Marc Aurèle** : Pensées pour moi-même
- Le concept de *memento mori* dans la philosophie stoïcienne
- La transcendance par le sacrifice

## À retenir

Le discours d'Erwin est l'un des moments les plus marquants de l'anime. Laisser la vidéo parler d'elle-même avant de commenter.`,
      blocks: [
        { type: 'heading', data: { image : '/aot/erwin.jpg',category: 'STOÏCISME ET TRANSCENDANCE', title: 'Erwin Smith', subtitle: 'Le Stoïcien • Le Chef qui transcende la mort' } },
           {
          type: 'quote',
          column: 'left',
          data: {
            author: 'Marc Aurèle, Pensées pour moi-même, Livre II, §11',
            text: '"Songe que tu pourrais à l\'instant quitter la vie. Agis, parle, pense en conséquence."',
          }
        },
                  { type: 'video', column: 'left', data: { video: { url: '/aot/video/erwin_speech.mp4', title: 'S3E16 (Ep53) — Erwin face à la mort' } } },

        {
          type: 'quote',
          step: 1,
          column : 'right',
          data: {
            text: '"Quels que soient vos rêves ou vos espoirs [...] , l\'homme ne peut échapper à la mort."',
            author: 'Erwin Smith — La charge vers le Titan Bestial (S3 E16, Ep53)'
          }
        },
        {
          type: 'bullets',
          step: 1,
          column : 'right',
          data: {
            items: [
              'Métitation stoïcienne sur la mort,',
              "L'idéal au dessus de sa propre vie"
            ]
          }
        },

      ]
    },

    // Slide 10: Section - Partie III (Jean)
    {
      id: 'partie-3-jean',
      type: 'section',
      theme: 'blue',
      partNumber: 'III',
      title: 'Partie III',
      subtitle: 'Portrait : Jean Kirschtein',
      backgroundImage: '/aot/jean.jpg'
    },

    // Slide 11: Jean — Le philosophe qui doute
    {
      id: 'jean-doute',
      type: 'content',
      theme: 'blue',
      blocks: [
        { type: 'heading', data: { category: 'PORTRAIT • LE PHILOSOPHE', title: 'Jean Kirschtein', subtitle: 'Celui qui doute, mais qui choisit et qui assume', image: '/aot/jean.jpg' } },
        { type: 'video', column: 'left', data: { video: { url: '/aot/video/s4e8_jean_sasha.mp4', title: 'S4E8 — Une guerre où des enfants tuent des hommes' } } },
        {
          type: 'bullets',
          column: 'left',
          data: {
            items: [
              'Il rêvait de tranquillité',
              'La mort de Marco → éveil de conscience',
              'La peur ne disparaît pas, mais il choisit quand même'
            ]
          }
        },
        {
          type: 'quote',
          step: 1,
          column: 'right',
          data: {
            text: '"Pour examiner la vérité, il est besoin, une fois en sa vie, de mettre toutes choses en doute autant qu\'on le peut."',
            author: 'Descartes, Méditations'
          }
        },
        {
          type: 'quote',
          step: 2,
          column: 'right',
          data: {
            text: '"L\'existence précède l\'essence […] l\'homme n\'est rien d\'autre que ce qu\'il se fait."',
            author: 'Sartre'
          }
        },
        {
          type: 'bullets',
          step: 2,
          column: 'right',
          data: {
            items: ['Jean ne naît pas héros, il le devient par ses choix']
          }
        },
      ]
    },

    // Slide 12: Jean — Le choix assumé
    {
      id: 'jean-assume',
      type: 'content',
      theme: 'blue',
      blocks: [
        { type: 'heading', data: { category: 'VERTU ET RESPONSABILITÉ', title: 'Jean Kirschtein', subtitle: "L'action comme réponse au doute", image: '/aot/jean.jpg' } },
        { type: 'section', data: { title: 'Le doute est le commencement de la sagesse' } },
        {
          type: 'quote',
          column: 'left',
          data: {
            text: '"C\'est en pratiquant les actions justes que nous devenons justes […] les actions courageuses que nous devenons courageux."',
            author: 'Aristote'
          }
        },
        {
          type: 'quote',
          step: 1,
          column: 'right',
          data: {
            text: '"Ou bien ou bien" : choisir c\'est renoncer et assumer.',
            author: 'Kierkegaard — Le saut dans le choix'
          }
        },
        {
          type: 'icon-bullets',
          step: 2,
          data: {
            items: [
              { icon: 'flame', title: 'Il doute', content: 'Comme Socrate, il remet en question' },
              { icon: 'compass', title: 'Il choisit', content: 'Malgré la peur, il agit' },
              { icon: 'heart', title: 'Il assume', content: 'La responsabilité comme chemin vers la vertu' }
            ]
          }
        },
      ]
    },

    // Slide 13: Section - Partie IV (Liberté)
    {
      id: 'partie-4-liberte',
      type: 'section',
      theme: 'orange',
      partNumber: 'IV',
      title: 'Partie IV',
      subtitle: "L'art du choix",
      backgroundImage: '/aot/snkbg.webp'
    },

    // Slide 14: Liberté du choix — Les trois chemins
    {
      id: 'liberte-choix',
      type: 'content',
      theme: 'orange',
      blocks: [
        { type: 'heading', data: { category: 'LA PHILOSOPHIE EST UN CHOIX', title: "L'art du choix", subtitle: 'Hannes • Jean • Eren', image: '/aot/snkbg.webp' } },
        {
          type: 'quote',
          data: {
            text: '"L\'homme est condamné à être libre."',
            author: 'Sartre'
          }
        },
        { type: 'video', step: 1, column: 'left', data: { video: { url: '/aot/video/EP1_Hannes.mp4', title: 'Hannes : le confort comme prison' } } },
        { type: 'section', step: 1, column: 'left', data: { title: 'Hannes — Dominé par son confort' } },
        { type: 'video', step: 2, column: 'left', data: { video: { url: '/aot/video/s4e8_jean_sasha.mp4', title: 'Jean : l\'action malgré le doute' } } },
        { type: 'section', step: 2, column: 'left', data: { title: 'Jean — La vertu par le choix' } },
        { type: 'video', step: 3, column: 'right', data: { video: { url: '/aot/video/e87_eren_grand_terassement.mp4', title: 'S4 — Eren : quand la liberté devient tyrannie' } } },
        { type: 'section', step: 3, column: 'right', data: { title: 'Eren — Dominé par sa colère' } },
        {
          type: 'bullets',
          step: 4,
          column: 'right',
          data: {
            items: ['Veut-on choisir d\'être comme Hannes, Jean, ou Eren ?']
          }
        },
      ]
    },

    // Slide 15: Conclusion
    {
      id: 'conclusion',
      type: 'content',
      theme: 'blue',
      blocks: [
        { type: 'heading', data: { category: 'CONCLUSION', title: 'La Philosophie est un choix', subtitle: 'Trois chemins, une liberté', image: '/aot/bataillon.jpg' } },
        { step: 1, type: 'quote', data: { text: "« L'homme qui s'adonne à ses plaisirs devient moins libre... »", author: 'Spinoza', image: { src: '/aot/hannes.jpg', alt: 'Hannes', size: 80 } } },
        { step: 2, type: 'quote', data: { text: '"C\'est en pratiquant les actions justes que nous devenons justes, les actions courageuses que nous devenons courageux."', author: 'Aristote', image: { src: '/aot/jean.jpg', alt: 'Jean', size: 80 } } },
        { step: 3, type: 'quote', data: { text: '"Deviens ce que tu es."', author: 'Nietzsche', image: { src: '/aot/eren.jpeg', alt: 'Eren', size: 80 } } }
      ]
    }
  ]
}
