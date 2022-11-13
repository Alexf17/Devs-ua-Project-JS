export const refs = {
  preloaderEl: document.querySelector('#preloader'),
  libraryWrapper: document.querySelector('.library__wrapper'),
  imgElArr: document.getElementsByClassName('film-item__img'),
  bodyEl: document.querySelector('body'),
  infoFilmWrapEl: document.querySelector('.infoFilm__wrap'),
  fetchDataValue: null,
  btnAnchorEl: document.getElementsByClassName('btn_anchor')[0],
  darkBtn: document.querySelector('button[data-theme="onDark"]'),
  lightBtn: document.querySelector('button[data-theme="onLight"]'),
  cardListEl: document.querySelector('ul.card__list'),
  cardListElLibrary: document.querySelector('ul.library_card__list'),
  headerFormEl: document.querySelector('.header__form'),
  headerErrorEl: document.querySelector('.header__error'),
  libBtnContainerEl: document.querySelector('.btn-container'),
  paginationBox: document.querySelector('.paginationBox'),
  btnWatched: document.querySelector('#watched'),
  btnQueue: document.querySelector('#queue'),
  youTubeWrap: document.querySelector('.iframe-wrap'),
  youTubeBackdrop: document.querySelector('.backdrop-youtube'),
  youTubeCloseBtn: document.querySelector('.iframe__button'),
  authorizationBtn: document.querySelector('.icon-login'),
  modalAuthorizationBackdrop: document.querySelector(
    '.backdrop-modalAuthorization'
  ),
  modalCloseAuthorozation: document.querySelector('.authorization__close'),
  modalAuthorizationLink: document.querySelector('.authorization__link'),
  modalRegistrationBackdrop: document.querySelector(
    '.backdrop-modalRegistration'
  ),
  modalCloseRegistration: document.querySelector('.registration__close'),
  body: document.querySelector('body'),
  isLogin: false,
};
