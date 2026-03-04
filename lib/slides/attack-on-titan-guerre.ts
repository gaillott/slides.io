import { Presentation } from './types'

export const attackOnTitanGuerrePresentation: Presentation = {
  id: 'attack-on-titan-guerre',
  title: "L'Attaque des Titans — Absurdité de la guerre",
  author: "Ciné Philo",
  description: "Une exploration de la propagande, du cycle de la haine et de la folie des guerres",
  coverImage: '/aot/mywarbg.PNG',
  createdAt: '2026-01-28',
  category: 'cine-philo',
  slides: [
    // Slide 1: Title
    {
      id: 'titre-guerre',
      type: 'title',
      theme: 'red',
      category: 'CINÉ PHILO',
      title: "L'Attaque des Titans",
      subtitle: "Absurdité de la guerre",
      description: "Une exploration de la propagande, du cycle de la haine et de la folie des guerres",
      backgroundImage: '/aot/mywarbg.PNG',
    },

    // Slide 2: Plan
    {
      id: 'plan-guerre',
      type: 'plan',
      theme: 'red',
      category: 'PLAN DE LA PRÉSENTATION',
      title: "L'Attaque des Titans",
      subtitle: "Absurdité de la guerre",
      items: [
        { partNumber: 'PARTIE I', title: 'Gaby : La propagande', image: '/aot/gaby.jpg' },
        { partNumber: 'PARTIE II', title: 'La déconstruction par Kaya', image: '/aot/kaya.jpg' },
        { partNumber: 'PARTIE III', title: "Les Leçons d'Isayama", image: '/aot/mywarbg.PNG' },
      ]
    },

    // Slide 3: Section - Partie I (Gaby)
    {
      id: 'partie-1-gaby',
      type: 'section',
      theme: 'red',
      partNumber: 'I',
      title: 'Partie I',
      subtitle: 'Gaby Braun : Le cycle de la haine',
      backgroundImage: '/aot/gaby.jpg'
    },

    // Slide 4: Gaby — Produit de la Propagande
    {
      id: 'gaby-propagande',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { category: 'LE CYCLE DE LA HAINE', title: 'Gaby Braun', image: '/aot/gaby.jpg', subtitle: 'Produit de la Propagande • Vision Binaire' } },
        {
          type: 'video',
          column: 'left',
          data: {
            video: { url: '/aot/video/s4e2_gaby_tranchee.mp4', title: 'S4E1 (Ep60) — Gaby l\'enfant soldat' },
          }
        },
        {
          type: 'quote',
          step: 1,
          data: {
            text: '"Eradiquer tous ces maudits démons insulaires à cause de qui nous souffrons !"',
            author: 'Gaby Braun — Avant sa déconstruction'
          }
        },
        {
          type: 'bullets',
          column: 'left',
          step: 1,
          data: {
            items: ['Séparativité et parti politique']
          }
        },
        {
          type: 'video',
          step: 2,
          column: 'left',
          data: { video: { url: '/aot/video/s4e11_gaby_dogme.mp4', title: 'S4E10 (Ep70) — Début du voyage initiatique de la conscience' } }
        },
        {
          type: 'quote',
          step: 3,
          column: 'right',
          data: {
            text: '"Dure époque que celle où il est plus simple de désagréger un atome qu\'un préjugé."',
            author: 'Einstein'
          }
        },
        {
          type: 'bullets',
          step: 3,
          column: 'right',
          data: {
            items: ["Le récit est supérieur au réel"]
          }
        },
        {
          type: 'bullets',
          step: 4,
          column: 'right',
          data: {
            items: ["Comment sortir de l'illusion ?"]
          }
        },
      ]
    },

    // Slide 5: Gaby — Déconstruite
    {
      id: 'gaby-deconstruite',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { category: 'LA MAÏEUTIQUE', title: 'Gaby Braun', image: '/aot/kaya.jpg', subtitle: 'Le parcours initiatique • La Maïeutique de Kaya' } },
        {
          type: 'video',
          column: 'left',
          data: {
            video: { url: '/aot/video/s4e11_gaby_kaya_socrate.mp4', title: 'S4E11 (Ep70) — La Maïeutique de Kaya' },
          }
        },
        { type: 'section', step: 1, data: { title: 'La Maïeutique de Kaya', content: "\"Qu'est-ce que ma mère avait fait de mal ?\" " } },
        {
          type: 'bullets',
          step: 2,
          data: {
            items: [
              'De la certitude au doute : le premier pas vers la sagesse',
              'Sortir de la caverne est difficile et long...'
            ]
          }
        },
        { type: 'video', column: 'left', step: 3, data: { video: { url: '/aot/video/s4e12_peresasha.mp4', title: 'S4E12 (Ep71) — Le père de Sasha, héros de l\'ombre' } } },
        { type: 'video', column: 'left', step: 3, data: { video: { url: '/aot/video/e77_gaby_sagesse.mp4', title: 'S4E18 (Ep77) — Gaby sors de la caverne' } } },
        {
          type: 'quote',
          step: 4,
          column: 'right',
          data: {
            text: '"Il n\'y avait aucun démons sur cette île, rien que des gens normaux."',
            author: 'Gaby, Ep77'
          }
        },
        {
          type: 'bullets',
          step: 5,
          column: 'right',
          data: {
            items: ['l\'homme n\'apprend pas par le savoir, mais par le vécu']
          }
        },
      ]
    },

    // Slide 6: Section - Partie II (Les Leçons)
    {
      id: 'partie-2-lecons',
      type: 'section',
      theme: 'blue',
      partNumber: 'II',
      title: 'Partie II',
      subtitle: "Les Leçons d'Isayama",
      backgroundImage: '/aot/mywarbg.PNG'
    },

    // Slide 7: Les Leçons de la guerre
    {
      id: 'lecons-guerre',
      type: 'content',
      theme: 'red',
      blocks: [
        { type: 'heading', data: { title: "Les Leçons d'Isayama", image: '/aot/mywarbg.PNG', subtitle: "Ce que l'Attaque des Titans nous enseigne sur la guerre" } },
        {
          type: 'quote',
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
          data: { video: { url: '/aot/video/opening2.mp4', title: 'Générique Saison 1 Op.2 — Les ailes de la liberté' } }
        },
        {
          type: 'video',
          step: 2,
          column: 'right',
          data: { video: { url: '/aot/video/mywar.mp4', title: 'Générique saison finale — My War' } }
        },
        {
          type: 'quote',
          step: 3,
          column: 'right',
          data: {
            text: '"Cette guerre, on ne savait pas pourquoi on la faisait. On se battait contre des gens comme nous."',
            author: 'Lazare Ponticelli, dernier poilu français'
          }
        },
        {
          type: 'icon-bullets',
          step: 4,
          column: 'right',
          data: {
            items: [
              { icon: 'zap', title: 'Danger de la séparativité', content: 'Vision binaire, propagande, dogme.' },
            ]
          }
        },
      ]
    },

    // Slide 8: Conclusion guerre
    {
      id: 'conclusion-guerre',
      type: 'content',
      theme: 'blue',
      blocks: [
        { type: 'heading', data: { category: 'CONCLUSION', title: "L'Absurdité de la guerre", subtitle: 'Sortir de la caverne, refuser le dogme', image: '/aot/mywarbg.PNG' } },
        {
          type: 'quote',
          step: 1,
          data: {
            text: '"Dure époque que celle où il est plus simple de désagréger un atome qu\'un préjugé."',
            author: 'Einstein'
          }
        },
        {
          type: 'quote',
          step: 2,
          data: {
            text: '"Il n\'y avait aucun démon sur cette île, rien que des gens normaux."',
            author: 'Gaby, Ep77'
          }
        },
        {
          type: 'icon-bullets',
          step: 3,
          data: {
            items: [
              { icon: 'compass', title: 'Sortir de la caverne', content: 'Voir au-delà du dogme et du récit imposé.' },
              { icon: 'zap', title: 'Refuser la vision binaire', content: 'L\'ennemi est aussi un être humain.' },
              { icon: 'heart', title: 'La propagande façonne', content: 'Interroger ce que l\'on nous enseigne.' },
            ]
          }
        },
      ]
    },
  ]
}
