/*https://share.gemini.google/6fpeHkTUh8ww correction de code et aide pour les filtres photos*/

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

/*filtres*/

const boutonsFiltres = document.querySelectorAll('#filters button');
const figures = document.querySelectorAll('.galerie figure');

boutonsFiltres.forEach(bouton => {
  bouton.addEventListener('click', () => {
    boutonsFiltres.forEach(btn => btn.classList.remove('active'));
    bouton.classList.add('active');
    const filtreActuel = bouton.getAttribute('data-filter');

    figures.forEach(figure => {
        const categorieFigure = figure.getAttribute('data-cat');
        if (filtreActuel === 'tout' || categorieFigure === filtreActuel) {
          figure.classList.remove('hide');
        } else {
          figure.classList.add('hide');
          }
      });
    });
  });

    const ZoomPhoto = document.getElementById('ZoomPhoto');
    const ZoomPhotoImg = document.getElementById('ZoomPhotoImg');
    const ZoomPhotoDescription = document.getElementById('ZoomPhotoDescription');
    const boutonFermer = document.getElementById('ZoomPhotoClose');
    const boutonAvant = document.getElementById('photoAvant');
    const boutonApres = document.getElementById('photoAprès');
    let currentIndex = 0;

    function visibleItems() {
      return Array.from(figures).filter(item => !item.classList.contains('hide'));
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

    function fermerZoom() {
      ZoomPhoto.classList.remove('open');
    }

    figures.forEach((item) => {
      item.addEventListener('click', () => {
        const visible = visibleItems();
        const index = visible.indexOf(item);
        if (index > -1) openZoomPhoto(index)
        openZoomPhoto(index);
      });
    });


boutonFermer.addEventListener('click', fermerZoom);
boutonAvant.addEventListener('click', (e) => { e.stopPropagation(); openZoomPhoto(currentIndex - 1); });
boutonApres.addEventListener('click', (e) => { e.stopPropagation(); openZoomPhoto(currentIndex + 1); });

ZoomPhoto.addEventListener('click', (e) => {
  if (e.target === ZoomPhoto) fermerZoom();
});

document.addEventListener('keydown', (e) => {
  if (!ZoomPhoto.classList.contains('open')) return;
  if (e.key === 'Escape') fermerZoom();
  if (e.key === 'ArrowRight') openZoomPhoto(currentIndex + 1);
  if (e.key === 'ArrowLeft') openZoomPhoto(currentIndex - 1);
});
