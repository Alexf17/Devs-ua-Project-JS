//вешаем событие onscroll на елемент body
document.querySelector('body').onscroll = function (event) {
  //получаем елемент по классу
  const element = document.getElementsByClassName('btn_anchor')[0];

  //условия для проверки на расстояние скрола от верхней части страницы
  if (event.target.scrollingElement.scrollTop > 0) {
    element.classList.remove('btn_anchor-hidden'); // если > 0 - удаляем класс
  } else {
    element.classList.add('btn_anchor-hidden'); // добавляем класс
  }
};
// добавляем событие click на кнопку
document.querySelector('.btn_anchor').addEventListener('click', () => {
  // вызываем медот scrollIntoView и задаем аргументы (top: 0 - поднимает на верх страницы; behavior: 'smooth' - для плавного возвращения)
  document.querySelector('body').scrollIntoView({ top: 0, behavior: 'smooth' });
});
