!function(){function e(e,r,t,a){Object.defineProperty(e,r,{get:t,set:a,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var r=n[e];delete n[e];var t={id:e,exports:{}};return a[e]=t,r.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){n[e]=r},t.parcelRequired7c6=o),o.register("iE7OH",(function(r,t){var a,n;e(r.exports,"register",(function(){return a}),(function(e){return a=e})),e(r.exports,"resolve",(function(){return n}),(function(e){return n=e}));var o={};a=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)o[r[t]]=e[r[t]]},n=function(e){var r=o[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),o.register("6L6ho",(function(e,t){var a=o("bpxeT"),n=o("2TvXO"),i=o("4Nugj"),l=o("5118m"),s=o("7iVt2"),c=o("7hpRc"),u=o("awCm4"),p=o("6jzso"),f=o("2ouni"),d="";if(i.refs.libBtnContainerEl.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;"queue"===e.target.id?(i.refs.btnWatched.classList.remove("button--orange"),i.refs.btnQueue.classList.add("button--orange")):(i.refs.btnQueue.classList.remove("button--orange"),i.refs.btnWatched.classList.add("button--orange"));b(d=e.target.id),localStorage.setItem("Library",d)})),console.log(i.refs.libraryWrapper),null!==JSON.parse(localStorage.getItem("localStorageData")))b("watched",!0);else{var g="<img src=".concat(r(f),' alt="empty">');(0,l.renderFoo)(g,i.refs.libraryWrapper)}function b(e){return m.apply(this,arguments)}function m(){return m=r(a)(r(n).mark((function e(t){var a,o,d,g,b,m,v=arguments;return r(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=v.length>1&&void 0!==v[1]&&v[1],o=null,a&&localStorage.setItem("Library","watched"),d=JSON.parse(localStorage.getItem("localStorageData")),"watched"!==t){e.next=12;break}if(null!==JSON.parse(localStorage.getItem("localStorageData"))&&0!==JSON.parse(localStorage.getItem("localStorageData")).watchedFilms.length){e.next=11;break}return g="<img src=".concat(r(f),' alt="empty">'),(0,p.cleanerMarkup)(i.refs.libraryWrapper),(0,p.cleanerMarkup)(i.refs.cardListElLibrary),(0,l.renderFoo)(g,i.refs.libraryWrapper),e.abrupt("return");case 11:o=d.watchedFilms;case 12:if("queue"!==t){e.next=20;break}if(null!==JSON.parse(localStorage.getItem("localStorageData"))&&0!==JSON.parse(localStorage.getItem("localStorageData")).queueFilms.length){e.next=19;break}return b="<img src=".concat(r(f),' alt="empty">'),(0,p.cleanerMarkup)(i.refs.libraryWrapper),(0,p.cleanerMarkup)(i.refs.cardListElLibrary),(0,l.renderFoo)(b,i.refs.libraryWrapper),e.abrupt("return");case 19:o=d.queueFilms;case 20:i.refs.fetchDataValue=o,m=o.map((function(e){var t=e.id,a=e.poster_path,n=e.title,o=e.genre_ids,i=e.release_date,l=e.vote_average;return'<li class="film__item" id='.concat(t,'_wrap>\n        <a class="film__link" id="').concat(t,'">\n  <div class="film__wrap">\n      <img src=').concat(a?"https://image.tmdb.org/t/p/original".concat(a):r(s),' class="film-item__img" alt="').concat(n,'" width="300">\n  </div>\n  <div class="wrap__film>\n  <div class="film__title-wrap">\n  <h3 class="film__title">').concat(n,'</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">').concat((0,u.searchGenresById)(o)?(0,u.searchGenresById)(o):"Unknown genre",'</p>\n  <p class="film__release-date">').concat(i?new Date(i).getFullYear():"Nobody know",'</p>\n  <span class="film__vote">').concat(l,'</span>\n   </div>\n   </div>\n   </a>\n   <div class="wrap-youtube">\n  <button type="button" class="btn-youtube" id="').concat(t,'">\n    <svg class="svg-youtube">\n      <use href="').concat(r(c),'#icon-youtube"></use>\n    </svg>\n  </button>\n</div>\n   </li>')})).join(""),(0,p.cleanerMarkup)(i.refs.libraryWrapper),(0,p.cleanerMarkup)(i.refs.cardListElLibrary),(0,l.renderFoo)(m,i.refs.cardListElLibrary);case 25:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}})),o.register("7iVt2",(function(e,r){e.exports=o("aNJCr").getBundleURL("1B9dp")+o("iE7OH").resolve("e5oy7")})),o.register("aNJCr",(function(r,t){var a;e(r.exports,"getBundleURL",(function(){return a}),(function(e){return a=e}));var n={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var r=n[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),n[e]=r),r}})),o.register("7hpRc",(function(e,r){e.exports=o("aNJCr").getBundleURL("1B9dp")+o("iE7OH").resolve("ee16w")})),o.register("2ouni",(function(e,r){e.exports=o("aNJCr").getBundleURL("1B9dp")+o("iE7OH").resolve("bxTtR")})),o("iE7OH").register(JSON.parse('{"1B9dp":"my-library.5350b131.js","e5oy7":"filmWrap.dabdf2b2.jpg","ee16w":"sprite.46d65713.svg","bxTtR":"page-empty-page.47b0e825.jpg","6IIJ4":"my-library.20549c03.js"}')),o("kFJWu"),o("3jSZ7"),o("aZhHc"),o("9QIlA"),o("6L6ho"),o("h56yM"),o("iWBTv"),o("hYACV"),o("8tcBb")}();
//# sourceMappingURL=my-library.5350b131.js.map