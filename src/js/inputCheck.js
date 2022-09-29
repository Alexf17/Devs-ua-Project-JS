import ApiFilmoteka from './filmotekaApi';
import { cleanerMarkup } from './cleanerMarkup';
import { searchGenresById } from './genresList';
import { renderFoo } from './renderMarkup';
const headerformEl = document.querySelector('.header__form');
const headerInputEl = document.querySelector('.header__form');
const cardListEl = document.querySelector('ul.card__list');
const headerErrorEl = document.querySelector('.header__error');
console.log(headerInputEl);
const api = new ApiFilmoteka();
headerInputEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  console.log(event.target.elements[0].value);
  let query = event.target.elements[0].value;
  console.log(query);
  if (query === '') {
    errorMessage();
    return;
  } else {
    cleanerMarkup(cardListEl);
    //Setting querry to api of ApiFilmoteka
    api.setFilmName(query);
    createMainMarkup(api.fetchFilmsByName());
  }
}

async function createMainMarkup(xxx) {
  //получаем список фильмов по запросу
  const results = await xxx;
  if (results.length !== 0) {
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
  <img src="https://image.tmdb.org/t/p/original${poster_path}" class="film-item__img" alt="${title}" width="300">
  </div>
  <div>
  <h3 class="film__title">${title}</h3>
  </div>
  <div class="film__genres-date">
  <p class="film__genres">${searchGenresById(genre_ids)}</p>
  <p class="film__release-date">${new Date(release_date).getFullYear()}</p>
  
   </div>
   </a>
   </li>`
      )
      .join('');
    // возвращаем строку
    renderFoo(filmCards, cardListEl);
    return filmCards;
  } else {
    errorMessage();
  }
}

function errorMessage() {
  headerErrorEl.classList.remove('visually-hidden');
  headerformEl.reset();
}
