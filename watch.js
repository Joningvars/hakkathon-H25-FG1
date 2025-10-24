import { MOVIES } from './movies.js';

function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function setPoster(videoEl, posterUrl) {
  if (posterUrl) {
    videoEl.setAttribute('poster', posterUrl);
  }
}

function init() {
  const id = getParam('id');
  const movie = MOVIES.find((m) => m.id === id);
  const titleEl = document.getElementById('title');
  const player = document.getElementById('player');

  if (movie) {
    titleEl.textContent = movie.title;
    setPoster(player, movie.image);
  } else {
    titleEl.textContent = 'Unknown Title';
  }
}

init();
