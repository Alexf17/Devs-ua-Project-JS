import {refs} from './refs'

document.querySelector('body').onscroll = function (event) {
  if (event.target.scrollingElement.scrollTop > 0) {
    refs.btnAnchorEl.classList.remove('btn_anchor-hidden');
  } else {
    refs.btnAnchorEl.classList.add('btn_anchor-hidden');
  }
};

document.querySelector('.btn_anchor').addEventListener('click', () => {
  document.querySelector('body').scrollIntoView({
    top: 0, behavior: 'smooth'
  });
});
