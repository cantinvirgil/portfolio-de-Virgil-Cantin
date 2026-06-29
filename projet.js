 let lang = 'fr';

const translations = {
 fr: {
    'Accueil': 'Accueil',
    'Photo': 'Photographie',
    'Projet': 'Projet',
    'texte-theme': 'Thème sombre',
    'bouton-langue': '🇬🇧 Passer en Anglais',
    
    'titre-page': 'Mes PROJETS',
    
    'titre1': 'Documentaire "Vivre de la mer à Geoje"',
    'description1': 'Réalisation d\'un documentaire<br>en Corée du Sud pour un projet scolaire',
    'description2': '<strong>Participation :</strong> Réalisation du graphisme/design du site,<br>Maquettage du site, Prise photographique et participation à la narration.',
    'date1': 'Année 2026',
    'btn1': 'VOIR LE PROJET',
    
    'titre2': 'Projet de communication "geofoodly"',
    'description3': 'Réalisation d\'une campagne de communication<br>pour un projet fictif de food-truck',
    'description4': '<strong>Participation :</strong> Réalisation du graphisme/design du site,<br>Maquettage du site, campagne marketing et réseaux sociaux.',
    'date2': 'Année 2024',
    'btn2': 'VOIR LE PROJET',

    'titre3': 'Projet de communication "Plami"',
    'description5': 'Réalisation d\'une campagne marketing<br>pour un projet fictif d\'application de gestion du temps',
    'description6': '<strong>Participation :</strong> Gestion de la communication,<br>campagne marketing et réseaux sociaux, création de charte éditorial<br>Création de visuel et pictogramme',
    'date3': 'Année 2024',
    'btn3': 'VOIR LE PROJET',

    'titre4': 'Projet de création de jeu "Designer\'s quest"',
    'description7': 'Réalisation d\'un jeu de société sur une semaine',
    'description8': '<strong>Participation :</strong> Création de visuel et pictogramme<br>Création 3d de la boîte de jeu, Pratique de l\'anglais dans le cadre d\'un projet.',
    'date4': 'Année 2024',
    'btn4': 'VOIR LE PROJET',

    'titre5': 'Projet de campagne publicitaire pour la Cartonnerie"',
    'description9': 'Réalisation d\'une vidéo promotionnelle pour la Cartonnerie',
    'description10': '<strong>Participation :</strong> Prise de plan<br>Montage vidéo',
    'date5': 'Année 2024',

  },
  en: {
    'Accueil': 'Home',
    'Photo': 'Photography',
    'Projet': 'Projects',
    'texte-sombre': 'Dark theme',
    'bouton-langue': '🇫🇷 Switch to French',
    
    'titre-page': 'My PROJECTS',
    
    'titre1': 'Documentary "Living from the sea in Geoje"',
    'description1': 'Directing a documentary<br>in South Korea for a school project',
    'description2': '<strong>Role:</strong> Graphic and web design,<br>Website mockups, Photography, and co-narration.',
    'date1': 'Year 2026',
    'btn1': 'VIEW PROJECT',
    
    'titre2': 'Communication project "geofoodly"',
    'description3': 'Creation of a communication campaign<br>for a fictional food-truck project',
    'description4': '<strong>Role:</strong> Graphic and web design,<br>Website mockups, marketing campaign, and social media.',
    'date2': 'Year 2024',
    'btn2': 'VIEW PROJECT',

    'titre3': 'Communication project "Plami"',
    'description5': 'Creation of a marketing campaign<br>for a fictional time management app project',
    'description6': '<strong>Role:</strong> Communication management,<br>marketing campaign and social media, editorial guidelines creation<br>Visual and icon creation',
    'date3': 'Year 2024',
    'btn3': 'VIEW PROJECT',

    'titre4': 'Game creation project "Designer\'s quest"',
    'description7': 'Creation of a board game in one week',
    'description8': '<strong>Role:</strong> Visual and icon creation<br>3D creation of the game box, Practicing English within a project context.',
    'date4': 'Year 2024',
    'btn4': 'VIEW PROJECT',

    'titre5': 'Advertising campaign project for "la Cartonnerie"',
    'description9': 'Creation of a promotional video for la Cartonnerie',
    'description10': '<strong>Role:</strong> Filming<br>Video editing',
    'date5': 'Year 2024',
  }
};

 function basculerLangue() {
    lang = lang === 'fr' ? 'en' : 'fr';
    const t = translations[lang];
    Object.entries(t).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = val;
    });
    document.querySelector('.bouton-langue').textContent = t['bouton-langue'].replace('&shy;', '');
    document.querySelector('.bouton-langue').innerHTML = t['bouton-langue'];
  }

  function basculerTheme() {
    document.body.classList.toggle('dark', document.getElementById('interrupteurSombre').checked);
  const estSombre = document.getElementById('interrupteurSombre').checked;
  localStorage.setItem('theme', estSombre ? 'sombre' : 'clair');
}

  function navigate(page) {
    event.preventDefault();
    alert(`Navigation vers : ${page}`);
  }

  document.addEventListener('DOMContentLoaded', () => {
  const themeSauvegarde = localStorage.getItem('theme');
  const interrupteur = document.getElementById('interrupteurSombre');
  
  if (themeSauvegarde === 'sombre') {
    document.body.classList.add('dark');
    if (interrupteur) {
      interrupteur.checked = true;
    }
  }
});