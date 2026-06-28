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

    const ZoomPhoto = document.getElementById('ZoomPhoto');
    const ZoomPhotoImg = document.getElementById('ZoomPhotoImg');
    const ZoomPhotoDescription = document.getElementById('ZoomPhotoDescription');
    const fermer = document.getElementById('ZoomPhotoClose');
    const flèchePrécédente = document.getElementById('photoAvant');
    const flècheSuivante = document.getElementById('photoAprès');
    let currentIndex = 0;

    function visibleItems() {
      return Array.from(items).filter(item => !item.classList.contains('hide'));
    }

    function openZoomPhoto(index) {
      const visible = visibleItems();
      if (!visible.length) return;
      currentIndex = (index + visible.length) % visible.length;
      const item = visible[currentIndex];
      const img = item.querySelector('img');
      const caption = item.querySelector('figcaption');
      ZoomPhotoImg.src = img.src;
      ZoomPhotoImg.alt = img.alt;
      ZoomPhotoDescription.textContent = caption ? caption.textContent : '';
      ZoomPhoto.classList.add('open');
    }

    function fermer() {
      ZoomPhoto.classList.remove('open');
    }

    items.forEach((item) => {
      item.addEventListener('click', () => {
        const visible = visibleItems();
        const index = visible.indexOf(item);
        openZoomPhoto(index);
      });
    });

    closeBtn.addEventListener('click', fermer);
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); openZoomPhoto(currentIndex - 1); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); openZoomPhoto(currentIndex + 1); });

    ZoomPhoto.addEventListener('click', (e) => {
      if (e.target === ZoomPhoto) fermer();
    });

    document.addEventListener('keydown', (e) => {
      if (!ZoomPhoto.classList.contains('open')) return;
      if (e.key === 'Escape') fermer();
      if (e.key === 'ArrowRight') openZoomPhoto(currentIndex + 1);
      if (e.key === 'ArrowLeft') openZoomPhoto(currentIndex - 1);
    });