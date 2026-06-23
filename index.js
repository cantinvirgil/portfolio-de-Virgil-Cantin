  let lang = 'fr';

  const translations = {
    fr: {
      'Titre': 'Etudiant en master Culture et métiers du web',
      'btn-continuer': 'continuer',
      'Titre-cat': 'Mes travaux',
      'cat-titre': 'Choisissez une catégorie',
      'case1-titre': 'Photo&shy;graphie',
      'case1-desc': 'Argentique, numérique & portraits',
      'case2-titre': 'Web&shy;design',
      'case2-desc': 'Interfaces, UX & prototypes',
      'case3-titre': 'Projet<br>Scolaire',
      'case3-desc': 'Travaux académiques & briefs',
      'bouton-langue': '🇬🇧 Passer en Anglais',
    },
    en: {
      'Titre': 'Master student in Web Culture & Professions',
      'btn-continuer': 'continue',
      'Titre-cat': 'My work',
      'cat-titre': 'Choose a category',
      'case1-titre': 'Photo&shy;graphy',
      'case1-desc': 'Film, digital & portraits',
      'case2-titre': 'Web&shy;design',
      'case2-desc': 'Interfaces, UX & prototypes',
      'case3-titre': 'School<br>Project',
      'case3-desc': 'Academic work & briefs',
      'bouton-langue': '🇫🇷 Switch to French',
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
  }

  function navigate(page) {
    // Placeholder navigation — replace with real href
    event.preventDefault();
    alert(`Navigation vers : ${page}`);
  }