import { refs } from "./refs";


refs.darkBtn.addEventListener('click', onDarkBtnClick);
refs.lightBtn.addEventListener('click', onLightBtnClick);

function onDarkBtnClick() {
     refs.bodyEl.classList.toggle('dark__theme')
    localStorage.setItem('theme', 'dark')
}

function onLightBtnClick() {
localStorage.setItem('theme', '')
    refs.bodyEl.classList.remove('dark__theme')
}

// При перезагрузке страницы берём тему из локалсторэдж
const theme = localStorage.getItem('theme')

if (theme === 'dark') {
    refs.bodyEl.classList.toggle('dark__theme')
}