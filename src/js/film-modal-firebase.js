import DataStorage from './userService/data-storage';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { FIREBASECFG } from './firebase-cfg';
import { createModalMarkup } from './createModalMarkup';
import {refs} from './modal-film-info';

const app = initializeApp(FIREBASECFG);
const db = getDatabase(app);
const auth = getAuth(app);
const filmsListRef = document.querySelector('.films');
const closeBtnRef = document.querySelector('.closeModal');
const modal = document.querySelector('.modal__container');
const libraryBtnRef = document.querySelector('.header__list-link');

const userData = {
  queue: {},
  watched: {},
};
new DataStorage(userData);

let modalId;
const ids = [];

function onWatchedModalBtnClick(e) {
  const filmName = document.querySelector('.infoFilm___title');
  const watchedModalBtn = document.querySelector('.button-list__button');
  const userData = {
    queue: {},
    watched: {},
  };
  const firebase = new DataStorage(userData);

  if (watchedModalBtn.classList.contains('button-modal__orange')) {
    userData.watched[e.target.dataset.id] = filmName.textContent;
    firebase.delWatched();
    watchedModalBtn.textContent = 'Add to watched';
   
    if (libraryBtnRef.classList.contains('header__list-link--accent')) {
      onAuthStateChanged(auth, user => {
        if (user) {
          const libDataBaseWatched = `users/${user.uid}/lib/watched/`;

          get(ref(db, libDataBaseWatched))
            .then(snapshot => {
              if (snapshot.exists()) {
                const ids = Object.keys(snapshot.val());
                createModalMarkup(ids);
              } else {
                refs.filmList.innerHTML = '';
                
              }
            })
            .catch(console.error);
        }
      });
    }
  } else {
    firebase.watched = {
      [e.target.dataset.id]: filmName.textContent,
    };

    if (libraryBtnRef.classList.contains('header__list-link--accent')) {
      onAuthStateChanged(auth, user => {
        if (user) {
          const libDataBaseWatched = `users/${user.uid}/lib/watched/`;

          get(ref(db, libDataBaseWatched))
            .then(snapshot => {
              if (snapshot.exists()) {
                const ids = Object.keys(snapshot.val());
                resetErrorStyles();
                renderMarkupByIds(ids);
              }
            })
            .catch(console.error);
        }
      });
    }

    watchedModalBtn.textContent = 'Remove';
    
  }

  watchedModalBtn.classList.toggle('button-modal__orange');
}

// function onQueueModalBtnClick(e) {
//   const filmName = document.querySelector('.film__title');
//   const queueModalBtn = document.querySelector('.btn__queue');
//   const userData = {
//     queue: {},
//     watched: {},
//   };
//   const firebase = new dataStorage(userData);

//   if (queueModalBtn.classList.contains('active')) {
//     userData.queue[e.target.dataset.id] = filmName.textContent;
//     firebase.delQueue();
//     if (libraryBtnRef.classList.contains('current')) {
//       onAuthStateChanged(auth, user => {
//         if (user) {
//           const libDataBaseWatched = `users/${user.uid}/lib/queue/`;

//           get(ref(db, libDataBaseWatched))
//             .then(snapshot => {
//               if (snapshot.exists()) {
//                 const ids = Object.keys(snapshot.val());
//                 renderMarkupByIds(ids);
//               } else {
//                 filmsListRef.innerHTML = '';
//                 addErrorStyles();
//               }
//             })
//             .catch(console.error);
//         }
//       });
//     }
//     queueModalBtn.textContent = 'Add to queue';
//     if (lng === "uk") {
//       queueModalBtn.textContent = 'Додати до черги'
//     }
//   } else {
//     firebase.queue = {
//       [e.target.dataset.id]: filmName.textContent,
//     };

//     if (libraryBtnRef.classList.contains('current')) {
//       onAuthStateChanged(auth, user => {
//         if (user) {
//           const libDataBaseWatched = `users/${user.uid}/lib/queue/`;

//           get(ref(db, libDataBaseWatched))
//             .then(snapshot => {
//               if (snapshot.exists()) {
//                 const ids = Object.keys(snapshot.val());
//                 resetErrorStyles();
//                 renderMarkupByIds(ids);
//               }
//             })
//             .catch(console.error);
//         }
//       });
//     }
//     if (lng === 'en') {
//       queueModalBtn.textContent = 'Remove';
//     } else {
//       queueModalBtn.textContent = 'Видалити';
//     }
//   }
//   queueModalBtn.classList.toggle('active');
// }


// // slider functions
// function slider(e) {
//   if (e.code === 'ArrowRight') {
//     if (ids.indexOf(modalId) === ids.length - 1) return;
//     filmsApi.id = ids[ids.indexOf(modalId) + 1];
//     onArrowsKeydown();
//   }

//   if (e.code === 'ArrowLeft') {
//     if (ids.indexOf(modalId) === 0) return;
//     filmsApi.id = ids[ids.indexOf(modalId) - 1];
//     onArrowsKeydown();
//   }
// }

// async function onArrowsKeydown() {
//   const filmImg = document.querySelector('.film__image');
//   const filmInfo = document.querySelector('.film__information');
//   filmImg.remove();
//   filmInfo.remove();

//   const film = await filmsApi.fetchMovieById();
//   modal.insertAdjacentHTML('afterbegin', makeFilmModalMarkup(film));
//   modalId = filmsApi.id;

//   const watchedModalBtn = document.querySelector('.btn__watch');
//   const queueModalBtn = document.querySelector('.btn__queue');
//   const youtubeBtn = document.querySelector('.film__trailer__btn');

//   watchedModalBtn.addEventListener('click', onWatchedModalBtnClick);
//   queueModalBtn.addEventListener('click', onQueueModalBtnClick);
//   youtubeBtn.addEventListener('click', onYoutubeBtnClick);

//   onAuthStateChanged(auth, user => {
//     if (user) {
//       const libDataBaseWatched = `users/${user.uid}/lib/watched/`;
//       const libDataBaseQueue = `users/${user.uid}/lib/queue/`;

//       get(ref(db, libDataBaseWatched))
//         .then(snapshot => {
//           if (snapshot.exists()) {
//             const ids = Object.keys(snapshot.val());
//             if (ids.includes(filmsApi.id)) {
//               watchedModalBtn.classList.add('active');
//               watchedModalBtn.textContent = 'Remove';
//             }
//           }
//         })
//         .catch(console.error);

//       get(ref(db, libDataBaseQueue))
//         .then(snapshot => {
//           if (snapshot.exists()) {
//             const ids = Object.keys(snapshot.val());
//             if (ids.includes(filmsApi.id)) {
//               queueModalBtn.classList.add('active');
//               queueModalBtn.textContent = 'Remove';
//               if (lng === 'uk') {
//                 queueModalBtn.textContent = 'Видалити'
//               }
//             }
//           }
//         })
//         .catch(console.error);
//     }
//   });
// }
