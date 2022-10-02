// import { refs } from './refs';
// import ApiFilmoteka from './filmotekaApi';
// const apiFilmoteka = new ApiFilmoteka();
// import { preloaderRefresh, preloaderRefreshOFF } from './preloader';
// import { cleanerMarkup } from './cleanerMarkup';
// // import { createMainMarkup } from './pagination';

// export default class Pagination {
//   constructor() {
//     this.currentPage = 1;
//     this.allPages = null;
//     this.markup = '';
//     this.beforeTwoPage = this.currentPage - 2;
//     this.beforePage = this.currentPage - 1;
//     this.afterPage = this.currentPage + 1;
//     this.afterTwoPage = this.currentPage + 2;
//   }

//   setParams(currentPage, allPages) {
//     this.currentPage = currentPage;
//     this.allPages = allPages;
//   }

//   createPagination() {
//     this.markup = '';
//     console.log('if1', this.currentPage);
//     if (this.currentPage > 1) {
//       this.markup += `<li class="paginationRow">&#129144;</li>`;
//     }
//     console.log('if2', this.currentPage);
//     if (this.currentPage > 1) {
//       this.markup += `<li>1</li>`;
//     }
//     console.log('if3', this.currentPage);
//     if (this.currentPage > 4) {
//       this.markup += `<li>...</li>`;
//     }
//     console.log('if4', this.currentPage);
//     if (this.currentPage > 3) {
//       this.markup += `<li class="this">${this.beforeTwoPage}</li>`;
//     }
//     console.log('if5', this.currentPage);
//     if (this.currentPage > 2) {
//       this.markup += `<li>${this.beforePage}</li>`;
//     }
//     this.markup += `<li class="paginationPage--current">${this.currentPage}</li>`;
//     console.log('if6', this.currentPage);
//     if (this.allPages - 1 > this.currentPage) {
//       this.markup += `<li>${this.afterPage}</li>`;
//     }
//     console.log('if7', this.currentPage);
//     if (this.allPages - 2 > this.currentPage) {
//       this.markup += `<li>${this.afterTwoPage}</li>`;
//     }
//     console.log('if8', this.currentPage);
//     if (this.allPages - 3 > this.currentPage) {
//       this.markup += `<li>...</li>`;
//     }
//     console.log('if9', this.currentPage);
//     if (this.allPages > this.currentPage) {
//       this.markup += `<li>${this.currentPage + 5}</li>`;
//       this.markup += `<li class="paginationRow">&#129146;<li>`;
//     }
//     refs.paginationBox.innerHTML = this.markup;
//   }
// }

// // async function createMainMarkup(fetchedData) {
// //   console.log(fetchedData);
// //   const filmCards = await fetchedData
// //     .map(
// //       ({
// //         id,
// //         poster_path,
// //         title,
// //         genre_ids,
// //         release_date,
// //       }) => `<li class="film__item">
// //         <a class="film__link" id="${id}">
// //   <div class="film__wrap">
// //   <img src=${
// //     poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : img
// //   } class="film-item__img" alt="${title}" width="300">
// //   </div>
// //   <div>
// //   <h3 class="film__title">${title}</h3>
// //   </div>
// //   <div class="film__genres-and-date">
// //   <p class="film__genres">${searchGenresById(genre_ids)}</p>
// //   <p class="film__release-date">${
// //     release_date ? new Date(release_date).getFullYear() : 'Nobody know'
// //   }</p>
// //    </div>
// //    </a>
// //    </li>`
// //     )
// //     .join('');

// //   // Running render function
// //   renderFoo(filmCards, refs.cardListEl);
// //   return filmCards;
