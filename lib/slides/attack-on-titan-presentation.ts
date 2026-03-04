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
      title: "L'Attaque des Titans",
      subtitle: 'Liberté, conscience et absurdité de la guerre',
      description: "Une exploration philosophique du chef d'œuvre d'Hajime Isayama",
      backgroundImage: '/aot/attackontitanbg.jpg',
      notes: `# Introduction

Bienvenue dans cette présentation **Ciné Philo** sur l'Attaque des Titans.

- Présenter le concept de Ciné Philo
- Expliquer pourquoi cette œuvre est pertinente pour la philosophie
- Mentionner les thèmes clés : **liberté**, **conscience**, **guerre**

*Laisser le temps aux participants de s'installer avant de commencer.*`,
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
        { partNumber: 'PARTIE I', title: 'La Caverne de Platon', image: '/aot/wall.webp' },
        { partNumber: 'PARTIE II', title: "L\'Aventure de la conscience", image: '/aot/expo.jpg' },
        { partNumber: 'PARTIE III', title: 'Portrait : Jean', image: '/aot/jean.jpg' },
        { partNumber: 'PARTIE IV', title: "Liberté du choix", image: '/aot/snkbg.webp' }
      ]
    },

    // Slide 4: Section - Partie I
    {
      id: 'partie-1',
      type: 'section',
      theme: 'red',
      partNumber: 'I',
      title: 'Partie I',
      subtitle: 'Les 3 murs : la Caverne de Platon',
      backgroundImage: '/aot/wall.webp',
      notes: `# La Caverne de Platon

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Points clés à aborder

- **L'allégorie de la caverne** : les prisonniers enchaînés ne voient que des ombres
- Les murs dans l'anime représentent les limites de la connaissance
- Faire le parallèle entre les habitants de Paradis et les prisonniers de Platon

## Transition

*Demander au public : "Quelles sont nos propres cavernes ?"*`,
    },

   // Slide 5: La Caverne de Platon
    {
      id: 'caverne-platon',
      type: 'content',
      theme: 'red',
      notes: `
      *Platon disait : 'Imaginez ...' *

      Pour Platon, nous vivons dans une caverne et nous prenons les murs pour la réalité.
      Le seul moyen de se libérer est de se défaire de ses chaines, de ses illusions et oser sortir de la caverne.
      Nos chaines sont le confort, la peur et les habitudes.

      Dans le 1er episode, Isayama met en scène la caverne de Platon en nous lorsque le bataillon d'exploration, ce corps d'armée qui sors des murs pour découvrir la vérité,
      rentre après une expédition hors des murs.

      D'un côté, le peuple de la caverne de Platon, qui ne comprend plus ce bataillon et pourquoi ils sortent des murs.
      De l'autre, Eren, et l'innocence et la fougue de l'enfant qui voit dans le bataillon le symbole de la liberté.

      *Vidéo*

      D'un point de vue matériel, il n'y a rien à gagner.
      Gouffre économique, les enfants vont mourir au combat.

      Mais à travers les yeux d'Eren, on se questionne : La quête de la vérité n'est pas-elle supérieur à n'importe quelle bien matériel ?

      *Step 3 - Les 3 Corps d'armée*

      Plus tard, Eren s'engage dans l'armée et arrive le moment où lui est présenté les 3 corps d'armée : La garnison, pour garder les murs de Titans qui n'attaquent pas, La brigade spéciale, pour les meilleurs qui auront la gloire, proche du pouvoir. Ou le bataillon d'exploration, avec ses ailes vertes de la liberté, pour sortir des murs à la recherche de la vérité.

      *Vidéo*

      Isayama nous propose de choisir : A leur place, choisirons nous le confort, la gloire ou la quête de la vérité.
      Personnellement, Il n'y a pas photo ...

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
          type: 'video',
          step: 1,
          column: 'left',
          data: {
             video : { url: '/aot/video/EP1_Hannes.mp4', title: 'S1E1 — Hannes : Le dernier homme de Nietzsche' },
          }
        },
        {
          type: 'card',
          step: 2,
          column: 'right',
          data: {
            content: 'Hannes : à l\'image de l\'homme moderne ?',
          }
        },
         {
          type: 'video',
          step: 2,
          column: 'right',
          data: { video: { url: '/aot/video/EP1_Hannes_Actes.mp4', title: 'S1E1 — Hannes : Paroles vs actions' } }
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
      subtitle: 'Liberté du choix',
      backgroundImage: '/aot/snkbg.webp'
    },

    // Slide 14: Liberté du choix — Les trois chemins
    {
      id: 'liberte-choix',
      type: 'content',
      theme: 'orange',
      blocks: [
        { type: 'heading', data: { category: 'LA PHILOSOPHIE EST UN CHOIX', title: 'Liberté du choix', subtitle: 'Hannes • Jean • Eren', image: '/aot/snkbg.webp' } },
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
