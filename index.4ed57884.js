!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,r){a[e]=r},r.parcelRequired7c6=n),n("iE7OH").register(JSON.parse('{"EVgbq":"index.4ed57884.js","e5oy7":"filmWrap.dabdf2b2.jpg","6IIJ4":"my-library.f50c47a3.js"}')),n("kFJWu");var s,i=n("bpxeT"),l=n("2TvXO"),c=n("awCm4"),o=n("lmjT0"),u=n("5118m");s=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("e5oy7");var f=n("4Nugj");function d(e,r){e;var t="",a=e-1,n=e+1,s=e+2;e>1&&(t+='<li class="paginationRow">&#129144;</li>'),e>1&&(t+="<li>1</li>"),e>4&&(t+='<li id="left-pagnDots">...</li>'),e>3&&(t+="<li>".concat(e-2,"</li>")),e>2&&(t+="<li>".concat(a,"</li>")),t+='<li class="paginationPage--current">'.concat(e,"</li>"),r-1>e&&(t+="<li>".concat(n,"</li>")),r-2>e&&(t+="<li>".concat(s,"</li>")),r-3>e&&(t+='<li id="right-pagnDots">...</li>'),r>e&&(t+="<li>".concat(e+5,"</li>"),t+='<li class="paginationRow">&#129146;</li>'),f.refs.paginationBox.innerHTML=t}var p=n("6jzso");function m(){f.refs.bodyEl.classList.add("no-scroll"),f.refs.preloaderEl.classList.remove("preloader--hide"),setTimeout((function(){f.refs.bodyEl.scrollIntoView({top:0,behavior:"smooth"})}),100),console.log("ЗАПУСК ПРЕЛОУДЕРА")}function g(){var e=Array.from(f.refs.imgElArr);0===e.length&&(f.refs.preloaderEl.classList.add("preloader--hide"),f.refs.bodyEl.classList.remove("no-scroll")),e.forEach((function(r,t){r.onload=function(){t===e.length-1&&(f.refs.preloaderEl.classList.add("preloader--hide"),f.refs.bodyEl.classList.remove("no-scroll"),console.log("ВЫКЛ ПРЕЛОУДЕРА"))}}))}function b(e){f.refs.preloaderEl.classList.add("preloader--hide"),f.refs.bodyEl.classList.remove("no-scroll"),window.removeEventListener("load",b)}(f=n("4Nugj")).refs.bodyEl.classList.add("no-scroll"),f.refs.preloaderEl.classList.remove("preloader--hide"),window.addEventListener("load",b);f=n("4Nugj");var h=new(0,o.default);f.refs.paginationBox.addEventListener("click",(function(e){return N.apply(this,arguments)}));var v=1;function _(e){return x.apply(this,arguments)}function x(){return(x=e(i)(e(l).mark((function r(t){var a,n;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t;case 2:return a=r.sent,f.refs.fetchDataValue=a,n=a.map((function(r){var t=r.id,a=r.poster_path,n=r.title,i=r.genre_ids,l=r.release_date;return'<li class="film__item">\n        <a class="film__link" id="'.concat(t,'">\n  <div class="film__wrap">\n      <img src=').concat(a?"https://image.tmdb.org/t/p/original".concat(a):e(s),' class="film-item__img" alt="').concat(n,'" width="300">\n  </div>\n  <div class="wrap__film>\n  <div class="film__title-wrap">\n  <h3 class="film__title">').concat(n,'</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">').concat((0,c.searchGenresById)(i)?(0,c.searchGenresById)(i):"Unknown genre",'</p>\n  <p class="film__release-date">').concat(l?new Date(l).getFullYear():"Nobody knows","</p>\n\n   </div>\n   </div>\n   </a>\n   </li>")})).join(""),(0,u.renderFoo)(n,f.refs.cardListEl),r.next=8,d(h.pageNumber,h.totalPages);case 8:return r.abrupt("return",n);case 9:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function N(){return(N=e(i)(e(l).mark((function r(t){var a,n,s,i,c,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(h.filmName),!h.filmName){e.next=6;break}return console.log("return"),e.abrupt("return");case 6:if(console.log("asd"),"LI"===t.target.nodeName){e.next=9;break}return e.abrupt("return");case 9:if("🡸"!==t.target.textContent){e.next=19;break}return h.setPageNumber(v-=1),e.next=13,h.fetchPopularsFilms();case 13:return a=e.sent,(0,p.cleanerMarkup)(f.refs.cardListEl),_(a),d(h.pageNumber,h.totalPages),g(),e.abrupt("return");case 19:if("🡺"!==t.target.textContent){e.next=29;break}return h.setPageNumber(v+=1),e.next=23,h.fetchPopularsFilms();case 23:return n=e.sent,(0,p.cleanerMarkup)(f.refs.cardListEl),_(n),d(h.pageNumber,h.totalPages),g(),e.abrupt("return");case 29:if("left-pagnDots"!==t.target.id){e.next=39;break}return h.setPageNumber(v-=3),e.next=33,h.fetchPopularsFilms();case 33:return s=e.sent,(0,p.cleanerMarkup)(f.refs.cardListEl),_(s),d(h.pageNumber,h.totalPages),g(),e.abrupt("return");case 39:if("right-pagnDots"!==t.target.id){e.next=49;break}return h.setPageNumber(v+=3),e.next=43,h.fetchPopularsFilms();case 43:return i=e.sent,(0,p.cleanerMarkup)(f.refs.cardListEl),_(i),d(h.pageNumber,h.totalPages),g(),e.abrupt("return");case 49:return c=t.target.textContent,h.setPageNumber(Number(c)),e.next=53,h.fetchPopularsFilms();case 53:o=e.sent,(0,p.cleanerMarkup)(f.refs.cardListEl),_(o),d(h.pageNumber,h.totalPages),g();case 58:case"end":return e.stop()}}),r)})))).apply(this,arguments)}_(h.fetchPopularsFilms());i=n("bpxeT"),l=n("2TvXO"),o=n("lmjT0"),p=n("6jzso"),c=n("awCm4"),u=n("5118m"),f=n("4Nugj");var E=1,k=new(0,o.default);function w(){return(w=e(i)(e(l).mark((function r(t){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.elements[0].value.trim(),f.refs.expFilmName=a,!a){e.next=7;break}m(),(0,p.cleanerMarkup)(f.refs.cardListEl),k.setFilmName(a),y(k.fetchFilmsByName()),f.refs.headerFormEl.reset(),e.next=9;break;case 7:return F(),e.abrupt("return");case 9:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function y(e){return L.apply(this,arguments)}function L(){return(L=e(i)(e(l).mark((function r(t){var a,n;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t;case 2:if(a=r.sent,f.refs.fetchDataValue=a,a.length){r.next=9;break}return r.next=7,F();case 7:r.next=15;break;case 9:return f.refs.headerErrorEl.classList.add("visually-hidden"),n=a.map((function(r){var t=r.id,a=r.poster_path,n=r.title,i=r.genre_ids,l=r.release_date;return'<li class="film__item"><div class="test">\n        <a class="film__link" id="'.concat(t,'">\n  <div class="film__wrap">\n  <img src=').concat(a?"https://image.tmdb.org/t/p/original".concat(a):e(s),' class="film-item__img" alt="').concat(n,'" width="300">\n  </div>\n  <div class= "film__info">\n  <div class="film__title-wrap">\n  <h3 class="film__title">').concat(n,'</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">').concat((0,c.searchGenresById)(i)?(0,c.searchGenresById)(i):"Unknown genre",'</p>\n  <p class="film__release-date">').concat(l?new Date(l).getFullYear():"Nobody knows","</p>\n  </div>\n  \n   </div>\n   </div>\n   </a>\n   </li>")})).join(""),(0,u.renderFoo)(n,f.refs.cardListEl),g(),d(k.pageNumber,k.totalPages),r.abrupt("return",n);case 15:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function F(){g(),f.refs.headerErrorEl.classList.remove("visually-hidden"),f.refs.headerFormEl.reset(),(0,p.cleanerMarkup)(f.refs.paginationBox)}function P(){return(P=e(i)(e(l).mark((function r(t){var a,n,s,i,c,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.getFilmName()){e.next=4;break}return e.abrupt("return");case 4:if("LI"===t.target.nodeName){e.next=6;break}return e.abrupt("return");case 6:if("🡸"!==t.target.textContent){e.next=17;break}return k.setPageNumber(E-=1),k.getFilmName(),e.next=11,k.fetchFilmsByName();case 11:return a=e.sent,(0,p.cleanerMarkup)(f.refs.cardListEl),y(a),d(k.pageNumber,k.totalPages),g(),e.abrupt("return");case 17:if("🡺"!==t.target.textContent){e.next=28;break}return k.setPageNumber(E+=1),k.getFilmName(),e.next=22,k.fetchFilmsByName();case 22:return n=e.sent,(0,p.cleanerMarkup)(f.refs.cardListEl),y(n),d(k.pageNumber,k.totalPages),g(),e.abrupt("return");case 28:if("left-pagnDots"!==t.target.id){e.next=39;break}return k.setPageNumber(E-=3),k.getFilmName(),e.next=33,k.fetchFilmsByName();case 33:return s=e.sent,(0,p.cleanerMarkup)(f.refs.cardListEl),y(s),g(),d(k.pageNumber,k.totalPages),e.abrupt("return");case 39:if("right-pagnDots"!==t.target.id){e.next=50;break}return k.setPageNumber(E+=3),k.getFilmName(),e.next=44,k.fetchFilmsByName();case 44:return i=e.sent,(0,p.cleanerMarkup)(f.refs.cardListEl),y(i),g(),d(k.pageNumber,k.totalPages),e.abrupt("return");case 50:return c=t.target.textContent,k.setPageNumber(Number(c)),e.next=54,k.fetchFilmsByName();case 54:o=e.sent,(0,p.cleanerMarkup)(f.refs.cardListEl),y(o),d(k.pageNumber,k.totalPages),g();case 59:case"end":return e.stop()}}),r)})))).apply(this,arguments)}f.refs.headerFormEl.addEventListener("submit",(function(e){return w.apply(this,arguments)})),f.refs.paginationBox.addEventListener("click",(function(e){return P.apply(this,arguments)})),n("35fFx"),n("iWBTv"),n("3jSZ7"),n("aZhHc"),n("9QIlA"),n("h56yM")}();
//# sourceMappingURL=index.4ed57884.js.map
