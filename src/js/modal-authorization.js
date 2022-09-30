const refs = {
    authorizationBtn: document.querySelector('#headerAuthorization'),
    modalAuthorizationBackdrop: document.querySelector('.backdrop-modalAuthorization'),
    modalCloseAuthorozation: document.querySelector('.authorization__close')
}
refs.authorizationBtn.addEventListener('click', onAuthorizationBtnClick);
refs.modalCloseAuthorozation.addEventListener('click', onModalCloseAuthorozationClick);

function onAuthorizationBtnClick(event) {
    event.preventDefault()
    refs.modalAuthorizationBackdrop.classList.remove('visually-hidden')

}

function onModalCloseAuthorozationClick(event) {
     event.preventDefault()
   refs.modalAuthorizationBackdrop.classList.add('visually-hidden') 
}