import { Presentation } from './types'

export const attackOnTitanPresentation: Presentation = {
  id: 'attack-on-titan',
  title: "Ciné Philo - L'Attaque des Titans",
  author: "Ciné Philo",
  description: "Liberté, conscience et absurdité de la guerre",
  coverImage: '/aot/attackontitanbg.jpg',
  createdAt: '2026-01-28',
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
        { partNumber: 'PARTIE III', title: 'Portraits (Eren, Jean)', image: '/aot/jean.jpg' },
        { partNumber: 'PARTIE IV', title: 'L\'Absurdité de la guerre', image: '/aot/mywar.jpg' },
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

   // Slide 5: La Caverne de Platon
    {
      id: 'caverne-platon',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { category: 'ALLÉGORIE PHILOSOPHIQUE', title: 'La Caverne de Platon', image: '/aot/wall3.jpg' } },
        {
          type: 'quote',

          data: {
            text: "« Imagine des hommes enchaînés dans une demeure souterraine, ne voyant que des ombres projetées sur le mur en face d'eux, et prenant ces ombres pour la réalité. »",
            author: "Platon, La République, Livre VII"
          }
        },
        
        { type: 'video',column: 'left', data: { video: { url: '/aot/video/S1E1_Retour_du_bataillon.mp4', title: 'S1E1 (Ep1) - Eren au retour du bataillon d\'exploration' } } },
         {
          type: 'video',
          step: 2,
          column: 'right',
          data: {
            
              video : {url: '/aot/video/S1E4_Trois_Corps_Armee.mp4', title: 'S1E4 (Ep4) - Fin de la sélection, 3 corps d\'armée' }
            
          }
        },
        {
          type: 'bullets',
          column: "left",
          step :1,
          data: {
            items: [
              'Le bataillon représente les prisonniers qui sortent de la caverne',
              'les habitants de Paradis préfèrent l\'ignorance confortable',
            ]
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
        },
        {
          type: 'bullets',
          column: "right",
          step :2,
          data: {
            items: [
              'A nous de choisir : Confort, Gloire ou Vérité ?',
            ]
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

    // Slide 8: Le Bataillon d'Exploration (was two-column)
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
        { type: 'heading', data: { image:'/aot/eren.jpeg',category: 'PORTRAIT • COMBAT INTERIEUR', title: 'Eren Jäger', subtitle: 'Quand l\'homme tombe à genoux' } },
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
        { type: 'video', column: 'left', data: { video: { url: '/aot/video/s2e12_eren_combat_interieur.mp4', title: 'S2E12 (Ep37) — Eren et Mikasa, la Bhagavad Gîta' } } },
         {
          type: 'quote',
           step : 1,
          column: 'right',
          data: {
            text: '"Tu t\'apitoies là où il ne faut pas. Les sages ne pleurent ni les vivants ni les morts. Lève-toi, fils de Kuntî, et combats."',
            author: 'Krishna à Arjuna,  Bhagavad Gîta, Chant II, v.11 & v.37'
          }
        },
        {
          type: 'bullets',
          step: 1,
          column : 'right',
          data: {
            items: [
              'Qu\'est ce qui a changé chez Eren ?',
            ]
          }
        },
      ]
    },

    // Slide 12: Jean Kirschtein
    {
      id: 'jean',
      type: 'content',
      theme: 'blue',
      blocks: [
        { type: 'heading', data: {image:'/aot/jean.jpg', category: 'PORTRAIT • L\'HUMANITÉ', title: 'Jean Kirschtein', subtitle: 'L\'Homme Ordinaire qui agit extraordinairement' } },
                { type: 'video', column: 'left', data: { video: { url: '/aot/video/s4e8_jean_sasha.mp4', title: 'S4E8 — Une guerre où des enfants tuent des hommes' } } },
{
          type: 'bullets',
          column : 'left',
          data: {
            items: [
              'Il rêvait de la tranquilité',
              "La mort de Marco et l\'éveil de sa conscience",
              'Celui qui écoute sa conscience plutôt que sa peur'
            ]
          }
        },
        {
          type: 'section',
          step: 1,
          column : 'right',
          data: {
            title: 'Le meilleur de l\'humanité',
          }
        },
        {
          type: 'quote',
          step: 1,
          column: 'right',
          data: {
            author: 'Aristote — Éthique à Nicomaque',
            text: '"C\'est en pratiquant les actions justes que nous devenons justes, les actions tempérantes que nous devenons tempérants, les actions courageuses que nous devenons courageux."',
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
        { type: 'heading', data: { category: 'LE CYCLE DE LA HAINE', title: 'Gaby Braun',image: '/aot/gaby.jpg', subtitle: 'Produit de la Propagande • Vision Binaire' } },
        {
          type: 'video',
          column: 'left',
          data: {
            video: 
              { url: '/aot/video/s4e2_gaby_tranchee.mp4', title: 'S4E1 (Ep60) — Gaby l\'enfant soldat' },
            
          }
        },
        {
          type: 'quote',
          step : 1,
          data: {
            text: '"Eradiquer tous ces maudits démons insulaires à cause de qui nous souffrons !"',
            author: 'Gaby Braun — Avant sa déconstruction'
          }
        },
          {
          type: 'bullets',
           column: 'left',
          step: 2,
          data: {
            items: [
              'Début du voyage initiatique de la conscience'
            ]
          }
        },
        {
          type: 'video',
          step : 2,
          column: 'left',
          data: { video: { url: '/aot/video/s4e11_gaby_dogme.mp4', title: 'S4E10 (Ep70) — Gaby sur l\'île des démons insulaires' } }
        },
        {
          type: 'quote',
          step : 3,
           column : 'right',
          data: {
            text: '"Dure époque que celle où il est plus simple de désagréger un atome qu\'un préjugé."',
            author: 'Einstein'
          }
        },
         {
          type: 'bullets',
          step: 3,
          column : 'right',
          data: {
            items: [
              'un miroir d\'Eren',
            ]
          }
        },
        
      ]
    },

    // Slide 15: Gaby — Déconstruite
    {
      id: 'gaby-deconstruite',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { category: 'LA MAÏEUTIQUE', title: 'Gaby Braun', image : '/aot/kaya.jpg', subtitle: 'Le parcours initiatique • La Maïeutique de Kaya' } },
        { type: 'section', data: { title: 'La Maïeutique de Kaya', content: "\"Qu'est-ce que ma mère avait fait de mal ?\" — Cette question simple fait s'effondrer tout l'édifice. Socrate utilisait la maïeutique pour \"accoucher\" les esprits de la vérité. Kaya, sans le savoir, devient la sage-femme de la conscience de Gaby." } },
       {
          type: 'video',
          column: 'left',
          data: {
            video: 
              { url: '/aot/video/s4e11_gaby_kaya_socrate.mp4', title: 'S4E11 (Ep70) — Kaya confronte Gaby' },
            
          }
        }, {
          type: 'bullets',
          step: 1,
          data: {
            items: [
              'De la certitude au doute : le premier pas vers la sagesse',
              'Sortir de la caverne est difficile et long...'
            ]
          }
        },
        { type: 'video', column: 'left', step: 1, data: { video: { url: '/aot/video/s4e12_peresasha.mp4', title: 'S4E12 (Ep71) — Le père de Sasha brise le cercle' } } },
        { type: 'video', column: 'left', step: 1, data: { video: { url: '/aot/video/e77_gaby_sagesse.mp4', title: 'S4E18 (Ep77) — Gaby prise de conscience' } } },
         {
          type: 'quote',
          step : 2,
           column : 'right',
          data: {
            text: '"Il n\'y avait aucun démons sur cette île, rien que des gens normaux."',
            author: 'Gaby, Ep77'
          }
        },
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
        { type: 'heading', data: { title: "Les Leçons d'Isayama", image :'/aot/mywarbg.PNG', subtitle: "Ce que l'Attaque des Titans nous enseigne" } },
        {
          type: 'quote',
          step: 1,
          column: 'left',
          data: {
            text: '"C\'est pour voler que les oiseaux déchirent leur coquilles, Et non pour ramper sur le sol sans aucune dignité. Alors, pour quelle raison possèdes-tu des ailes ?"',
            author: 'Linked Horizon, Jiyuu no Tsubasa (Traduit du générique)'
          }
        },
       
        {
          type: 'video',
          step: 1,
          column: 'left',
          data: { video: { url: '/aot/video/opening2.mp4', title: ' Générique Saison 1 Op.2 - Les ailes de la liberté' } }
        },
         {
          type: 'icon-bullets',
          step: 2,
          column: 'left',
          data: {
            items: [
              { icon: 'flame', title: 'Se battre pour la conscience', content: 'L\'idéaliste en nous qui cherche l\'aventure.' },
            ]
          }
        },
        
        {
          type: 'video',
          column: 'right',
          step : 3,
          data: {
            video: { url: '/aot/video/mywar.mp4', title: 'Générique saison finale — My War' },
          }
        },
        {
          type: 'icon-bullets',
           column: 'right',
          step : 4,
          data: {
            items: [
              { icon: 'zap', title: 'Déshumanisation', content: "Vision binaire, propagande, dogme." },
            ]
          }
        },
        {
          type: 'quote',
           column: 'right',
          step : 4,
          data: {
            text: '"Cette guerre, on ne savait pas pourquoi on la faisait. On se battait contre des gens comme nous."',
            author: 'Lazare Ponticelli, dernier poilu français'
          }
        },

        
      ]
    },

    // Slide 18: Conclusion
    {
      id: 'conclusion',
      type: 'content',
      theme: 'blue',
      blocks: [
        { type: 'heading', data: { category: 'CONCLUSION', title: 'Qu\'est-ce que la Liberté ?', subtitle: 'Trois visions, trois chemins', image : '/aot/bataillon.jpg' } },
        { step: 1, type: 'quote', data: { text: "« L'homme qui s'adonne à ses plaisirs devient moins libre que celui qui s'en restreint. »", author: 'Spinoza', image: { src: '/aot/hannes.jpg', alt: 'Hannes', size: 80 } } },
        { step: 2, type: 'quote', data: { text: "« Imagine des hommes enchaînés [...], prenant ces ombres pour la réalité. »", author: 'Platon, La République, Livre VII', image: { src: '/aot/gaby.jpg', alt: 'Gaby', size: 80 } } },
        { step: 3, type: 'quote', data: { text: '« Être homme, c’est précisément être responsable. »', author: 'St Exupéry, Terre des hommes', image: { src: '/aot/jean.jpg', alt: 'Jean', size: 80 } } }
      ]
    }
  ]
}
