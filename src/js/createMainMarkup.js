import axios from 'axios';

// создаем обьект жанров фильмов ключ: значения.
const genresList = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  27: 'Horror',
  36: 'History',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

//создаем функцию searchGenresById, которая возвращает строку с жанрами на основе  genre_ids,
const searchGenresById = idArrayList => {
  return idArrayList
    .map(item => {
      return genresList[item];
    })
    .join(', ');
};

// функция создания списка фильмов
const createMainMarkup = async () => {
  //получаем список фильмов по запросу
  const results = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=74bfe718a55ac7916c6e6ad87b15f944'
  );

  // получаем массив из елементов 'li' , переводим в строку с помощю join
  const filmCards = results.data.results
    .map(
      ({
        id,
        poster_path,
        title,
        name,
        genre_ids,
        release_date,
      }) => `<li class="film__item">
        <a class="film__link" id="${id}">
  <div class="film__wrap">
  <img src="https://image.tmdb.org/t/p/original${poster_path}" class="film-item__img" alt="${title}" width="300">
  </div>
  <div>
  <h3 class="film__title">${
    title ? title.toUpperCase() : name.toUpperCase()
  }</h3>
  </div>
  <div class="film__genres-date">
  <p class="film__genres">${searchGenresById(genre_ids)}</p>
  <p class="film__release-date">${new Date(release_date).getFullYear()}</p>
  
   </div>
   </a>
   </li>`
    )
    .join('');
  console.log(filmCards);
  // возвращаем строку
  return filmCards;
};
// вызываем функцию
createMainMarkup();
