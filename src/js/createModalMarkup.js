// Объявляем функцию, которая создает разметку одного модального окна при нажатии на карточку фильма
function createModalMarkup(data) {
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
  const genresList = genres.map(({ name }) => name.join(', '));

  // Записываем разметку будущего модального окна в переменную и присваиваем ей необходимую динамическую информацию,
  //  а так же присваиваем кнопкам значение каждого айди фильма, для будущей записи выбранных фильмов в локал сторедж.
  const filmModalMarkup = `<div class="infoFilm__left">
        <!-- <img
          src="https://image.tmdb.org/t/p/original${poster_path}"
          alt="${title}"
          class="infoFilm__img"
        /> -->
      </div>
      <div class="infoFilm__right">
        <h2 class="infoFilm___title">"${title}"</h2>

        <div class="about-film">
          <ul class="left-list">
            <li class="left-list__item">Vote / Votes</li>
            <li class="left-list__item">Popularity</li>
            <li class="left-list__item">Original Title</li>
            <li class="left-list__item">Genre</li>
          </ul>
          <ul class="right-list">
            <li class="right-list___item">
              <span class="vote-average">${vote_average}</span><span class="separator">/</span
              ><span class="votes-count">${vote_count}</span>
            </li>
            <li class="right-list___item">${popularity}</li>
            <li class="right-list___item">${original_title}</li>
            <li class="right-list___item">${genresList}</li>
          </ul>
        </div>
        <h3 class="about__title">About</h3>
        <p class="about__text">${overview}</p>
        <ul class="button-list">
          <li class="button-list__item">
            <button
              type="button"
              id="${id}"
              class="button-list__button button-modal__orange"
            >
              Add to watched
            </button>
          </li>
          <li class="button-list__item">
            <button
              type="button"
            id="${id}"
              class="button-list__button button-modal__white"
            >
              Add to queue
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>`;
  // Возвращаем результат работы функции
  return filmModalMarkup;
}
