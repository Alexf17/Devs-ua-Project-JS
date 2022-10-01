// Import
import ApiFilmoteka from './filmotekaApi';
import img from '../images/filmWrap.jpg';
import { cleanerMarkup } from './cleanerMarkup';
import { searchGenresById } from './genresList';
import { renderFoo } from './renderMarkup';
import { refs } from './refs';
import { preloaderRefresh, preloaderRefreshOFF } from './preloader';
const headerformEl = document.querySelector('.header__form');
const cardListEl = document.querySelector('ul.card__list');
const headerErrorEl = document.querySelector('.header__error');


//Initialize class instance

const api = new ApiFilmoteka();
headerformEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
  let query = event.target.elements[0].value.trim();
  //Checking for query existance
  if (query) {
    preloaderRefresh();
    //Cleaning markup
    cleanerMarkup(cardListEl);
    //Setting querry to api of ApiFilmoteka
    api.setFilmName(query);
    createMainMarkup(api.fetchFilmsByName());
  } else {
    //Running error message function
    errorMessage();
    return;
  }
}

async function createMainMarkup(fetchedData) {
  //Getting results from API
  const results = await fetchedData;
  //Chegking response from API
  if (!results.length) {
    await errorMessage();
  } else {
    headerErrorEl.classList.add('visually-hidden');
    // получаем массив из елементов 'li' , переводим в строку с помощю join
    const filmCards = results
      .map(
        ({
          id,
          poster_path,
          title,
          genre_ids,
          release_date,
        }) => `<li class="film__item">
        <a class="film__link" id="${id}">
  <div class="film__wrap">
  <img src=${
    poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : img
  } class="film-item__img" alt="${title}" width="300">
  </div>
  <div class="film__title-wrap">
  <h3 class="film__title">${title}</h3>
  </div>
  <div class="film__genres-and-date">
  <p class="film__genres">${searchGenresById(genre_ids)}</p>
  <p class="film__release-date">${
    release_date ? new Date(release_date).getFullYear() : 'Nobody know'
  }</p>
  
  
   </div>
   </a>
   </li>`
      )
      .join('');
    // Running render function
    renderFoo(filmCards, cardListEl);
    preloaderRefreshOFF();
    return filmCards;
  }
}

function errorMessage() {
  preloaderRefreshOFF();
  //Making message visible
  headerErrorEl.classList.remove('visually-hidden');
  //Form element cleaning
  headerformEl.reset();
}
