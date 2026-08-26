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
      subtitle: 'La caverne de Platon',
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
Moi c'est Thomas, je suis développeur informatique dans la vie, mais ici, je pratique la philosophe à l'école Nouvelle Acropole depuis 1 an et demi.

Et pour moi, Nouvelle Acropole, c'est une école qui met l'accent sur ce qui est vraiment important : "Avoir confiance en soi". Car lorsque l'on a confiance en soi, on reprend le chemin vers ses rêves et on accepte que la seule personne qui peut nous y emmener, c'est nous même.

C'est pour cela que ce soir, en ne me sentant absolument pas prêt pour cet exercice, je suis présent, et je remercie N.A. et tout ceux qui m'ont donné confiance pour me lancer dans le grand bain.

Il faut une première à tout : C'est ma première conférence.

### Bienvenue dans ce ciné-philo sur l'attaque des titans.
`,
    },

    // Slide 2: Synopsis
    {
      id: 'synopsis',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { category: 'INTRODUCTION', title: "L'Attaque des Titans" , subtitle : 'De quoi ça parle ? ', image: '/aot/wall.jpg' } },
        { type: 'video', step : 1, column: 'left', data: { video: { url: '/aot/video/s1e2_explication.mp4', title: 'S1E2 (Ep2) — L\'explication du monde', image: '/aot/attackontitanbg.jpg' } } },
        { type: 'video', step : 2, column: 'left', data: { video: { url: '/aot/video/EP1_00_00.mp4', title: 'S1E1 (Ep1) — Début de l\'anime', image: '/aot/wall_titan.png' } } },
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
      category: 'PLAN',
      title: "L'Attaque des Titans",
      subtitle: "",
      items: [
        { partNumber: 'I. SITUATION INITIALE', title: 'La Caverne de Platon', image: '/aot/wall.webp' },
        { partNumber: 'II. LE BATAILLON D\'EXPLORATION', title: "L\'Aventure de la conscience", image: '/aot/expo.jpg' },
      ],
      notes:`
L'attaque des titans est un animé qui en plus d'être brillament mis en scène, est remplis de messages philosophiques qui pourraient être survolés tant l'histoire est prenante.

Isayama, l'auteur du manga aborde des sujets complexes tel que la notion de liberté, les relations humaines et l'injustice.

