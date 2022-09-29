const headerformEl = document.querySelector('.header__form');
const headerInputEl = document.querySelector('.header__form');
console.log(headerInputEl);

headerInputEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(event.target.elements[0].value);
  console.log(headerformEl.value);
}
