import { refs } from './refs';
import { renderFoo } from './renderMarkup';
import img from '../images/filmWrap.jpg';
import { searchGenresById } from './genresList';
import { cleanerMarkup } from './cleanerMarkup';
let libBtnId = '';

refs.libBtnContainerEl.addEventListener('click', onLibBtnClick);

//До выбора списка избранного , отображаем фильмы из watched

function onLibBtnClick(e) {
  // alert(2);
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log('e.target.id', e.target.id);
  libBtnId = e.target.id;
  // console.log('ID c onLibBtnClick :', libBtnId);
  createLibraryMarkup(libBtnId);
  localStorage.setItem('Library', libBtnId);
}

//Рендер коолекциии из watch
createLibraryMarkup('watched', true);

export async function createLibraryMarkup(onBtnClick, isWatched = false) {
  //получаем список фильмов по запросу
  let results = null;
  if (isWatched) {
    localStorage.setItem('Library', 'watched');
  }
  let localStorageData = JSON.parse(localStorage.getItem('localStorageData'));

  if (onBtnClick === 'watched') {
    results = localStorageData.watchedFilms;
  }

  if (onBtnClick === 'queue') {
    results = localStorageData.queueFilms;
  }

  refs.fetchDataValue = results;
  // cleanerMarkup(results.id);

  // console.log(results);
  // получаем массив из елементов 'li' , переводим в строку с помощю join
  const filmCards = results
    .map(
      ({
        id,
        poster_path,
        title,
        genre_ids,
        release_date,
        vote_average,
      }) => `<li class="film__item" id=${id}_wrap>
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
    release_date ? new Date(release_date).getFullYear() : 'Nobody know'
  }</p>
  <span class="blabla">${vote_average}</span>
   </div>
   </div>
   </a>
   </li>`
    )
    .join('');

  cleanerMarkup(refs.cardListEl);
  // возвращаем строку
  renderFoo(filmCards, refs.cardListEl);
}
