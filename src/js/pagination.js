import { refs } from './refs';
let globalCurrentpage = 1;

export default function pagination(currentPage, allPages) {
  globalCurrentpage = currentPage;
  let markup = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
  if (currentPage > 1) {
    markup += `<li class="paginationRow">&#129144;</li>`;
  }
  if (currentPage > 1) {
    markup += `<li>1</li>`;
  }

  if (currentPage > 4) {
    markup += `<li id="left-pagnDots">...</li>`;
  }
  if (currentPage > 3) {
    markup += `<li>${beforeTwoPage}</li>`;
  }
  if (currentPage > 2) {
    markup += `<li>${beforePage}</li>`;
  }
  markup += `<li class="paginationPage--current">${currentPage}</li>`;
  if (allPages - 1 > currentPage) {
    markup += `<li>${afterPage}</li>`;
  }
  if (allPages - 2 > currentPage) {
    markup += `<li>${afterTwoPage}</li>`;
  }
  if (allPages - 3 > currentPage) {
    markup += `<li id="right-pagnDots">...</li>`;
  }
  if (allPages > currentPage) {
    markup += `<li>${currentPage + 5}</li>`;
    markup += `<li class="paginationRow">&#129146;</li>`;
  }

  refs.paginationBox.innerHTML = markup;
}
