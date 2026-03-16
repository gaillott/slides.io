import type { Presentation, Slide, PhotoSlide, PhotoGridSlide, PhotoTextSlide, SectionSlide, TitleSlide } from './types'

// ========== Helpers ==========

const ACT1 = '/album/1. Découverte et préparation'
const ACT2 = '/album/2. Traversée'
const ACT3 = '/album/3. Retour dans la cité'

function photo(id: string, src: string, alt: string, caption?: string, anecdote?: string): PhotoSlide {
  return { id, type: 'photo', src, alt, caption, anecdote }
}

function grid(id: string, photos: PhotoGridSlide['photos'], sectionTitle: string): PhotoGridSlide {
  return { id, type: 'photo-grid', layout: 'row-3', photos: photos.slice(0, 3), sectionTitle }
}

function photoText(id: string, src: string, alt: string, position: 'left' | 'right', text: string, title?: string, highlight?: string): PhotoTextSlide {
  return { id, type: 'photo-text', photo: { src, alt, position }, text, title, highlight }
}

function section(id: string, partNumber: string, title: string, subtitle: string, theme?: 'red' | 'blue' | 'green' | 'orange', backgroundImage?: string, audio?: string): SectionSlide {
  return { id, type: 'section', partNumber, title, subtitle, theme, backgroundImage, audio }
}

// ========== Slides ==========

