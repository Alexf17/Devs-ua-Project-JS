import { refs } from "./refs";

// data-action="queue"
// data-action="watched"

// создаю и инициализирую переменную для работы с localstorage
let localStorageData = JSON.parse(localStorage.getItem('localStorageData')) || {
  queueFilms: [],
  watchedFilms: [],
};


refs.infoFilmWrapEl.addEventListener('click', onInfoFilmWrapClick);

function onInfoFilmWrapClick(e) {
  // получаю массив объектов респонса
  const fetchDataArr = refs.fetchDataValue;
  console.log(fetchDataArr)


  // фильтр собития только на кнопку
  if (e.target.nodeName !== 'BUTTON') {
    return
  }
  // получаю ссылку на кнопку watchedBtn
  if (e.target.dataset.action === 'watched') {
    let watchedBtn = e.target;
     // получаю id кнопки watched
    let idFilmWatched = +e.target.id;

    console.log('Click on e.target.dataset.action watchedBTN', watchedBtn);
    console.log('id кнопки :', idFilmWatched);
    
    for (const filmObj of fetchDataArr) {
        // console.log(filmObj.id);
        if (filmObj.id === idFilmWatched) {
          let filmWatchedObjAdd = filmObj;
            console.log(filmWatchedObjAdd);
          
            // записываю в локал велью
          if (!isExistsWatchedObjFilm(idFilmWatched)) {
            console.log('сработало записывает');
            localStorageData.watchedFilms.push(filmWatchedObjAdd);

            localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
            console.log('Длина localStorageData свойство watchedFilms: ', localStorageData.watchedFilms.length)
          } else {
            console.log('уже есть не записываю', 'localStorageData.length свойство watchedFilms:', localStorageData.watchedFilms.length);
          }


        }
      
      }
    
    
  }

  // получаю ссылку на кнопку queueBtn
  if (e.target.dataset.action === 'queue') {
    let queueBtn = e.target;
    console.log('Click on e.target.dataset.action queueBTN', queueBtn);

    // получаю id кнопки queue
    let idFilmQueue = +e.target.id;
    console.log('id кнопки :', idFilmQueue);
     
    for (const filmObj of fetchDataArr) {
        // console.log(filmObj.id);
        if (filmObj.id === idFilmQueue) {
          let filmQueueObjAdd = filmObj;
            console.log(filmQueueObjAdd);
          
            // записываю в локал велью
          if (!isExistsQueueObjFilm(idFilmQueue)) {
            console.log('сработало записывает');
            localStorageData.queueFilms.push(filmQueueObjAdd);

            localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
            console.log('Длина localStorageData свойство queueFilms: ', localStorageData.queueFilms.length)
          } else {
            console.log('уже есть не записываю', 'localStorageData.length свойство queueFilms:', localStorageData.queueFilms.length);
          }


        }
      
      }
    
  }

}

export function isExistsWatchedObjFilm(id) {
  let answer = null;
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