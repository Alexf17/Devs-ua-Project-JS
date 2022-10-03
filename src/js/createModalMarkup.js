// Объявляем функцию, которая создает разметку одного модального окна при нажатии на карточку фильма
import img from '../images/filmWrap.jpg';
import {
  isExistsQueueObjFilm,
  isExistsWatchedObjFilm,
} from './localstorageApp';
import { refs } from './refs';
let localStorageData = JSON.parse(localStorage.getItem('localStorageData'));
export function createModalMarkup(data) {
  console.log('data', data);
  // refs.fetchDataValue = data;
  // Делаем деструктуризацию полученных файлов с бэкэнда
  const {
    title,
    original_title,
    overview,
    poster_path,
    popularity,
    vote_average,
    vote_count,
    genres,
    id,
  } = data;

  let text_btn_watch = '';
  let text_btn_queue = '';
  let watched_checked = '';
  let queue_checked = '';

  // isExistsWatchedObjFilm(id)
  //   ? (text_btn_watch = 'remove')
  //   : (text_btn_watch = 'add to watched');
  // isExistsQueueObjFilm(id)
  //   ? (text_btn_queue = 'remove')
  //   : (text_btn_queue = 'add to queue');

  if (isExistsWatchedObjFilm(id)) {
    text_btn_watch = 'remove';
    watched_checked = 'button-modal__checked';
  } else {
    text_btn_watch = 'add to watched';
  }
  if (isExistsQueueObjFilm(id)) {
    text_btn_queue = 'remove';
    queue_checked = 'button-modal__checked';
  } else {
    text_btn_queue = 'add to queue';
  }

  //   Выстаскиваем из полученного объекта названия жанров
  const genresList = genres.map(({ name }) => name).join(', ');

  // Записываем разметку будущего модального окна в переменную и присваиваем ей необходимую динамическую информацию,
  //  а так же присваиваем кнопкам значение каждого айди фильма, для будущей записи выбранных фильмов в локал сторедж.
  const filmModalMarkup = `<div class="infoFilm__left">
      <img
          src=${
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : img
          } class="infoFilm__img" alt="${title}"
          
        > 
      </div>
      <div class="infoFilm__right">
        <h2 class="infoFilm___title">"${title}"</h2>
<table class="about-film">
  <tr>
    <td class="about-film__left">Vote / Votes</td>
    <td class="about-film__right">
      <span class="vote-average">${vote_average}</span
      ><span class="separator">/</span
      ><span class="votes-count">${vote_count}</span>
    </td>
  </tr>
  <tr>
    <td class="about-film__left">Popularity</td>
    <td class="about-film__right">${popularity}</td>
  </tr>
  <tr>
    <td class="about-film__left">Original Title</td>
    <td class="about-film__right">${original_title}</td>
  </tr>
  <tr>
    <td class="about-film__left">Genre</td>
    <td class="about-film__right">${genresList}</td>
  </tr>
</table>
        <h3 class="about__title">About</h3>
        <p class="about__text">${overview}</p>
        <ul class="button-list">
          <li class="button-list__item">
            <button
              type="button"
              id="${id}"
              class="button-list__button button-modal__white ${watched_checked}"
              data-action="watched"
            >
              ${text_btn_watch}
            </button>
          </li>
          <li class="button-list__item">
            <button
              type="button"
            id="${id}"
              class="button-list__button button-modal__white ${queue_checked}"
              data-action="queue"
            >
              ${text_btn_queue}
            </button>
          </li>
        </ul>
  </div>`;
  // Возвращаем результат работы функции

  return filmModalMarkup;
}
