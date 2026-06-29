let lang = 'fr';

const translations = {
  fr: {
    'Titre': 'Etudiant en master Culture et métiers du web',
    'btn-continuer': 'continuer',
    'Titre-cat': 'Mes travaux',
    'cat-titre': 'Choisissez une catégorie',
    'case1-titre': 'Photo&shy;graphie',
    'case1-desc': 'Argentique, numérique & portraits',
    'case2-titre': 'Projet<br>Scolaire',
    'case2-desc': 'Travaux académiques & briefs',
    'bouton-langue': '🇬🇧 Passer en Anglais',
  },
  en: {
    'Titre': 'Master student in Web Culture & Professions',
    'btn-continuer': 'continue',
    'Titre-cat': 'My work',
    'cat-titre': 'Choose a category',
    'case1-titre': 'Photo&shy;graphy',
    'case1-desc': 'Film, digital & portraits',
    'case2-titre': 'School<br>Project',
    'case2-desc': 'Academic work & briefs',
    'bouton-langue': '🇫🇷 Switch to French',
  }
};

function basculerLangue() {
  lang = lang === 'fr' ? 'en' : 'fr';
  const t = translations[lang];

  Object.entries(t).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = val;
    }
  });

  const boutonLangue = document.querySelector('.bouton-langue');
  if (boutonLangue) {
    boutonLangue.innerHTML = t['bouton-langue'];
  }
}

function basculerTheme() {
  document.body.classList.toggle('dark');
  const interrupteur = document.getElementById('interrupteurSombre');

  if (interrupteur.checked) {
    localStorage.setItem('theme', 'sombre');
  } else {
    localStorage.setItem('theme', 'clair');
  }
}

function navigate(event, page) {
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