J'ai décidé de vous parler ce soir de 4 thèmes qui m'ont particulièrement touchés dans cet anime : 
1. La situation initiale de l'anime, ayant oublié sa nature et vivant dans des murs, c'est la caverne de Platon.
2. Néanmoins, un petit groupe ose sortir des murs à la recherche de la vérité, et ce peux importe les risques car ils sont conscients que la vérité est plus important que leur propre vie : c'est le bataillon d'exploration, dont le symbole est les ailes de la liberté, et ça représente pour moi l'aventure de la conscience.
3. Enfin, nous terminerons sur la notion de choix : Faire des choix, dans l'attaque des titans, c'est une question de vie ou de mort. Mais ceux qui choisissent de mourir digne nous inspirent plus que ceux qui préfèrent le confort.

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
      audio: '/aot/aot_interlude.mp3',
      playOnce: true,
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
      ***Platon disait : 'Imaginez ...' ***

      Cette histoire de l'homme dans la caverne est une allégorie.
      **Une allégorie, c'est une manière d'exprimer quelque chose d'abstrait sous la forme d'une histoire.**

      **C'est ce que fait Platon, dans l'allégorie de la caverne,** où il explique que nous, les êtres humains, nous sommes ces hommes qui refusont de voir la réalité tel qu'elle est et préférons nous enchainer nous-même dans une caverne.
      Platon explique que nous nous enchainons nous-même par confort, par peur du rejet des autres, même si cela nous rend malheureux. 
      Le seul moyen de se libérer est de se défaire de ses chaines, de ses illusions et oser sortir de la caverne.

      **Dans le 1er épisode de la série, Isayama nous montre sa version de la caverne de Platon** : le peuple vit retranché à l'intérieur des murs. 
      Ce peuple devrait avoir envie de découvrir la vérité : Pourquoi y a t il des titans ? Quel est leur nature ? Pourquoi les livres d'histoires n'expliquent rien avant 100 ans ? 
      **C'est l'objectif principal d'un corps d'armée : Le bataillon d'exploration**, un groupe d'hommes et de femmes qui sortent des murs pour découvrir la vérité, au péril de leur vie.

      **Mais vous allez voir dans cette scène** où l'on voit le bataillon d'exploration rentrer après une expédition, que le peuple n'est plus en accord avec cette idée de découvrir la vérité : elle s'est confortée dans la caverne.
     
      **Vidéo**

      **En voyant cet extrait, on peut comprendre le peuple **: A quoi bon chercher la vérité si elle est tant difficile à atteindre, si elle coute la vie et l'argent du contribuable ?

      **Pourtant, à travers les yeux d'Eren, on se questionne** : La quête de la vérité n'est pas-elle supérieur à n'importe quelle bien matériel ?
      
      **En tant que spectateur, as-t-on envie de suivre le peuple et de rester enfermer dans les murs ?** Ou as-t-on envie de suivre Eren et le bataillon d'exploration, qui continuent de sortir des murs pour essayer de trouver des réponses ...
      
      **Dans l'anime, nous allons suivre Eren,** ce jeune idéaliste, qui va decider de rejoindre l'armée, après avoir vu sa mère se faire dévorer par un Titan.

      *Step 3 - Les 3 Corps d'armée*
      
      **Eren, ce jeune idéaliste va suivre une formation militaire, où on va lui présenter les 3 corps d'armée : **
      - La garnison, pour garder les murs de Titans qui n'attaquent pas, 
      - La brigade spéciale, pour les meilleurs qui auront la gloire, proche du pouvoir. 
      - Ou le bataillon d'exploration, avec ses ailes vertes de la liberté, pour sortir des murs à la recherche de la vérité.

      *Vidéo*

      **Isayama nous propose de choisir** : A leur place, choisirons nous le confort, la gloire ou la quête de la vérité.
      **Bon, on est d'accord**, à ce moment de l'anime, on a tous eu envie de choisir le bataillon d'exploration, et suivre notre soif d'aventure.

      **Mais dans notre vie, et moi le premier**, ma vie ressemble plutôt à celle de la Garnison et du confort, et un personnage est l'archétype de l'homme qui a choisi de rester dans la caverne plutôt que de suivre son Idéal.

      `,
      blocks: [
        { type: 'heading', data: { category: 'LES 3 MURS', title: 'La Caverne de Platon', image: '/aot/wall3.jpg' } },

        {
          type: 'quote',

          data: {
            text: "Imagine des hommes enchaînés dans une demeure souterraine, ne voyant que des ombres projetées sur le mur en face d'eux, et prenant ces ombres pour la réalité.",
            author: "Platon, La République, résumé du Livre VII"
          }
        },

        { type: 'video',step : 1, column: 'left', data: { video: { url: '/aot/video/S1E1_Retour_du_bataillon.mp4', title: 'S1E1 (Ep1) - Eren au retour du bataillon d\'exploration' } } },
         
        {
          type: 'image',
          step: 2,
          column: 'left',
          data: {
            src: '/aot/corpsarmee.webp',
            alt: 'Les trois corps d\'armée'
          }
        },
        {
          type: 'video',
          step: 3,
          column: 'left',
          data: {

              video : {url: '/aot/video/S1E4_Trois_Corps_Armee.mp4', title: 'S1E4 (Ep4) - Fin de la sélection, 3 corps d\'armée' }

          }
        },
      ]
    },

 // Slide 6: Hannes
    {
      id: 'hannes',
      type: 'content',
      theme: 'orange',
      blocks: [
        { type: 'heading', data: { category: 'l\'homme de la caverne', title: 'Hannes', subtitle: 'Capitaine de la Garnison dédié à la protection du Mur', image: '/aot/hannes.jpg' } },
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
          type: 'video',
          step: 3,
          column: 'left',
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
      backgroundImage: '/aot/expo.jpg',
      audio: '/aot/aot_interlude.mp3',
      playOnce: true,
    },

    // Slide 8: Le Bataillon d'Exploration
    {
      id: 'bataillon',
      type: 'content',
      theme: 'green',
      blocks: [
        { type: 'heading', data: { category: 'LES AILES DE LA LIBERTÉ', title: "Le Bataillon d'Exploration", subtitle: "L'appel de l'âme", image : '/aot/bataillon.jpg' } },
        { type: 'video', column: 'left',  data: { video: { url: '/aot/video/s1e16_integration_bataillon.mp4', title: 'S1E16 — Les recrues choisissent leur corps d\'armée' } } },
        {
          type: 'quote',
          step: 1,
          column : 'left',
          data: {
            text: "‟ C'est dans l'épreuve que l'idéaliste se révèle. ”",
            author: 'Jean, Connie et Sasha nous inspirent par cet acte qui ne s\'explique pas ...'
          }
        },
         {
          type: 'quote',
          step: 2,
          column : 'left',
          data: {
            text: "‟Celui qui a un pourquoi, [...] peut vivre avec n'importe quel comment.”",
            author: 'Nietzsche'
          }
        },
      ],
      notes : `
