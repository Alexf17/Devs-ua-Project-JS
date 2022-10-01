export const refs = {
  preloaderEl: document.querySelector('#preloader'),
  imgElArr: document.getElementsByClassName('film-item__img'),
  bodyEl: document.querySelector('body'),
  infoFilmWrapEl: document.querySelector('.infoFilm__wrap'),
  fetchDataValue:null,
  btnAnchorEl: document.getElementsByClassName('btn_anchor')[0],
  darkBtn: document.querySelector('button[data-theme="onDark"]'),
  lightBtn: document.querySelector('button[data-theme="onLight"]'),
  cardListEl: document.querySelector('ul.card__list'),
  headerFormEl: document.querySelector('.header__form'),
  headerErrorEl: document.querySelector('.header__error'),
};