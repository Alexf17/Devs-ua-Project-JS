import { refs } from './refs';
import ApiFilmoteka from './filmotekaApi';
import { preloaderRefresh, preloaderRefreshOFF } from './preloader';

export default class Pagination {
  constructor() {
    this.currentPage = 1;
    this.allPages = null;
    this.apiFilmoteka = new ApiFilmoteka();
    this.globalCurrentpage = 0;
    this.markup = '';
    this.beforeTwoPage = this.currentPage - 2;
    this.beforePage = this.currentPage - 1;
    this.afterPage = this.currentPage + 1;
    this.afterTwoPage = this.currentPage + 2;
  }

  setParams(currentPage, allPages) {
    this.currentPage = currentPage;
    this.allPages = allPages;
  }

  createPagination() {
    // this.globalCurrentpage = currentPage;
    if (this.currentPage > 1) {
      this.markup += `<li class="paginationRow">&#129144;</li>`;
    }
    if (this.currentPage > 1) {
      this.markup += `<li>1</li>`;
    }

    if (this.currentPage > 4) {
      this.markup += `<li>...</li>`;
    }
    if (this.currentPage > 3) {
      this.markup += `<li>${this.beforeTwoPage}</li>`;
    }
    if (this.currentPage > 2) {
      this.markup += `<li>${this.beforePage}</li>`;
    }
    this.markup += `<li class="paginationPage--current">${this.currentPage}</li>`;
    if (this.allPages - 1 > this.currentPage) {
      this.markup += `<li>${this.afterPage}</li>`;
    }
    if (this.allPages - 2 > this.currentPage) {
      this.markup += `<li>${this.afterTwoPage}</li>`;
    }
    if (this.allPages - 3 > this.currentPage) {
      this.markup += `<li>...</li>`;
    }
    if (this.allPages > this.currentPage) {
      this.markup += `<li class="avd">${this.currentPage + 5}</li>`;
      this.markup += `<li class="paginationRow">&#129146;<li>`;
    }

    refs.paginationBox.innerHTML = this.markup;
  }

  async handlerPaginationMain(evt) {
    preloaderRefresh();

    if (evt.target.nodeName !== 'LI') {
      return;
    }
    if (evt.target.textContent === '🡸') {
      apiFilmoteka.setPageNumber((globalCurrentpage -= 1));

      const filesFromBackend = await apiFilmoteka.fetchPopularsFilms();

      cleanerMarkup(cardListEl);
      createMainMarkup(filesFromBackend);

      pagination(apiFilmoteka.pageNumber, apiFilmoteka.totalPages);

      return;
    }
    if (evt.target.textContent === '🡺') {
      apiFilmoteka.setPageNumber((globalCurrentpage += 1));

      const filesFromBackend = await apiFilmoteka.fetchPopularsFilms();

      cleanerMarkup(cardListEl);
      createMainMarkup(filesFromBackend);

      pagination(apiFilmoteka.pageNumber, apiFilmoteka.totalPages);
      return;
    }
    if (evt.target.textContent === '...') {
      return;
    }
    const page = evt.target.textContent;
    console.log(this.apiFilmoteka);
    this.apiFilmoteka.setPageNumber(Number(page));
    const filesFromBackend = await apiFilmoteka.fetchPopularsFilms();

    cleanerMarkup(cardListEl);
    createMainMarkup(filesFromBackend);

    pagination(apiFilmoteka.pageNumber, apiFilmoteka.totalPages);
    preloaderRefreshOFF();
  }
}