**Pour comprendre ce qu'est le bataillon d'exploration **, il faut comprendre qu'est-ce-qui motive ces gens à choisir le risque plutôt que la gloire ou le confort,

**Dans cet extrait, c'est la fin de la sélection des jeunes recrues**, et le Major Smith, vient de présenter le bataillon d'exploration : une unité à la recherche de la vérité, mais où 50% des jeunes meurent la 1ère année, et 80% meurent sous 3 ans.
Alors je vous laisse observer le combat intérieur qu'il se passe dans certaines recrues, qui font face à leur instincts qui leur disent de fuir et à quelque chose d'autre, innomable, qui leur disent de rester.

**Vidéo**

Pour moi cette scène est assez extraordinaire, car elle montre des personnes qui ne comprennent pas eux-même pourquoi ils restent. 
On voit les trois personnages qui se parlent à eux-même en se disant qu'ils doivent partir, qu'ils seraient heureux dans un autre corps d'armée.
Pourtant, leur corps ne bouge pas... 

**NEXT - ‟ C'est dans l'épreuve que l'idéaliste se révèle ”**

Ce qui est intéréssant de remarquer ici, c'est nous, spectateur.
Face à ce choix incohérent de la part de Sasha, Connie et Jean, qui choisissent envers leur raison de s'engager dans le bataillon d'exploration,
nous, spectateur, que ressentons-nous ? 

De l'incompréhension ou de l'admiration ? 

Je crois que si vous sommes admiratif de ces personnes dans cette scène, c'est qu'une partie de nous est idéaliste.
Une partie de nous refuse le monde dans lequel nous vivons, et veut tout mettre en place pour créer un monde meilleur.


**NEXT - ‟ Celui qui a un pourquoi ”**

Aujourd'hui, je pense qu'on peut être d'accord pour dire qu'on a les comments pour résoudre pas mal de nos problèmes sur Terre.

Pourtant, on continue de chercher d'autres moyens pour faire plus.

Cette scène nous montre qu'il y a une question, qui ne s'explique pas, qui doit provenir de notre intériorité, mais qui est essentielle :

"Pourquoi on vit ? Pourquoi on meurt ?" Car on va tous mourir, ça c'est certain.
Et c'est la où la philosophie est intéréssante, car là où l'intellect peut répondre à des problèmes logiques, la philosophie essaie de répondre à des problèmes de sens.

