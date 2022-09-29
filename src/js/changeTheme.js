

const refs = {
    darkBtn: document.querySelector('button[data-theme="onDark"]'),
    lightBtn: document.querySelector('button[data-theme="onLight"]'),
    body: document.querySelector('body')
}

refs.darkBtn.addEventListener('click', onDarkBtnClick);
refs.lightBtn.addEventListener('click', onLightBtnClick);

function onDarkBtnClick() {
     refs.body.classList.toggle('dark__theme')
    localStorage.setItem('theme', 'dark')
}

function onLightBtnClick() {
localStorage.setItem('theme', '')
    refs.body.classList.remove('dark__theme')
}

// При перезагрузке страницы берём тему из локалсторэдж
const theme = localStorage.getItem('theme')

if (theme === 'dark') {
    refs.body.classList.toggle('dark__theme')
}