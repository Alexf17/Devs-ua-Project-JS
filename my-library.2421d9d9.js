function e(e,r,t,a){Object.defineProperty(e,r,{get:t,set:a,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var r=n[e];delete n[e];var t={id:e,exports:{}};return a[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},t.parcelRequired7c6=i),i.register("kyEFX",(function(r,t){var a,n;e(r.exports,"register",(function(){return a}),(function(e){return a=e})),e(r.exports,"resolve",(function(){return n}),(function(e){return n=e}));var i={};a=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)i[r[t]]=e[r[t]]},n=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),i.register("51vK8",(function(e,t){var a=i("krGWQ"),n=i("cky31"),s=i("lxadu"),l=i("e5EMj"),o=i("2vqxs"),c=i("anlFm"),u=i("2jE4r");let d="";if(a.refs.libBtnContainerEl.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;"queue"===e.target.id?(a.refs.btnWatched.classList.remove("button--orange"),a.refs.btnQueue.classList.add("button--orange")):(a.refs.btnQueue.classList.remove("button--orange"),a.refs.btnWatched.classList.add("button--orange"));d=e.target.id,f(d),localStorage.setItem("Library",d)})),null!==JSON.parse(localStorage.getItem("localStorageData")))f("watched",!0);else{const e=`<img src=${r(u)} alt="empty">`;(0,n.renderFoo)(e,a.refs.cardListElLibrary)}async function f(e,t=!1){let i=null;t&&localStorage.setItem("Library","watched");let d=JSON.parse(localStorage.getItem("localStorageData"));if("watched"===e){if(0===JSON.parse(localStorage.getItem("localStorageData")).watchedFilms.length){const e=`<img src=${r(u)} alt="empty">`;return(0,c.cleanerMarkup)(a.refs.cardListElLibrary),void(0,n.renderFoo)(e,a.refs.cardListElLibrary)}i=d.watchedFilms}if("queue"===e){if(0===JSON.parse(localStorage.getItem("localStorageData")).queueFilms.length){const e=`<img src=${r(u)} alt="empty">`;return(0,c.cleanerMarkup)(a.refs.cardListElLibrary),void(0,n.renderFoo)(e,a.refs.cardListElLibrary)}i=d.queueFilms}a.refs.fetchDataValue=i;const f=i.map((({id:e,poster_path:t,title:a,genre_ids:n,release_date:i,vote_average:c})=>`<li class="film__item" id=${e}_wrap>\n        <a class="film__link" id="${e}">\n  <div class="film__wrap">\n      <img src=${t?`https://image.tmdb.org/t/p/original${t}`:r(s)} class="film-item__img" alt="${a}" width="300">\n  </div>\n  <div class="wrap__film>\n  <div class="film__title-wrap">\n  <h3 class="film__title">${a}</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">${(0,o.searchGenresById)(n)?(0,o.searchGenresById)(n):"Unknown genre"}</p>\n  <p class="film__release-date">${i?new Date(i).getFullYear():"Nobody know"}</p>\n  <span class="film__vote">${c}</span>\n   </div>\n   </div>\n   </a>\n   <div class="wrap-youtube">\n  <button type="button" class="btn-youtube" id="${e}">\n    <svg class="svg-youtube">\n      <use href="${r(l)}#icon-youtube"></use>\n    </svg>\n  </button>\n</div>\n   </li>`)).join("");(0,c.cleanerMarkup)(a.refs.cardListElLibrary),(0,n.renderFoo)(f,a.refs.cardListElLibrary)}})),i.register("lxadu",(function(e,r){e.exports=new URL(i("kyEFX").resolve("fKKvY"),import.meta.url).toString()})),i.register("e5EMj",(function(e,r){e.exports=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString()})),i.register("2jE4r",(function(e,r){e.exports=new URL(i("kyEFX").resolve("500iB"),import.meta.url).toString()})),i("kyEFX").register(JSON.parse('{"7OqUs":"my-library.2421d9d9.js","fKKvY":"filmWrap.dabdf2b2.jpg","lp5u4":"sprite.46d65713.svg","500iB":"page-empty-page.47b0e825.jpg","4627Z":"my-library.ad9ffebf.js"}')),i("g9qdN"),i("1wH5c"),i("7bYU0"),i("kNOsD"),i("51vK8"),i("c2dC2"),i("010fZ"),i("fXcII"),i("iLQTB");
//# sourceMappingURL=my-library.2421d9d9.js.map
