import { refs } from './refs';
import { cleanerElement } from './cleanerMarkup';
import { searchGenresById } from './genresList';
// import { createLibraryMarkup } from './createLibraryMarkup';

// data-action="queue"
// data-action="watched"

const addCard = data => {
  // alert(5);
  console.log(data, 'data123123');
  const card = `<li class="film__item" id=${data.id}_wrap>
        <a class="film__link" id="${data.id}">
  <div class="film__wrap">
      <img src=${
        data.poster_path
          ? `https://image.tmdb.org/t/p/original${data.poster_path}`
          : img
      } class="film-item__img" alt="${data.title}" width="300">
  </div>
  <div class="wrap__film>
  <div class="film__title-wrap">
  <h3 class="film__title">${data.title}</h3>
  </div>
  <div class="film__genres-and-date">
  <p class="film__genres">${
    searchGenresById(data.genre_ids)
      ? searchGenresById(data.genre_ids)
      : 'Unknown genre'
  }</p>
  <p class="film__release-date">${
    //проверяем через тернарник
    data.release_date
      ? new Date(data.release_date).getFullYear()
      : 'Nobody know'
  }</p>
  <span class="blabla">${data.vote_average}</span>
   </div>
   </div>
   </a>
   </li>`;
  refs.cardListEl.insertAdjacentHTML('beforeend', card);
};

// создаю и инициализирую переменную для работы с localstorage
let localStorageData = JSON.parse(localStorage.getItem('localStorageData')) || {
  queueFilms: [],
  watchedFilms: [],
};

refs.infoFilmWrapEl.addEventListener('click', onInfoFilmWrapClick);
console.log(window.location.pathname)
function onInfoFilmWrapClick(e) {
  // const isMainPage = refs.mainList;

  // console.log('isMainPage', isMainPage.getAttribute('data-action'));
  console.log(window.location);
  // Get array of objects response
  let fetchDataArr = refs.fetchDataValue;
  // console.log(fetchDataArr)

  // фильтр собития только на кнопку
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  // Get link on watchedBtn
  if (e.target.dataset.action === 'watched') {
    // console.log('e.target', e.target.dataset);
    // alert(10);
    let watchedBtn = e.target;
    // Get id btn watched
    let idFilmWatched = +e.target.id;

    // console.log('Click on e.target.dataset.action watchedBTN', watchedBtn);
    console.log('id кнопки :', idFilmWatched);
    console.log('fetchDataArr', fetchDataArr);
    for (const filmObj of fetchDataArr) {
      // console.log(filmObj.id);
      if (filmObj.id === idFilmWatched) {
        let filmWatchedObjAdd = filmObj;
        console.log(filmWatchedObjAdd);
        // зSet watched velue to localsrorage
        if (!isExistsWatchedObjFilm(idFilmWatched)) {
          // console.log('сработало записывает');
          localStorageData.watchedFilms.push(filmWatchedObjAdd);
          localStorage.setItem(
            'localStorageData',
            JSON.stringify(localStorageData)
          );
          // console.log('Длина localStorageData свойство watchedFilms: ', localStorageData.watchedFilms.length);
          setStatusRemove(watchedBtn);
          if (window.location.pathname === '/Devs-ua-Project-JS/my-library.html' || '/my-library.html') {
            if (localStorage.getItem('Library') === 'watched') {
              addCard(filmObj);
            }
          }
          // createLibraryMarkup('watched');
        } else {
          console.log(
            'уже есть не записываю',
            'localStorageData.length свойство watchedFilms:',
            localStorageData.watchedFilms.length
          );
          removeObjFilm(localStorageData.watchedFilms, idFilmWatched);
          localStorage.removeItem('localStorageData');
          if (window.location.pathname === '/Devs-ua-Project-JS/my-library.html' || '/my-library.html') {
            console.log('filmObj.id', filmObj.id);
            cleanerElement(document.getElementById(filmObj.id + '_wrap'));
          }

          localStorage.setItem(
            'localStorageData',
            JSON.stringify(localStorageData)
          );
          setStatusAddToWatched(watchedBtn);
        }
      }
    }
  }

  // Get link to queueBtn
  if (e.target.dataset.action === 'queue') {
    let queueBtn = e.target;
    // console.log('Click on e.target.dataset.action queueBTN', queueBtn);

    // Get id btn queue
    let idFilmQueue = +e.target.id;

    for (const filmObj of fetchDataArr) {
      // console.log(filmObj.id);
      if (filmObj.id === idFilmQueue) {
        let filmQueueObjAdd = filmObj;
        // console.log(filmQueueObjAdd);

        //Set queue velue to localsrorage
        if (!isExistsQueueObjFilm(idFilmQueue)) {
          // console.log('сработало записывает');
          localStorageData.queueFilms.push(filmQueueObjAdd);

          localStorage.setItem(
            'localStorageData',
            JSON.stringify(localStorageData)
          );
          // console.log('Длина localStorageData свойство queueFilms: ', localStorageData.queueFilms.length);
          setStatusRemove(queueBtn);
          if (window.location.pathname === '/Devs-ua-Project-JS/my-library.html' || '/my-library.html') {
            if (localStorage.getItem('Library') === 'queue') {
              addCard(filmObj);
            }
          }
          // queueBtn.textContent = 'remove';
        } else {
          console.log(
            'уже есть не записываю',
            'localStorageData.length свойство queueFilms:',
            localStorageData.queueFilms.length
          );
          removeObjFilm(localStorageData.queueFilms, idFilmQueue);
          localStorage.removeItem('localStorageData');
          if (window.location.pathname === '/Devs-ua-Project-JS/my-library.html' || '/my-library.html') {
            console.log('filmObj.id', filmObj.id);
            cleanerElement(document.getElementById(filmObj.id + '_wrap'));
          }
          localStorage.setItem(
            'localStorageData',
            JSON.stringify(localStorageData)
          );
          setStatusAddToQueue(queueBtn);
          // console.log(localStorageData.queueFilms);
        }
      }
    }
  }
}

export function isExistsWatchedObjFilm(id) {
  console.log('id', id);
  let answer = false;
  console.log(localStorageData.watchedFilms);
  for (const objFilm of localStorageData.watchedFilms) {
    if (objFilm.id === id) {
      answer = true;
    }
  }
  console.log('answer', answer);

  return answer;
}

export function isExistsQueueObjFilm(id) {
  let answer = null;

  for (const objQueueFilm of localStorageData.queueFilms) {
    if (objQueueFilm.id === id) {
      answer = true;
    } else {
      answer = false;
    }
  }

  return answer;
}

function removeObjFilm(propArr, checkId) {
  for (let i = 0; i < propArr.length; i++) {
    if (propArr[i].id === checkId) {
      propArr.splice(i, 1);
    }
  }
}

function setStatusRemove(btnRef) {
  btnRef.textContent = 'remove';
  btnRef.classList.add('button-modal__checked');
}

function setStatusAddToQueue(btnRef) {
  btnRef.textContent = 'add to queue';
  btnRef.classList.remove('button-modal__checked');
}

function setStatusAddToWatched(watchedBtnRef) {
  watchedBtnRef.textContent = 'add to watched';
  watchedBtnRef.classList.remove('button-modal__checked');
}
