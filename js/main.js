var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1, /* 1 слайд по умолчанию */
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },
     
      breakpoints: {   
        // breakpoints позволяет установить разные параметры для разных отзывчивых точек останова (размеров экрана). 
        // when window width is >= 540px
        540: {
          slidesPerView: 2  // слайдов становится 2
        }
      }    


});

 /* отслеживать клики по кнопке (для меню бургера) */
var menuButton = document.querySelector('.menu-button');  /* поместили кнопку в переменную */
var menu = document.querySelector('.header')
 /* обращаясь к menuВutton мы будем отслеживать событие клика по этой кнопки, когда будет случатся клик, будет выполняться функция*/
 menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');  /* toggle - то появляется, то исчезает; add - просто появляется */

 });