const slides: Slide[] = [

  // ==========================================
  // TITLE
  // ==========================================
  {
    id: 'album-title',
    type: 'title',
    category: 'ALBUM PHOTO 2025',
    title: 'Toulouse',
    subtitle: "Estelle & Thomas — Une année de découvertes, d\'épreuves et de retour",
    description: '',
    theme: 'orange',
    backgroundImage: `${ACT3}/0_Retour dans la famille_11.jpg`,
  } as TitleSlide,

  // ==========================================
  // PLAN
  // ==========================================
  {
    id: 'album-plan',
    type: 'plan',
    category: 'PARCOURS DU HÉROS',
    title: 'Trois Actes',
    subtitle: "Le parcours du héros suit toujours ces trois même étapes : La préparation, La traversée et le retour. Voici notre aventure 2025, à la rencontre de Toulouse et de la philosophie.",
    theme: 'orange',
    items: [
      { partNumber: 'ACTE I', title: 'Découverte et préparation', image: `${ACT1}/1_DEMENAGEMENT.jpg` },
      { partNumber: 'ACTE II', title: 'La Traversée', image: `${ACT2}/1_PERSEUS_1Une aventure commence.jpg` },
      { partNumber: 'ACTE III', title: 'Retour dans la cité', image: `${ACT3}/1_Retour a toulouse magnifique.jpg` },
    ],
  },

  // ==========================================
  // ACTE I — DÉCOUVERTE ET PRÉPARATION
  // ==========================================
  section('act1', 'ACTE I', 'TOULOUSE', 'Découverte et préparation', 'orange', `${ACT1}/2_DECOUVERTE_garonne.jpg`, 'album/audio/1DEMENAGEMENT.mp3'),

  // --- Déménagement ---
  section('s1-demenagement', '1', 'Le Déménagement', 'Une nouvelle vie commence', 'orange',  `${ACT1}/1_DEMENAGEMENT.jpg`, 'album/audio/1DEMENAGEMENT.mp3'),

  photo('demenagement-1', `${ACT1}/1_DEMENAGEMENT.jpg`, 'Déménagement', 'Le grand départ ! Heureusement, nous avons pris l\'assurance 5 minutes avant le pépin ...'),

  grid('demenagement-grid', [
    { src: `${ACT1}/1_DEMENAGEMENT2.jpg`, alt: 'Déménagement' },
    { src: `${ACT1}/1_DEMENAGEMENT3_cheznous.jpg`, alt: 'Chez nous' },
    { src: `${ACT1}/1_DEMENAGEMENT3_cheznous (2).jpg`, alt: 'Chez nous' },
  ], 'Installation dans notre nouveau chez-nous'),

  // --- Découverte de Toulouse ---
  section('s1-decouverte', '2', 'Découverte', 'Explorer Toulouse', 'orange',`${ACT1}/2_DECOUVERTE_capitole.jpg`, 'album/audio/2SECANTO.mp3'),


  grid('decouverte-garonne', [
    { src: `${ACT1}/2_DECOUVERTE_pont.jpg`, alt: 'Le pont' },
    { src: `${ACT1}/2_DECOUVERTE_vue_garonne.jpg`, alt: 'Vue Garonne' },
  ], 'La Garonne et ses ponts'),

  grid('decouverte-vues', [
    { src: `${ACT1}/2_DECOUVERTE_vue_favorie.jpg`, alt: 'Vue favorite' },
    { src: `${ACT1}/2_DECOUVERTE_vue_garonne (3).jpg`, alt: 'Vue Garonne 3' },
  ], 'Nos vues favorites sur la ville'),

  grid('decouverte-patrimoine', [
    { src: `${ACT1}/2_DECOUVERTE_SaintSernin.jpg`, alt: 'Saint-Sernin' },
    { src: `${ACT1}/2_DECOUVERTE_SaintSernin2.jpg`, alt: 'Saint-Sernin 2' },
  ], 'La basilique Saint-Sernin'),

  grid('decouverte-divers', [
    { src: `${ACT1}/2_DECOUVERTE_paysage.jpg`, alt: 'Paysage' },
    { src: `${ACT1}/2_DECOUVERTE_brunch.jpg`, alt: 'Brunch' },
    { src: `${ACT1}/2_DECOUVERTE_Rugby.jpg`, alt: 'Rugby' },
  ], 'Paysages, brunchs et rugby'),

  // --- Manger ---
  section('s1-manger', '3', 'Manger', 'Chez nous et au resto', 'orange', `${ACT1}/3_MANGER_cheznousetauresto_nous3drole.jpg`, 'album/audio/2SECANTO.mp3'),

   photoText('manger-drole', `${ACT1}/3_MANGER_cheznousetauresto_RAMEN.jpg`, 'Drôle', 'left',
    "Nous aimons manger. Et à Toulouse, on découvre de nouvelles saveurs qu'il faut absolument refaire à la maison !",
    'On aime manger', 'MIAAAAAAAAAAAAAM !'),
    
  grid('manger-grid1', [
     { src: `${ACT1}/3_MANGER_cheznousetauresto_kyoshi2.jpg`, alt: 'Kyoshi 2' },
    { src: `${ACT1}/3_MANGER_cheznousetauresto_IORI1.jpg`, alt: 'IORI' },
    { src: `${ACT1}/3_MANGER_cheznousetauresto_kyoshi1.jpg`, alt: 'Kyoshi' },
  ], 'Nos restaurants japonais préférés'),

  grid('manger-grid2', [
        { src: `${ACT1}/3_MANGER_cheznousetauresto_nous.jpg`, alt: 'Nous au resto' },

    { src: `${ACT1}/3_MANGER_cheznousetauresto_nous2.jpg`, alt: 'Nous' },
    { src: `${ACT1}/3_MANGER_cheznousetauresto_nous4.jpg`, alt: 'Nous 4' },
  ], 'Et chez nous aussi il y a un resto'),

 

  // --- Découverte Albi ---
  section('s1-albi', '4', 'Escapade', 'Alentours et petites escapades', 'orange',  `${ACT1}/4_DECOUVERTE_ALBY.jpg`, 'album/audio/2SECANTO.mp3'),

  photo('albi-1', `${ACT1}/4_DECOUVERTE_ALBY.jpg`, 'Albi', 'Albi, la ville rouge'),

  grid('albi-grid1', [
    { src: `${ACT1}/4_DECOUVERTE_ALBY2.jpg`, alt: 'Albi 2' },
    { src: `${ACT1}/4_DECOUVERTE_ALBY3.jpg`, alt: 'Albi 3' },
    { src: `${ACT1}/4_DECOUVERTE_ALBY4.jpg`, alt: 'Albi 4' },
  ], 'La cathédrale et les ruelles à Alby'),

  grid('albi-grid2', [
    { src: `${ACT1}/4_DECOUVERTE_Chateau.jpg`, alt: 'Château' },
    { src: `${ACT1}/4_DECOUVERTE_Chateau2.jpg`, alt: 'Château 2' },
  ], 'Escapade et chateaux'),

  // --- Début philo ---
  section('s1-philo', '5', 'Philosophie', 'Les premiers pas', 'orange',  `${ACT1}/5_DEBUT_PHILO2.jpg`, 'album/audio/3ADVENTUREBEGIN.mp3'),

  photoText('philo-debut', `${ACT1}/5_DEBUT_PHILO.jpg`, 'debut philo', 'left',
    "C'est le début de l'aventure philosophique... Nous plongeons vers l'inconnu, ensemble à la recherche de la sagesse.",
    'Découverte du monde philosophique', 'Théorique et surtout pratique'),
  grid('philo-grid1', [
    { src: `${ACT1}/5_DEBUT_PHILO2.jpg`, alt: 'Philo 2' },
    { src: `${ACT1}/5_DEBUT_PHILO_3_Travaux.jpg`, alt: 'Travaux' },
    { src: `${ACT1}/5_DEBUT_PHILO4_Travaux.jpg`, alt: 'Travaux 2' },
  ], 'Beaucoup plus de pratique que prévu !'),

  grid('philo-grid2', [
    { src: `${ACT1}/5_DEBUT_PHILO5.jpg`, alt: 'Philo 5' },
    { src: `${ACT1}/5_DEBUT_PHILO5_Travaux.jpg`, alt: 'Travaux 3' },
  ], 'Une école en travaux'),
  photoText('philo-debut',`${ACT1}/5_DEBUT_PHILO6_ConcertBenji.jpg`, 'debut philo', 'left',
    "On découvre aussi l'art ... Monde inconnu pour des moldus scientifiques",
    'ART', 'Concert de Benjamin'),

  // --- Famille & amis ---
  section('s1-famille', '6', 'Garder le lien', 'Famille et amis', 'orange',`${ACT1}/6_FAMILLE_10Famille.jpg`, 'album/audio/3ADVENTUREBEGIN.mp3'),



  grid('famille-potes1', [
    { src: `${ACT1}/6_FAMILLE_2Potes.jpg`, alt: 'Potes' },
    { src: `${ACT1}/6_FAMILLE_5Potes.jpeg`, alt: 'Potes 3' },
  ], 'Les amis viennent à Toulouse'),

  grid('famille-potes2', [
    { src: `${ACT1}/6_FAMILLE_6Potes.jpeg`, alt: 'Potes 4' },
    { src: `${ACT1}/6_FAMILLE_8Potes.jpg`, alt: 'Potes 5' },
  ], 'Des moments de joie ensemble'),

  grid('famille-famille1', [
    { src: `${ACT1}/6_FAMILLE_9Famille.jpg`, alt: 'Famille' },
     { src:  `${ACT1}/6_FAMILLE_12Famille.jpg`, alt: 'Famille' },
  ], 'Nos familles découvrent eux aussi Toulouse. Au menu, Pizzas, restaus et visites'),

  // --- Drôle + Perseus ---
  photoText('drole', `${ACT1}/7_DROLE_Pendant ce temps estelle.jpg`, 'Pendant ce temps Estelle...', 'left',
    '.',
    'Pendant ce temps...', 'INTERLUDE'),

  photo('perseus-prep', `${ACT1}/8_PERSEUS_Affronte_tes_peurs.jpg`, 'Quelque chose de sombre est sur le chemin', 'Une sensation étrange se fait pourtant ressentir ...', 'Perseuuuuuuuuuuuus ...'),

  // ==========================================
  // ACTE II — LA TRAVERSÉE
  // ==========================================
  section('act2', 'ACTE II', 'La Traversée', 'Épreuves et transformations', 'red',`${ACT2}/1_PERSEUS_1Une aventure commence.jpg`, 'album/audio/4PERSEE.mp3'),
  
  // --- Drôle + Perseus ---
  photoText('perseus-1', `${ACT2}/1_PERSEUS_1Une aventure commence.jpg`, 'Pendant ce temps Estelle...', 'left',
    'Un groupe de jeunes, de grand rêves et des épreuves, beaucoup d\'épreuves.',
    'Les épreuves arrivent', 'LE MYTHE DE PERSEE'),
  grid('perseus-grid1', [
    { src: `${ACT2}/1_PERSEUS_2Maraude.jpg`, alt: 'Maraude' },
    { src: `${ACT2}/1_PERSEUS_2Maraude (2).jpg`, alt: 'Maraude 2' },
    { src: `${ACT2}/1_PERSEUS_3Des jeunes qui veulent affronter ses peurs ensemble.jpg`, alt: 'Affronter ses peurs' },
  ], 'Maraudes et amitié'),

  grid('perseus-grid2', [
    { src: `${ACT2}/1_PERSEUS_4 Initiation.jpg`, alt: 'Initiation' },
    { src: `${ACT2}/1_PERSEUS_4 Initiation (2).jpg`, alt: 'Initiation 2' },
  ], 'L\'initiation'),

  // --- Un bébé (pizza) ---
  section('s2-bebe', '2', 'On a une annonce', '30 ans bientôt... C\'est l\'heure ...', 'red', '','album/audio/5VOLARE.mp3'),

  photo('bebe-pizza', `${ACT2}/2_UN BEBE_Et non des pizzas.jpg`, 'Pizzas', 'Des pizzas !'),


  grid('bebe-grid2', [
    { src: `${ACT2}/2_UN BEBE_Et non des pizzas (9).jpg`, alt: 'Pizzas' },
    { src: `${ACT2}/2_UN BEBE_Et non des pizzas (10).jpg`, alt: 'Pizzas' },
    { src: `${ACT2}/2_UN BEBE_Et non des pizzas_Chef.jpg`, alt: 'Chef' },
  ], 'Une nouvelle passion'),

  grid('bebe-chef', [
    { src: `${ACT2}/2_UN BEBE_Et non des pizzas_Chef (2).jpg`, alt: 'Chef 2' },
    { src: `${ACT2}/2_UN BEBE_Et non des pizzas_Chef (4).jpg`, alt: 'Chef 4' },
    { src: `${ACT2}/2_UN BEBE_Et non des pizzas_Chef (5).jpg`, alt: 'Chef 5' },
  ], 'La relève est assurée'),

  // --- Académie ---
  section('s2-academie', '3', 'Académie des arts', 'Arts et découverte', 'red', `${ACT2}/3_ACADEMIE_Arts et découverte Cour Pétral.jpg`,'album/audio/6ART.mp3'),


  grid('academie-grid', [
    { src: `${ACT2}/3_ACADEMIE_Arts et découverte Cour Pétral_extérieur.jpg`, alt: 'Extérieur' },
    { src: `${ACT2}/3_ACADEMIE_Arts et découverte Cour Pétral_stgeorge mosaique.jpg`, alt: 'Mosaïque' },
  ], 'La cour Pétral'),

    photoText('acaddemie1', `${ACT2}/3_ACADEMIE_Bordeaux.jpg`, 'Première Académie à Bordeaux', 'left',
    '3 écoles et le sentiment de faire partie d\'un groupe.',
    'Première Académie à Bordeaux', 
    'LA VOIE HEROIQUE'),

  grid('academie-bordeaux', [
    { src: `${ACT2}/3_ACADEMIE_Bordeaux (2).jpg`, alt: 'Bordeaux 2' },
    { src: `${ACT2}/3_ACADEMIE_Bordeaux (3).jpg`, alt: 'Bordeaux 3' },
  ], 'Des épreuves ...'),

  // --- Kraken ---
  section('s2-kraken', '4', 'Le combat intérieur', 'Le Kraken', 'red',`${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_1Team.jpg`,'album/audio/7KRAKEN.mp3'),

  grid('kraken-team2', [
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_1Team3.jpg`, alt: 'Team 3' },
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_1Team4.jpg`, alt: 'Team 4' },
  ], 'Les Toulousains prêts pour l\'aventure ? Ou Inconscients du danger'),

  grid('kraken-team1', [
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_1Team (2).jpg`, alt: 'Team' },
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_1Team (3).jpg`, alt: 'Team' },
  ], 'Estelle et Thomas dans deux équipes'),


  grid('kraken-aventure', [
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_2Aventure.jpg`, alt: 'Aventure' },
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_3AventureKayak.jpg`, alt: 'Kayak' },
  ], 'L\'aventure commence : Nous sommes résistants et devons agir sous domination avec efficacité'),


   photoText('kraken', `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_5INITIATION Secourisme.jpg`, 'Première Académie à Bordeaux', 'left',
    'Deux jours intense d\'épreuves avec des inconnus. Cohésion, défis impossibles, secourisme, les épreuves s\'enchainent. Malgré les sourire, c\'est une épreuve difficile pour Estelle et Thomas.',
    '80 jeunes qui relèvent le défi', 
    'LE KRAKEN'),

  grid('kraken-secourisme', [
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_4Secourisme.jpg`, alt: 'Secourisme' },
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_4Secourisme (2).jpg`, alt: 'Secourisme 2' },
  ], 'On se forme sur le tas à secourir des victimes'),

  grid('kraken-interioriser1', [
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_6_Interioriser.jpg`, alt: 'Intérioriser' },
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_6_Interioriser (4).jpg`, alt: 'Intérioriser 4' },
  ], 'Après l\'effort.. Intérioriser le vécu'),



  grid('kraken-retour', [
    { src: `${ACT2}/4_KRAKEN_ LE COMBAT INTERIEUR_7_Retour.jpg`, alt: 'Retour' },
  ], 'Le retour.. En vie '),

  // --- Voyage Van Trip ---
  section('s2-voyage', '5', 'Le Voyage', 'Van Trip', 'red', `${ACT2}/5_VOYAGE_VANTRIP11_PaysBasque_de la vie qui déborde.jpg`,'album/audio/8THESHIRE.mp3'),


  photoText('voyage-depart',`${ACT2}/5_VOYAGE_VANTRIP1_depart.jpg`, 'Van Trip', 'left',
    'Deux semaines, sans réservation, uniquement un Van qui nous permettra de voguer à nos envies.',
    '2 semaines de voyage en amoureux', 
    'VAN TRIP NAMOUR'),

  grid('voyage-liberte1', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP2_liberte.jpg`, alt: 'Liberté' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP2_liberte (2).jpg`, alt: 'Liberté 2' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP2_liberte (3).jpg`, alt: 'Liberté 3' },
  ], 'Liberté sur les routes'),

  grid('voyage-modedevie', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP3_mode de vie.jpg`, alt: 'Mode de vie' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP3_mode de vie (2).jpg`, alt: 'Mode de vie 2' },
  ], 'Un mode de vie nomade'),

  grid('voyage-stbertrand1', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP4_StBertrand (2).jpg`, alt: 'St Bertrand 2' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP4_StBertrand (5).jpg`, alt: 'St Bertrand 5' },

  ], 'Saint-Bertrand-de-Comminges'),

  grid('voyage-stbertrand2', [
        { src: `${ACT2}/5_VOYAGE_VANTRIP4_StBertrand (3).jpg`, alt: 'St Bertrand 3' },
                { src: `${ACT2}/5_VOYAGE_VANTRIP4_StBertrand (6)_on n'oublie pas l'essentiel.jpg`, alt: 'L\'essentiel' },


  ], 'Saint-Bertrand-de-Comminges - On n\'oublie pas l\'essentiel'),

  photo('voyage-lourdes', `${ACT2}/5_VOYAGE_VANTRIP5_Lourdes.jpg`, 'Lourdes', 'Lourdes'),

  grid('voyage-oisivete', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP6_Oisivete.jpg`, alt: 'Oisiveté' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP6_Oisivete (3).jpg`, alt: 'Oisiveté 3' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP6_Oisivete (5).jpg`, alt: 'Oisiveté 5' },
  ], 'L\'art de ne rien faire'),

  grid('voyage-paysbasque1', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP7_PaysBasque (5).jpg`, alt: 'Pays Basque' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP7_PaysBasque (7).jpg`, alt: 'Pays Basque' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP7_PaysBasque (8).jpg`, alt: 'Pays Basque' },
  ], 'Arrivée au Pays Basque'),

  grid('voyage-paysbasque2', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP7_PaysBasque (9).jpg`, alt: 'Pays Basque' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP7_PaysBasque (10).jpg`, alt: 'Pays Basque' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP7_PaysBasque (12).jpg`, alt: 'Pays Basque' },
  ], 'Les paysages basques'),

  grid('voyage-pluie', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP7_PaysBasque_delapluie.jpg`, alt: 'De la pluie' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP7_PaysBasque_delapluie (2).jpg`, alt: 'De la pluie 2' },
  ], 'De la pluie aussi...'),

  grid('voyage-verdure', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP8_PaysBasque_de la verdure.jpg`, alt: 'Verdure' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP8_PaysBasque_de la verdure (2).jpg`, alt: 'Verdure 2' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP8_PaysBasque_de la verdure (4).jpg`, alt: 'Verdure 4' },
  ], 'De la verdure magnifique'),

  grid('voyage-manger1', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP9_PaysBasque_nous on aime manger.jpg`, alt: 'Manger' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP9_PaysBasque_nous on aime manger (2).jpg`, alt: 'Manger 2' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP9_PaysBasque_nous on aime manger (4).jpg`, alt: 'Manger 4' },
  ], 'On n\'oublie pas de manger !'),

  grid('voyage-manger2', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP9_PaysBasque_nous on aime manger (5).jpg`, alt: 'Manger 5' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP9_PaysBasque_nous on aime manger (6)_bon appetit.jpg`, alt: 'Bon appétit' },
  ], 'ON EGIN !'),

  grid('voyage-paysages1', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP10_PaysBasque_des beaux paysages (2).jpg`, alt: 'Paysage' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP10_PaysBasque_des beaux paysages (4).jpg`, alt: 'Paysage' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP10_PaysBasque_des beaux paysages (5).jpg`, alt: 'Paysage' },
  ], 'Des beaux paysages'),

  grid('voyage-paysages2', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP10_PaysBasque_des beaux paysages (7).jpg`, alt: 'Paysage' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP10_PaysBasque_des beaux paysages (9).jpg`, alt: 'Paysage' },
  ], 'La beauté du Pays Basque'),

  grid('voyage-vie1', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP11_PaysBasque_de la vie qui déborde.jpg`, alt: 'La vie qui déborde' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP11_PaysBasque_de la vie qui déborde (3).jpg`, alt: 'Vie' },
  ], 'De la vie qui déborde'),

  grid('voyage-vie2', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP11_PaysBasque_de la vie qui déborde (7).jpg`, alt: 'Vie' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP11_PaysBasque_de la vie qui déborde (8).jpg`, alt: 'Vie' },
  ], 'La plage aussi.. On veut toucher l\'eau !!!!!'),

  photoText('voyage-deborde-trop', `${ACT2}/5_VOYAGE_VANTRIP11_PaysBasque_de la vie qui déborde (10) parfois ça deborde trop.jpg`, 'Ça déborde trop', 'left',
    'Parfois, pas de toilette à proximité ... Mais la formation philosophique permet à Namour de rester adaptable.',
    'Oups', '#VANLIFE'),

  grid('voyage-amour1', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP12_PaysBasque_de l amour (2).jpg`, alt: 'Amour 2' },
        { src: `${ACT2}/5_VOYAGE_VANTRIP12_PaysBasque_de l amour (4).jpg`, alt: 'Amour 4' },

  ], 'De l\'amour'),

  grid('voyage-amour2', [
    { src: `${ACT2}/5_VOYAGE_VANTRIP12_PaysBasque_de l amour (3).jpg`, alt: 'Amour 3' },
    { src: `${ACT2}/5_VOYAGE_VANTRIP12_PaysBasque_de l amour (6).jpg`, alt: 'Amour 6' },
  ], 'Quel beau voyage... '),

  // --- Académie voie héroïque ---
  section('s2-academie2', '6', 'Académie', 'La voie héroïque', 'red', `${ACT2}/6_ACADEMIE_LA VOIE HEROIQUE.jpg`,'album/audio/9ACADEMIE.mp3'),

  photoText('voyage-deborde-trop',  `${ACT2}/6_ACADEMIE_LA VOIE HEROIQUE (2).jpg`, 'Voie héroïque', 'left',
    'A Nouvelle Acropole, on se retrouve tout les 6 mois pour suivre une formation philosophique. La première étape est la Voix Héroïque.',
    '1ère académie à la Cour Pétral', 'LA VOIE HEROIQUE'),

  // --- Été philosophique ---
  section('s2-ete', '7', 'Un Été', 'Philosophique', 'red',`${ACT2}/7_UN ETE PHILOSOPHIQUE3_ Weekend Ecole encore des pratiques.jpg`,'album/audio/10ETE.mp3'),

   photoText('voyage-deborde-trop',  `${ACT2}/7_UN ETE PHILOSOPHIQUE_ Debut du chant.jpg`, 'Voie héroïque', 'left',
    'Estelle et Thomas découvrent qu\'ils peuvent chanter... Et que ça fait du bien !',
    'MIAAAAAAAAAAOUUUU', 'J\'ai du bon tabac.. Tu n\'en auras.. N\'auras pas !'),


  grid('ete-weekend1', [
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE2_ Weekend Ecole.jpg`, alt: 'Weekend école' },
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE2_ Weekend Ecole (2).jpg`, alt: 'Weekend école 2' },
  ], 'Weekend à l\'école de philosophie'),

  grid('ete-pratiques1', [
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE3_ Weekend Ecole (5) Des pratiques.jpg`, alt: 'Pratiques' },
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE3_ Weekend Ecole encore des pratiques (2).jpg`, alt: 'Pratiques' },
  ], 'Des pratiques philosophiques'),

  grid('ete-pratiques2', [
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE3_ Weekend Ecole encore des pratiques (3).jpg`, alt: 'Pratiques' },
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE3_ Weekend Ecole encore des pratiques (4).jpg`, alt: 'Pratiques' },
  ], 'Encore des pratiques !'),

  grid('ete-amis1', [
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE4_ Weekend Ecole  de nouveaux amis.jpg`, alt: 'Amis' },
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE4_ Weekend Ecole  de nouveaux amis (2).jpg`, alt: 'Amis' },
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE4_ Weekend Ecole  de nouveaux amis (3).jpg`, alt: 'Amis' },
  ], 'De nouveaux amis'),

  grid('ete-amis2', [
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE4_ Weekend Ecole  de nouveaux amis (4).jpg`, alt: 'Amis' },
    { src: `${ACT2}/7_UN ETE PHILOSOPHIQUE4_ Weekend Ecole  de nouveaux amis (5).jpg`, alt: 'Amis' },
  ], 'Des liens qui se tissent'),

  // --- Camp volontariat ---
  section('s2-camp', '8', 'Volontariat', 'Le Camp Perséus', 'red',`${ACT2}/8_CAMP VOLONTARIAT_0 LA vie du camp.jpg`,'album/audio/11CAMP.mp3'),

  photoText('voyage-deborde-trop',  `${ACT2}/8_CAMP VOLONTARIAT_0 LA vie du camp.jpg`, 'Voie héroïque', 'left',
    '1 Semaine de volontariat. Des rires, des pleurs, de la vie en équipe.',
    'CAMP PERSEUS', 'Camp de volontariat - 7 jours'),


  grid('camp-estelle1', [
    { src: `${ACT2}/8_CAMP VOLONTARIAT_1Estelle.jpg`, alt: 'Estelle' },
    { src: `${ACT2}/8_CAMP VOLONTARIAT_1Estelle (2).jpg`, alt: 'Estelle' },
  ], 'Estelle au camp'),

  grid('camp-estelle2', [
    { src: `${ACT2}/8_CAMP VOLONTARIAT_1Estelle (5).jpg`, alt: 'Estelle' },
    { src: `${ACT2}/8_CAMP VOLONTARIAT_1Estelle (7).jpg`, alt: 'Estelle' },
  ], 'Estelle : Projet Mare aux paons'),

  grid('camp-thomas', [
    { src: `${ACT2}/8_CAMP VOLONTARIAT_2Thomas.jpg`, alt: 'Thomas' },
    { src: `${ACT2}/8_CAMP VOLONTARIAT_2Thomas groupe.jpg`, alt: 'Thomas groupe' },
  ], 'Thomas et le projet isolation terre-paille'),



   photoText('encoreunkraken',  `${ACT2}/8_CAMP VOLONTARIAT_3 ENCORE UN KRAKEN ....jpg`, 'Voie héroïque', 'left',
    'Nouveau Kraken, nouveaux défis à affronter',
    'KRAKEN, le Retour', 'secourisme dans une ville abandonnée'),

     photoText('encoreunkraken',  `${ACT2}/8_CAMP VOLONTARIAT_4 Groupe philosophique engagé.jpg`, 'Voie héroïque', 'left',
    'Des jeunes volontaires qui travaillent, rient, pleurent et vivent pour bâtir le meilleur...  A l\'intérieur comme à l\'extérieur.',
    'Le Camp Perseus', '7 jours - 80 participants - rires, pleurs et fraternité'),

  grid('camp-fin2', [
    { src: `${ACT2}/8_CAMP VOLONTARIAT_5 Inexplicable.jpg`, alt: 'Inexplicable' },
    { src: `${ACT2}/8_CAMP VOLONTARIAT_5 Inexplicable (2).jpg`, alt: 'Inexplicable 2' },
  ], '*-*'),

  // --- Une annonce ---
  section('s2-annonce', '9', '', 'Une Annonce', 'red','','album/audio/12PIZZA.mp3'),

  grid('annonce', [
    { src: `${ACT2}/9_UNE ANNONCE_Encore des pizzas.jpg`, alt: 'Annonce' },
    { src: `${ACT2}/9_UNE ANNONCE_Encore des pizzas (2).jpg`, alt: 'Encore des pizzas' },
  ], 'Toujours plus de pizzas'),

  // ==========================================
  // ACTE III — RETOUR DANS LA CITÉ
  // ==========================================
  section('act3', 'ACTE III', 'Retour', 'Dans la cité', 'green',`${ACT3}/1_Retour a toulouse.jpg`,'album/audio/13RETOUR.mp3'),

  // --- Retour famille ---
  section('s3-famille', '0', 'Retour', 'Dans la famille', 'green',`${ACT3}/0_Retour dans la famille.jpg`,'album/audio/13RETOUR.mp3'),


  grid('retour-famille-g1', [
    { src: `${ACT3}/0_Retour dans la famille (2).jpg`, alt: 'Famille' },
    { src: `${ACT3}/0_Retour dans la famille (3).jpg`, alt: 'Famille' },
    { src: `${ACT3}/0_Retour dans la famille (4).jpg`, alt: 'Famille' },
  ], 'Retrouvailles en famille'),

  grid('retour-famille-g2', [
    { src: `${ACT3}/0_Retour dans la famille (6).jpg`, alt: 'Famille' },
    { src: `${ACT3}/0_Retour dans la famille (10).jpg`, alt: 'Famille' },
  ], 'Des moments précieux'),

  grid('retour-famille-g3', [
    { src: `${ACT3}/0_Retour dans la famille_11.jpg`, alt: 'Famille' },
    { src: `${ACT3}/0_Retour dans la famille (13).jpg`, alt: 'Famille' },
  ], 'La famille réunie'),

  grid('retour-famille-g4', [
    { src: `${ACT3}/0_Retour dans la famille (14).jpg`, alt: 'Famille' },
    { src: `${ACT3}/0_Retour dans la famille (15).jpg`, alt: 'Famille' },
    { src: `${ACT3}/0_Retour dans la famille (16).jpg`, alt: 'Famille' },
  ], 'Ensemble, tout simplement'),

  // --- Retour à Toulouse ---
  section('s3-toulouse', '1', 'Retour', 'À Toulouse', 'green', `${ACT3}/1_Retour a toulouse.jpg`,'album/audio/13RETOUR.mp3'),

  photo('toulouse-magnifique', `${ACT3}/1_Retour a toulouse magnifique.jpg`, 'Toulouse magnifique', 'Toulouse, magnifique'),

  grid('toulouse-grid1', [
    { src: `${ACT3}/1_Retour a toulouse (2).jpg`, alt: 'Toulouse 2' },
    { src: `${ACT3}/1_Retour a toulouse (3).jpg`, alt: 'Toulouse 3' },
  ], 'Retour dans la ville rose'),

  grid('toulouse-grid2', [
    { src: `${ACT3}/1_Retour a toulouse (4).jpg`, alt: 'Toulouse 4' },
    { src: `${ACT3}/1_Retour a toulouse (5).jpg`, alt: 'Toulouse 5' },
    { src: `${ACT3}/1_Retour a toulouse (6).jpg`, alt: 'Toulouse 6' },
  ], 'Visite de Paola'),

  // --- Partage des mondes ---
  section('s3-partage', '2', 'Retour', 'Des pizzas à l\'école', 'green','','album/audio/13RETOUR.mp3'),

  grid('partage-mondes', [
    { src: `${ACT3}/2_PARTAGE DES MONDES.jpg`, alt: 'Partage des mondes' },
    { src: `${ACT3}/2_PARTAGE DES MONDES (2).jpg`, alt: 'Partage 2' },
  ], 'Quand la philo rencontre la pizza'),

  // --- Volontariat dans la cité ---
  section('s3-volontariat', '3', 'Retour ', 'Volontariat dans la cité', 'green', `${ACT3}/3_VOLONTARIAT DANS LA CITE.jpg`,'album/audio/13RETOUR.mp3'),


  grid('volontariat-g1', [
    { src: `${ACT3}/3_VOLONTARIAT DANS LA CITE (2).jpg`, alt: 'Volontariat' },
    { src: `${ACT3}/3_VOLONTARIAT DANS LA CITE (3).jpg`, alt: 'Volontariat' },
  ], 'Mettre sa volonté en action dans la ville'),

  grid('volontariat-g2', [
    { src: `${ACT3}/3_VOLONTARIAT DANS LA CITE (5).jpg`, alt: 'Volontariat' },
    { src: `${ACT3}/3_VOLONTARIAT DANS LA CITE (7).jpg`, alt: 'Volontariat' },
  ], 'Le volontariat au quotidien'),

  grid('volontariat-g3', [
    { src: `${ACT3}/3_VOLONTARIAT DANS LA CITE (8).jpg`, alt: 'Volontariat' },
    { src: `${ACT3}/3_VOLONTARIAT DANS LA CITE (9).jpg`, alt: 'Volontariat' },
  ], 'Le futur à construire !!'),

  // --- Café associatif ---
  section('s3-cafe', '4', 'Nouvelle aventure', 'Le café associatif', 'green',`${ACT3}/4_Nouvelle aventure Tenir un cafe associatif.jpg`,'album/audio/14NEW.mp3'),


  grid('cafe-g1', [
    { src: `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (2).jpg`, alt: 'Café' },
    { src: `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (4).jpg`, alt: 'Café' },
  ], 'Les débuts du café'),

  grid('cafe-g2', [
    { src: `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (6).jpg`, alt: 'Café' },
    { src: `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (7).jpg`, alt: 'Café' },
  ], 'La vie du café au quotidien'),

  grid('cafe-g3', [
    { src: `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (8).jpg`, alt: 'Café' },
    { src: `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (9).jpg`, alt: 'Café' },
  ], 'Accueillir et partager'),

    grid('cafe-g3', [
          { src: `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (5).jpg`, alt: 'Café' },
    { src: `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (11).jpg`, alt: 'Café' },
  ], 'Beaucoup, Beaucoup de nourriture'),

  photoText('cafe-plats', `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (10) _ Des plats pas toujours végé.jpg`, 'Plats', 'right',
    'Des plats pas toujours végé... mais toujours faits avec amour !',
    'La cuisine du café', 'CAFÉ ASSOCIATIF'),

  grid('cafe-g4', [
    { src: `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (12).jpg`, alt: 'Café' },
    { src: `${ACT3}/4_Nouvelle aventure Tenir un cafe associatif (13).jpg`, alt: 'Café' },
  ], 'On aime toujours faire à manger et manger !'),

  // --- Académie d'automne ---
  section('s3-thesee', '5', 'Académie', 'D\'automne — Thésée', 'green', `${ACT3}/5_ACADEMIE D'AUTOMNE-THESEE.jpg`,'album/audio/14NEW.mp3'),


      photoText('acaddemie1', `${ACT3}/5_ACADEMIE D'AUTOMNE - THESEE (2).jpg`, 'Première Académie à Bordeaux', 'left',
    'Deuxième étape du mythe : Thésée et le labyrinthe du minotaure.',
    'Deuxième Académie à la Cour Pétral', 
    'THESEE'),

  // --- Bonus ---
  section('s3-bonus', '6', 'Bonus', 'Les coulisses', 'green', `${ACT3}/7_BONUS_5.jpg`,'album/audio/14NEW.mp3'),


