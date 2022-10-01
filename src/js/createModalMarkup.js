// Объявляем функцию, которая создает разметку одного модального окна при нажатии на карточку фильма
import img from '../images/filmWrap.jpg';
export function createModalMarkup(data) {
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
              class="button-list__button button-modal__orange"
              data-action="watched"
            >
              Add to watched
            </button>
          </li>
          <li class="button-list__item">
            <button
              type="button"
            id="${id}"
              class="button-list__button button-modal__white"
              data-action="queue"
            >
              Add to queue
            </button>
          </li>
        </ul>
  </div>`;
  // Возвращаем результат работы функции
  return filmModalMarkup;
}
