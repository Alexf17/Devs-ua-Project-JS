// Import
// import ApiFilmoteka from './filmotekaApi';
import img from '../images/filmWrap.jpg';
import youtube from '../images/sprite.svg';
import { cleanerMarkup } from './cleanerMarkup';
import { searchGenresById } from './genresList';
import { renderFoo } from './renderMarkup';
import { refs } from './refs';
import { preloaderRefresh, preloaderRefreshOFF } from './preloader';
import { api } from './createMainMarkup';
import pagination from './pagination';

let globalCurrentpage = 1;

// const api = new ApiFilmoteka();

refs.headerFormEl.addEventListener('submit', onFormSubmit);
refs.paginationBox.addEventListener('click', handlerPaginationInput);

async function onFormSubmit(event) {
  event.preventDefault();
  api.setPageNumber(1);
  let query = event.target.elements[0].value.trim();
  refs.expFilmName = query;

  //Checking for query existance
  if (query) {
    preloaderRefresh();

    //Cleaning markup
    cleanerMarkup(refs.cardListEl);
    //Setting querry to api of ApiFilmoteka
    api.setFilmName(query);
    createMainMarkup(api.fetchFilmsByName());
    refs.headerFormEl.reset();
  } else {
    //Running error message function
    errorMessage();
    return;
  }
}

async function createMainMarkup(fetchedData) {
  //Getting results from API
  const results = await fetchedData;
  refs.fetchDataValue = results;
  //Chegking response from API
  if (!results.length) {
    await errorMessage();
  } else {
    refs.headerErrorEl.classList.add('visually-hidden');
    // получаем массив из елементов 'li' , переводим в строку с помощю join
    const filmCards = results
      .map(
        ({
          id,
          poster_path,
          title,
          genre_ids,
          release_date,
        }) => `<li class="film__item"><div class="test">
        <a class="film__link" id="${id}">
  <div class="film__wrap">
  <img src=${
    poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : img
  } class="film-item__img" alt="${title}" width="300">
  </div>
  <div class= "film__info">
  <div class="film__title-wrap">
  <h3 class="film__title">${title}</h3>
  </div>
  <div class="film__genres-and-date">
  <p class="film__genres">${
    searchGenresById(genre_ids) ? searchGenresById(genre_ids) : 'Unknown genre'
  }</p>
  <p class="film__release-date">${
    release_date ? new Date(release_date).getFullYear() : 'Nobody knows'
  }</p>
  </div>
  
   </div>
   </div>
   </a>
   <div class="wrap-youtube">
  <button type="button" class="btn-youtube" id="${id}">
    <svg class="svg-youtube">
      <use href="${youtube}#icon-youtube"></use>
    </svg>
  </button>
</div>
   </li>`
      )
      .join('');
    // Running render function
    renderFoo(filmCards, refs.cardListEl);
    preloaderRefreshOFF();
    pagination(api.pageNumber, api.totalPages);
    return filmCards;
  }
}

function errorMessage() {
  preloaderRefreshOFF();
  //Making message visible
  refs.headerErrorEl.classList.remove('visually-hidden');
  //Form element cleaning
  refs.headerFormEl.reset();
  cleanerMarkup(refs.paginationBox);
}

async function handlerPaginationInput(evt) {
  if (!api.getFilmName()) {
    return;
  } else {
    if (evt.target.nodeName !== 'LI') {
      return;
    }
    if (evt.target.textContent === '❮') {
      api.setPageNumber((globalCurrentpage -= 1));
      api.getFilmName();

      const filesFromBackend = await api.fetchFilmsByName();

      cleanerMarkup(refs.cardListEl);
      createMainMarkup(filesFromBackend);

      pagination(api.pageNumber, api.totalPages);
      preloaderRefreshOFF();
      return;
    }
    if (evt.target.textContent === '❯') {
      api.setPageNumber((globalCurrentpage += 1));
      api.getFilmName();
      const filesFromBackend = await api.fetchFilmsByName();

      cleanerMarkup(refs.cardListEl);
      createMainMarkup(filesFromBackend);

      pagination(api.pageNumber, api.totalPages);
      preloaderRefreshOFF();
      return;
    }
    if (evt.target.id === 'left-pagnDots') {
      api.setPageNumber((globalCurrentpage -= 3));

      api.getFilmName();
      const filesFromBackend = await api.fetchFilmsByName();

      cleanerMarkup(refs.cardListEl);
      createMainMarkup(filesFromBackend);
      preloaderRefreshOFF();
      pagination(api.pageNumber, api.totalPages);

      return;
    }

    if (evt.target.id === 'right-pagnDots') {
      api.setPageNumber((globalCurrentpage += 3));
      api.getFilmName();
      const filesFromBackend = await api.fetchFilmsByName();

      cleanerMarkup(refs.cardListEl);
      createMainMarkup(filesFromBackend);
      preloaderRefreshOFF();
      pagination(api.pageNumber, api.totalPages);

      return;
    }
    const page = evt.target.textContent;

    api.setPageNumber(Number(page));
    const filesFromBackend = await api.fetchFilmsByName();

    cleanerMarkup(refs.cardListEl);
    createMainMarkup(filesFromBackend);

    pagination(api.pageNumber, api.totalPages);
    preloaderRefreshOFF();
  }
}