**Les questions existentielles,  c'est cela auquel nous confronte le bataillon d'exploration. ** C'est oser reprendre le chemin de ses rêves et mourir pour cela.
Peu importe les circonstances et les difficultés.
Et il y a un personnage qui incarne parfaitement cet état d'esprit : Vivre et mourir pour un idéal.
      `
    },

    // Slide 9: Erwin Smith
    {
      id: 'erwin-philosophie',
      type: 'content',
      theme: 'green',
      blocks: [
        { type: 'heading', data: { image : '/aot/erwin.jpg',category: 'L\'aventure de la conscience', title: 'Erwin Smith', subtitle: 'Commandant du bataillon d\'exploration •  Le Stoïcien' } },
           {
          type: 'quote',
          step : 1,
          column: 'left',
          data: {
            author: 'Marc Aurèle, Pensées pour moi-même, Livre II, §11',
            text: '"Songe que tu pourrais à l\'instant quitter la vie. Agis, parle, pense en conséquence."',
          }
        },
        { type: 'video', step : 1, column: 'left', data: { video: { url: '/aot/video/erwin_speech.mp4', title: 'S3E16 (Ep53) — Erwin face à la mort',  volume: 0.5 } } },

        {
          type: 'quote',
          step: 2,
          column : 'left',
          data: {
            text: '"Votre séjour en ce monde a-t-il été vide de sens ? [...] C\'est à nous les vivants de reprendre leur flambeau !"',
            author: 'Erwin Smith — La charge vers le Titan Bestial (S3 E16, Ep53)'
          }
        },
      ],
notes: `
Erwin Smith, c'est le commandant du bataillon d'exploration. C'est aussi le stoïcien incarné de cette série.
Le stoïcisme est un courant philosophique grec qui apprend à se détacher des circonstances et des instincts pour se concentrer sur l'essentiel, devenir soi-même et acteur de sa vie.

** Songe que tu pourrais ... **

Pour faire le bon choix, le choix juste, Marc Aurèle nous propose de penser à notre mort. Si l'on devait mourir à l'instant, quelle serait notre dernière action ?

On avance de quelques saisons dans l'anime, Le bataillon d'exploration, suite à maintes et maintes petites victoires, est maintenant à une dernière épreuve de découvrir enfin la vérité.
C'est le rêve du bataillon, et c'est le rêve d'Erwin.
Mais la situation est désespérée, dans tout les cas, la mort semble être certaine.
Alors que va faire Erwin dans cette situation ? 
Que ferions-nous dans cette situation désespérée ? 


** Vidéo ** 

***Ca va ? Moi non...***

Si vous avez dans un sens, compris pourquoi les soldats vont mourir intentionnellement, vous avez ressentis quelque chose d'important :
Il y a des choses qui ne doivent pas s'intellectualiser ni faire sens.

La loyauté, l'honneur, le courage, la justice sont des choses qui ne peuvent pas s'intellectualiser. 

Par exemple, avec le courage : Alors si tu as peur, et que tout tes sens te disent que tu vas mourir, il faut que tu y ailles, ça va te rendre heureux !
Ce sont des choses qui ne s'intellectualisent pas mais se vivent.


** Votre séjour en ce monde a-t-il été vide de sens ?... **

C'est à ce moment là que les soldats chargent.

** C'est à nous les vivants de reprendre leur flambeau ! **

**Il nous donne une responsabilité :** "Si les actes, les enseignements d'une personne a vraiment compté pour moi, appris quelque chose, vraiment inspiré, et m'a un peu sorti du chaos, alors il devient de ma responsabilité de vivre et transmettre cet enseignement ."


C'est pour moi l'un des **objectifs des écoles de philosophies à Nouvelle Acropole**, et c'est la raison principale qui fait que je suis ici, ce soir.

Parce que j'avais perdu le sens de ma vie dans le confort et que j'ai reçu un enseignement qui m'a donné des clés pour m'en sortir.
Parce que cette école n'apprend pas des compétences, elle apprend des valeurs : Le courage, l'honneur, La responsabilité.

Et je pense que c'est de ces valeurs que l'on a besoin pour changer le monde. En commençant par soi.

`,
    },

    // Slide 15: Conclusion
    {
      id: 'Partie 3',
      type: 'content',
      theme: 'blue',
      blocks: [
        { type: 'heading', data: { category: 'Conclusion', title: 'Et nous ?', subtitle: '', image: '/aot/wall.webp' } },
        { step: 1, type: 'quote', data: { text: "‟ Nous portons sur notre dos les ‟Ailes de la liberté‟. Avec notre détermination gravée dans notre cœur nous tranchons le cercle de la folie‟ ", author: 'Paroles - Générique Saison 2', image: { src: '/aot/expo.jpg', alt: 'Hannes', size: 240 } } },
        { type: 'video', step : 3, column: 'left', data: { video: { url: '/aot/video/opening2.mp4', title: 'Opening Saison 2' } } },

      ],
      notes:`
Pour conclure, 
      `
    }
  ]
}
