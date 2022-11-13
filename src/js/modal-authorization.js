import { refs } from './refs';

refs.authorizationBtn.addEventListener('click', onAuthorizationBtnClick);
refs.modalCloseAuthorozation.addEventListener(
  'click',
  onModalCloseAuthorozationClick
);

function onAuthorizationBtnClick(event) {
  event.preventDefault();
  refs.modalAuthorizationBackdrop.classList.remove('visually-hidden');
  refs.body.classList.add('no-scroll');
}

function onModalCloseAuthorozationClick(event) {
  event.preventDefault();
  refs.modalAuthorizationBackdrop.classList.add('visually-hidden');
  refs.body.classList.remove('no-scroll');
}

// Модальное окно регистрации
refs.modalAuthorizationLink.addEventListener(
  'click',
  onModalAuthorizationLinkClick
);

function onModalAuthorizationLinkClick(event) {
  event.preventDefault();
  refs.modalAuthorizationBackdrop.classList.add('visually-hidden');
  refs.modalRegistrationBackdrop.classList.remove('visually-hidden');
}

refs.modalCloseRegistration.addEventListener(
  'click',
  onModalCloseRegistrationClick
);

export default function onModalCloseRegistrationClick(event) {
  event.preventDefault();
  refs.modalRegistrationBackdrop.classList.add('visually-hidden');
  refs.body.classList.remove('no-scroll');
}