grid('bonus-g1', [
    { src: `${ACT3}/7_BONUS (2).jpg`, alt: 'Bonus' },
     { src: `${ACT3}/6_DES CRISES.jpg`, alt: 'Bonus' },
  ], 'BONUS'),


  grid('bonus-g1', [
    { src: `${ACT3}/7_BONUS (1).jpg`, alt: 'Bonus' },
     { src: `${ACT3}/7_BONUS (4).jpg`, alt: 'Bonus' },
  ], 'BONUS'),

  grid('bonus-g3', [
    { src: `${ACT3}/7_BONUS (7).jpg`, alt: 'Bonus' },
    { src: `${ACT3}/7_BONUS (6).jpg`, alt: 'Bonus' },
  ], 'BONUS'),

    grid('bonus-g4', [
    { src: `${ACT3}/7_BONUS22 (2).jpg`, alt: 'Bonus' },
    { src: `${ACT3}/7_BONUS22.jpg`, alt: 'Bonus' },
   
    
  ], 'BONUS'),
  grid('bonus-g4', [
    { src:  `${ACT3}/7_BONUS_5.jpg`, alt: 'Bonus' },
 { src: `${ACT3}/7_BONUS22 (4).jpg`, alt: 'Bonus' },
  ], 'BONUS'),
   grid('bonus-g4', [
    { src: `${ACT3}/7_BONUS22 (5).jpg`, alt: 'Bonus' },
  ], 'BONUS'),

  // ==========================================
  // FIN
  // ==========================================
  {
    id: 'album-fin',
    type: 'title',
    category: 'en route pour 2026',
    title: 'Merci',
    subtitle: 'Pour cette année incroyable',
    description: 'L\'aventure continue...',
    theme: 'orange',
    backgroundImage: `${ACT3}/0_Retour dans la famille_11.jpg`,
  } as TitleSlide,
]

export const album2025Presentation: Presentation = {
  id: 'album-2025',
  title: 'Album Photo 2025',
  author: 'Thomas & Estelle',
  description: 'Notre année — Le Parcours du Héros',
  coverImage: `${ACT1}/2_DECOUVERTE_garonne.jpg`,
  createdAt: '2025-12-31',
  category: 'album-photo',
  slides,
}
