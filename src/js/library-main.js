// const refs = {
//     ARR: [],
//     addQ: document.querySelector('.lib-btn.queue'),
//     addW: document.querySelector('.lib-btn.watched'),
// }

// const watched = function () {

//     document.querySelector(".watched").classList.add("current-btn");
//     document.querySelector(".queue").classList.remove("current-btn");
//     let localStorageArrW = JSON.parse(localStorage.getItem(`w`)) || [];

//     localStorageArrW = arrForRender(localStorageArrW);
//     renderFilm(localStorageArrW);
//     refs.ARR = [...localStorageArrW];
//     };

//     const queue = function () {

//     document.querySelector(".watched").classList.remove("current-btn");
//     document.querySelector(".queue").classList.add("current-btn");
//     let localStorageArrQ = JSON.parse(localStorage.getItem(`q`)) || [];

//     localStorageArrQ = arrForRender(localStorageArrQ);
//     renderFilm(localStorageArrQ);
//     refs.ARR = [...localStorageArrQ];
//     };

// watched();
//     document.querySelector(".watched").addEventListener("click", watched);
//     document.querySelector(".queue").addEventListener("click", queue);

