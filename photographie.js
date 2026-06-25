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