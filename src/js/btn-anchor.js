document.querySelector('body').onscroll = function (event) {
  const element = document.getElementsByClassName('btn_anchor')[0];
  if (event.target.scrollingElement.scrollTop > 0) {
    element.classList.remove('btn_anchor-hidden');
  } else {
    element.classList.add('btn_anchor-hidden');
  }
};

document.querySelector('.btn_anchor').addEventListener('click', () => {
  document.querySelector('body').scrollIntoView({ top: 0, behavior: 'smooth' });
});
