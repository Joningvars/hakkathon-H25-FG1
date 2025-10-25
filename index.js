import { MOVIES, SLIDER_MOVIES } from './movies.js';

// Fallback poster mynd ef engin er til staðar
const FALLBACK_POSTER =
  'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg';

// Grabbing á elementum úr DOM
const grid = document.getElementById('grid');
const empty = document.getElementById('empty');
const q = document.getElementById('q');

// Fall til að búa til card element fyrir myndir í grid
function card(m) {
  const li = document.createElement('article');
  li.className = 'card';
  li.setAttribute('data-id', m.id);
  li.innerHTML = `
        <img class="poster" src="${
          m.image || m.movie_banner || ''
        }" onerror="this.onerror=null;this.src='${FALLBACK_POSTER}'" alt="${
    m.title
  }" />
        <div class="meta">
          <div class="title">${m.title}</div>
          <div class="year">${m.release_date || ''}</div>
        </div>`;
  return li;
}

// Fall til að búa til slide element fyrir slider
function slide(m) {
  const div = document.createElement('div');
  div.className = 'swiper-slide';
  div.innerHTML = `
        <img src="${
          m.image
        }" onerror="this.onerror=null;this.src='${FALLBACK_POSTER}'" alt="${
    m.title
  }" />
        <div class="slide-overlay">
          <div class="slide-meta">
            <h2 class="slide-title">${m.title}</h2>
            ${m.description ? `<p class="slide-desc">${m.description}</p>` : ''}
            <button class="btn-watch" data-id="${m.id}">Play</button>
            <button class="btn-info" data-id="${m.id}">More Info</button>
          </div>
        </div>
      `;
  return div;
}

// Hjálpar fall til að rendera lista af myndum í gefinn selector
function renderTo(selector, list) {
  const container = document.querySelector(selector);
  if (!container) return;
  let gridEl = container.querySelector('.grid');
  if (!gridEl) {
    gridEl = document.createElement('div');
    gridEl.className = 'grid';
    container.appendChild(gridEl);
    gridEl.addEventListener('click', (e) => {
      const article = e.target.closest('article.card');
      if (!article) return;
      const id = article.getAttribute('data-id');
      if (id) window.location.href = `watch.html?id=${id}`;
    });
  }
  gridEl.innerHTML = '';
  list.forEach((m) => gridEl.appendChild(card(m)));
}

// Fall til að rendera allar myndir
function renderSections(sourceList) {
  const FEATURED_IDS = new Set(['1899', 'Black_Panther', 'john_wick', 'Thor']);
  const isFeatured = (m) => m.featured === true || FEATURED_IDS.has(m.id);
  renderTo('.featured-movies', sourceList.filter(isFeatured).slice(0, 10));
  renderTo(
    '.action-movies',
    sourceList.filter((m) => m.category === 'Action').slice(0, 10)
  );
  renderTo(
    '.horror-movies',
    sourceList.filter((m) => m.category === 'Horror').slice(0, 10)
  );
  renderTo(
    '.comedy-movies',
    sourceList.filter((m) => m.category === 'Comedy').slice(0, 10)
  );
  renderTo(
    '.sci-fi-movies',
    sourceList.filter((m) => m.category === 'Sci-Fi').slice(0, 10)
  );
  renderTo(
    '.animation-movies',
    sourceList.filter((m) => m.category === 'Animation').slice(0, 10)
  );
  if (empty) empty.hidden = sourceList.length !== 0;
}

// fall til að fylla slider með myndum
function populateSlider(list) {
  const wrapper = document.querySelector('.swiper-wrapper');
  if (!wrapper) return;
  wrapper.innerHTML = '';
  list.forEach((m) => wrapper.appendChild(slide(m)));
  if (window && window.swiper && typeof window.swiper.update === 'function') {
    window.swiper.update();
  }

  // Bætum event listener við slider til að handle-a play takkann
  wrapper.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.matches('button.btn-watch')) {
      const id = target.getAttribute('data-id');
      window.location.href = `watch.html?id=${id}`;
    }
  });
}

//Þetta fall loadar öllu efni
function load() {
  populateSlider(SLIDER_MOVIES);
  renderSections(MOVIES);
}

// Bætum event listener við search input til að filter-a myndir
q.addEventListener('input', () => {
  const term = q.value.trim().toLowerCase();
  if (!term) return renderSections(MOVIES);
  const filtered = MOVIES.filter((m) => m.title.toLowerCase().includes(term));
  renderSections(filtered);
});

// Hér köllum við í load fallið til að byrja að load-a efninu við hverja hleðslu síðunnar
load();
