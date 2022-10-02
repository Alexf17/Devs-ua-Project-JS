import { refs } from './refs';

// data-action="queue"
// data-action="watched"

// создаю и инициализирую переменную для работы с localstorage
let localStorageData = JSON.parse(
  localStorage.getItem('localStorageData')
) || {
  queueFilms: [],
  watchedFilms: [],
};

refs.infoFilmWrapEl.addEventListener('click', onInfoFilmWrapClick);

function onInfoFilmWrapClick(e) {
  // Get array of objects response
  let fetchDataArr = refs.fetchDataValue;
  // console.log(fetchDataArr)

  // фильтр собития только на кнопку
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  // Get link on watchedBtn
  if (e.target.dataset.action === 'watched') {
    let watchedBtn = e.target;
    // Get id btn watched
    let idFilmWatched = +e.target.id;

    // console.log('Click on e.target.dataset.action watchedBTN', watchedBtn);
    console.log('id кнопки :', idFilmWatched);

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
        } else {
          console.log('уже есть не записываю', 'localStorageData.length свойство watchedFilms:', localStorageData.watchedFilms.length);
          removeObjFilm(localStorageData.watchedFilms, idFilmWatched);
          localStorage.setItem('localStorageData',JSON.stringify(localStorageData));
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
          // queueBtn.textContent = 'remove';
        } else {
          console.log('уже есть не записываю', 'localStorageData.length свойство queueFilms:', localStorageData.queueFilms.length);
          removeObjFilm(localStorageData.queueFilms, idFilmQueue);
          localStorage.setItem('localStorageData',JSON.stringify(localStorageData));
          setStatusAddToQueue(queueBtn);
          // console.log(localStorageData.queueFilms);
        }
      }
    }
  }
}

export function isExistsWatchedObjFilm(id) {
  let answer = null;
console.log(localStorageData.watchedFilms)
  for (const objFilm of localStorageData.watchedFilms) {
    if (objFilm.id === id) {
      answer = true;
    } else {
      answer = false;
    }
  }

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
