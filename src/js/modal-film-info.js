// Импорт необходимых функций
import { cleanerMarkup } from './cleanerMarkup';
import { createModalMarkup } from './createModalMarkup';
import { renderFoo } from './renderMarkup';

import ApiFilmoteka from './filmotekaApi';

const apiFilmoteka = new ApiFilmoteka();

// Получение ссылок на необходимые элементы

const refs = {
  filmList: document.querySelector('.card__list'),
  ModalFilmBackdrop: document.querySelector('.backdrop-modalInfo'),
  ModalFilmBody: document.querySelector('body'),
  ModalFilmWrap: document.querySelector('.infoFilm__wrap'),
  ModalFilmBtnClose: document.querySelector('.infoFilm__button'),
};

// Добавление слушателей для открытия/закрытия модального окна

refs.filmList.addEventListener('click', onFilmCardClick);
refs.ModalFilmBtnClose.addEventListener('click', onModalFilmBtnClose);

// Функция открытия и отображения содержимого модального окна

async function onFilmCardClick(e) {
  if (e.target.parentNode.parentElement.nodeName !== 'A') {
    return;
  }

  let filmId = e.target.parentNode.parentElement.id;
  apiFilmoteka.filmId = filmId;
  const dataBackEnd = await apiFilmoteka.fetchFilmsById();
  console.log(dataBackEnd);

  const markup = createModalMarkup(dataBackEnd);
  renderFoo(markup, refs.ModalFilmWrap);
  refs.ModalFilmBackdrop.classList.remove('visually-hidden');
  refs.ModalFilmBody.classList.add('no-scroll');
  refs.ModalFilmBackdrop.classList.add('scroll');
}

//  Функция закрытия модального окна и очистка разметки модального окна

function onModalFilmBtnClose() {
  refs.ModalFilmBackdrop.classList.add('visually-hidden');
  refs.ModalFilmBody.classList.remove('no-scroll');
  cleanerMarkup(refs.ModalFilmWrap);
  refs.ModalFilmBackdrop.classList.remove('scroll');
}
