// Импорт необходимых функций
import { cleanerMarkup } from './cleanerMarkup';
import { createModalMarkup } from './createModalMarkup';
import { renderFoo } from './renderMarkup';

import ApiFilmoteka from './filmotekaApi';

const apiFilmoteka = new ApiFilmoteka();

// Получение ссылок на необходимые элементы

export const refs = {
  cardListElLibrary: document.querySelector('ul.library_card__list'),
  filmList: document.querySelector('.card__list'),
  ModalFilmBackdrop: document.querySelector('.backdrop-modalInfo'),
  ModalFilmBody: document.querySelector('body'),
  ModalFilmWrap: document.querySelector('.infoFilm__wrap'),
  ModalFilmBtnClose: document.querySelector('.infoFilm__button'),
  btn_anchor: document.querySelector('.btn_anchor-hidden'),
};

// Добавление слушателей для открытия/закрытия модального окна
if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/Devs-ua-Project-JS/index.html'
) {
  refs.filmList.addEventListener('click', onFilmCardClick);
}

if (
  window.location.pathname === '/Devs-ua-Project-JS/my-library.html' ||
  window.location.pathname === '/my-library.html'
) {
  refs.cardListElLibrary.addEventListener('click', onFilmCardClick);
  // refs.filmList.removeEventListener('click', onFilmCardClick);
}

refs.ModalFilmBtnClose.addEventListener('click', onModalFilmBtnClose);
refs.ModalFilmBackdrop.addEventListener('click', onBackdropClose);

// Функция открытия и отображения содержимого модального окна

async function onFilmCardClick(e) {
  if (e.target.parentNode.parentElement.nodeName === 'A') {
    let filmId = e.target.parentNode.parentElement.id;
    apiFilmoteka.filmId = filmId;
    const dataBackEnd = await apiFilmoteka.fetchFilmsById();

    const markup = createModalMarkup(dataBackEnd);
    renderFoo(markup, refs.ModalFilmWrap);
    openModal();
  }
}

//  Функция закрытия модального окна и очистка разметки модального окна при нажатии на кнопку закрытия

function onModalFilmBtnClose() {
  closeModal();
}

//  Функция закрытия модального окна и очистка разметки модального окна при клике по бекдропу

function onBackdropClose(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

//  Функция закрытия модального окна и очистка разметки модального окна при клике на кнопку "escape"

function onKeyAction({ key }) {
  if (key === 'Escape') {
    closeModal();
  }
}

//
function closeModal() {
  refs.ModalFilmBody.removeEventListener('keydown', onKeyAction);

  refs.ModalFilmBackdrop.classList.add('visually-hidden');
  refs.ModalFilmBody.classList.remove('no-scroll');
  refs.ModalFilmBackdrop.classList.remove('scroll');
  refs.btn_anchor.classList.remove('btn_anchor-hidden');
  cleanerMarkup(refs.ModalFilmWrap);
}

function openModal() {
  refs.ModalFilmBackdrop.classList.remove('visually-hidden');
  refs.ModalFilmBody.classList.add('no-scroll');
  refs.ModalFilmBackdrop.classList.add('scroll');
  refs.btn_anchor.classList.add('btn_anchor-hidden');
  refs.ModalFilmBody.addEventListener('keydown', onKeyAction);
}
