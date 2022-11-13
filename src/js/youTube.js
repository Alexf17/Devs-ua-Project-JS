import ApiFilmoteka from './filmotekaApi';
const api = new ApiFilmoteka();
import { refs } from './refs';
import { renderFoo } from './renderMarkup';
import { cleanerMarkup } from './cleanerMarkup';
import { Notify } from 'notiflix';

if (window.location.pathname === '/Devs-ua-Project-JS/index.html') {
  refs.cardListEl.addEventListener('click', onYoutubeClick);
}

refs.youTubeCloseBtn.addEventListener('click', onYoutubeClose);
refs.youTubeBackdrop.addEventListener('click', onBackdropYouTubeClose);

async function onYoutubeClick(evt) {
  evt.preventDefault();
  refs.bodyEl.addEventListener('keydown', onKeyAction);
  if (evt.target.parentNode.parentElement.nodeName === 'BUTTON') {
    refs.youTubeBackdrop.classList.remove('visually-hidden');
    refs.btnAnchorEl.classList.add('btn_anchor-hidden');
    refs.bodyEl.classList.add('no-scroll');
    const filmId = evt.target.parentNode.parentElement.id;
    api.setFilmId(filmId);
    const response = await api.fetchTrailers();
    if (response.length >= 1) {
      createIframe(response[0].key);
    } else if (!response.length) {
      Notify.warning('There are no trailers for this movie');
      refs.youTubeBackdrop.classList.add('visually-hidden');
      refs.bodyEl.classList.remove('no-scroll');
      return;
    }
  }
}

function createIframe(results) {
  const iframe = `<iframe class="iframe" src="https://www.youtube.com/embed/${results}" frameborder="0"></iframe>`;
  renderFoo(iframe, refs.youTubeWrap);
}

function onYoutubeClose() {
  closeModalYouTube();
}

function onBackdropYouTubeClose(e) {
  if (e.target === e.currentTarget) {
    closeModalYouTube();
  }
}

function onKeyAction({ key }) {
  if (key === 'Escape') {
    closeModalYouTube();
  }
}

//
function closeModalYouTube() {
  refs.bodyEl.removeEventListener('keydown', onKeyAction);
  refs.youTubeBackdrop.classList.add('visually-hidden');
  refs.btnAnchorEl.classList.remove('btn_anchor-hidden');
  refs.bodyEl.classList.remove('no-scroll');
  cleanerMarkup(refs.youTubeWrap);
}
