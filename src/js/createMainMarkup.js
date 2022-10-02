import { searchGenresById } from './genresList';
import { refs } from './refs';
import ApiFilmoteka from './filmotekaApi';
import { renderFoo } from './renderMarkup';
import img from '../images/filmWrap.jpg';
import pagination from './pagination';
const api = new ApiFilmoteka();

import { refs } from './refs';
const cardListEl = document.querySelector('ul.card__list');

// функция создания списка фильмов
export async function createMainMarkup() {
  //получаем список фильмов по запросу
  const results = await api.fetchPopularsFilms();
  refs.fetchDataValue = results;
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
  <div class="wrap__film>
  <div class="film__title-wrap">
  <h3 class="film__title">${title}</h3>
  </div>
  <div class="film__genres-and-date">
  <p class="film__genres">${
    searchGenresById(genre_ids) ? searchGenresById(genre_ids) : 'Unknown genre'
  }</p>
  <p class="film__release-date">${
    //проверяем через тернарник
    release_date ? new Date(release_date).getFullYear() : 'Nobody knows'
  }</p>

   </div>
   </div>
   </a>
   </li>`
    )
    .join('');

  // возвращаем строку
  renderFoo(filmCards, refs.cardListEl);

  await pagination(api.pageNumber, api.totalPages);

  return filmCards;
}
// вызываем функцию render
createMainMarkup();
