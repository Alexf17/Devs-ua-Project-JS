const refs = {
  openModal: document.querySelector('.footer__link'),
  ModalTeamBackdrop: document.querySelector('.team__backdrop'),
  ModalTeamBody: document.querySelector('body'),
  ModalTeamBtn: document.querySelector('.modal__close-button'),
};
// добавление слушателей на события

refs.openModal.addEventListener('click', onModalOpen);
refs.ModalTeamBtn.addEventListener('click', onModalClose);
refs.ModalTeamBackdrop.addEventListener('click', onBackdropClick);

// функция открытия модалки в которой снимается слушатель

function onModalOpen(e) {
  window.addEventListener('keydown', onEscKeyPress);
  e.preventDefault();
  refs.ModalTeamBody.classList.add('no-scroll');
  refs.ModalTeamBackdrop.classList.remove('visually-hidden');
}

// функция закрытия модалки в которой вешается слушатель на нажатие

function onModalClose() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.ModalTeamBody.classList.remove('no-scroll');
  refs.ModalTeamBackdrop.classList.add('visually-hidden');
}

// функции на логическую работу по нажатию пользователя

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onModalClose();
  }
}
function onEscKeyPress(e) {
  const isEscKey = e.code === 'Escape';
  if (isEscKey) {
    onModalClose();
  }
}
