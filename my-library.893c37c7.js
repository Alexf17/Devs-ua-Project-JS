!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},r.parcelRequired7c6=i),i.register("iE7OH",(function(t,r){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("6L6ho",(function(e,r){var n=i("bpxeT"),a=i("2TvXO"),o=i("4Nugj"),s=i("5118m"),c=i("7iVt2"),l=i("7hpRc"),u=i("awCm4"),d=i("6jzso"),f=i("2ouni"),p="";if(o.refs.libBtnContainerEl.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;"queue"===e.target.id?(o.refs.btnWatched.classList.remove("button--orange"),o.refs.btnQueue.classList.add("button--orange")):(o.refs.btnQueue.classList.remove("button--orange"),o.refs.btnWatched.classList.add("button--orange"));b(p=e.target.id),localStorage.setItem("Library",p)})),null!==JSON.parse(localStorage.getItem("localStorageData")))b("watched",!0);else{var g="<img src=".concat(t(f),' alt="empty">');(0,s.renderFoo)(g,o.refs.cardListElLibrary)}function b(e){return m.apply(this,arguments)}function m(){return m=t(n)(t(a).mark((function e(r){var n,i,p,g,b,m,v=arguments;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=v.length>1&&void 0!==v[1]&&v[1],i=null,n&&localStorage.setItem("Library","watched"),p=JSON.parse(localStorage.getItem("localStorageData")),"watched"!==r){e.next=11;break}if(0!==JSON.parse(localStorage.getItem("localStorageData")).watchedFilms.length){e.next=10;break}return g="<img src=".concat(t(f),' alt="empty">'),(0,d.cleanerMarkup)(o.refs.cardListElLibrary),(0,s.renderFoo)(g,o.refs.cardListElLibrary),e.abrupt("return");case 10:i=p.watchedFilms;case 11:if("queue"!==r){e.next=18;break}if(0!==JSON.parse(localStorage.getItem("localStorageData")).queueFilms.length){e.next=17;break}return b="<img src=".concat(t(f),' alt="empty">'),(0,d.cleanerMarkup)(o.refs.cardListElLibrary),(0,s.renderFoo)(b,o.refs.cardListElLibrary),e.abrupt("return");case 17:i=p.queueFilms;case 18:o.refs.fetchDataValue=i,m=i.map((function(e){var r=e.id,n=e.poster_path,a=e.title,i=e.genre_ids,o=e.release_date,s=e.vote_average;return'<li class="film__item" id='.concat(r,'_wrap>\n        <a class="film__link" id="').concat(r,'">\n  <div class="film__wrap">\n      <img src=').concat(n?"https://image.tmdb.org/t/p/original".concat(n):t(c),' class="film-item__img" alt="').concat(a,'" width="300">\n  </div>\n  <div class="wrap__film>\n  <div class="film__title-wrap">\n  <h3 class="film__title">').concat(a,'</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">').concat((0,u.searchGenresById)(i)?(0,u.searchGenresById)(i):"Unknown genre",'</p>\n  <p class="film__release-date">').concat(o?new Date(o).getFullYear():"Nobody know",'</p>\n  <span class="film__vote">').concat(s,'</span>\n   </div>\n   </div>\n   </a>\n   <div class="wrap-youtube">\n  <button type="button" class="btn-youtube" id="').concat(r,'">\n    <svg class="svg-youtube">\n      <use href="').concat(t(l),'#icon-youtube"></use>\n    </svg>\n  </button>\n</div>\n   </li>')})).join(""),(0,d.cleanerMarkup)(o.refs.cardListElLibrary),(0,s.renderFoo)(m,o.refs.cardListElLibrary);case 22:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}})),i.register("7iVt2",(function(e,t){e.exports=i("aNJCr").getBundleURL("1B9dp")+i("iE7OH").resolve("e5oy7")})),i.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t}})),i.register("7hpRc",(function(e,t){e.exports=i("aNJCr").getBundleURL("1B9dp")+i("iE7OH").resolve("ee16w")})),i.register("2ouni",(function(e,t){e.exports=i("aNJCr").getBundleURL("1B9dp")+i("iE7OH").resolve("bxTtR")})),i("iE7OH").register(JSON.parse('{"1B9dp":"my-library.893c37c7.js","e5oy7":"filmWrap.dabdf2b2.jpg","ee16w":"sprite.46d65713.svg","bxTtR":"page-empty-page.47b0e825.jpg","6IIJ4":"my-library.f33cca32.js"}')),i("kFJWu"),i("3jSZ7"),i("aZhHc"),i("9QIlA"),i("6L6ho"),i("h56yM"),i("iWBTv"),i("hYACV"),i("8tcBb")}();
//# sourceMappingURL=my-library.893c37c7.js.map
