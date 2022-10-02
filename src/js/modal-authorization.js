export const refs = {
    authorizationBtn: document.querySelector('.icon-login'),
    modalAuthorizationBackdrop: document.querySelector('.backdrop-modalAuthorization'),
    modalCloseAuthorozation: document.querySelector('.authorization__close'),
    modalAuthorizationLink: document.querySelector('.authorization__link'),
    modalRegistrationBackdrop: document.querySelector('.backdrop-modalRegistration'),
    modalCloseRegistration: document.querySelector('.registration__close'),
    body: document.querySelector('body')
}

refs.authorizationBtn.addEventListener('click', onAuthorizationBtnClick);
refs.modalCloseAuthorozation.addEventListener('click', onModalCloseAuthorozationClick);

function onAuthorizationBtnClick(event) {
    event.preventDefault()
    refs.modalAuthorizationBackdrop.classList.remove('visually-hidden')
    refs.body.classList.add('no-scroll')

}

function onModalCloseAuthorozationClick(event) {
     event.preventDefault()
    refs.modalAuthorizationBackdrop.classList.add('visually-hidden')
   refs.body.classList.remove('no-scroll') 
}



// Модальное окно регистрации
refs.modalAuthorizationLink.addEventListener('click', onModalAuthorizationLinkClick);

function onModalAuthorizationLinkClick(event) {
    event.preventDefault()
    refs.modalAuthorizationBackdrop.classList.add('visually-hidden');
    refs.modalRegistrationBackdrop.classList.remove('visually-hidden')
}

refs.modalCloseRegistration.addEventListener('click', onModalCloseRegistrationClick);

export default function onModalCloseRegistrationClick(event) {
    event.preventDefault();
    refs.modalRegistrationBackdrop.classList.add('visually-hidden')
    refs.body.classList.remove('no-scroll') 

}