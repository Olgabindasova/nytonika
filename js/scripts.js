

$(document).ready(function(){
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
   
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });
   
  if(window.location.hash) {
    var hash = window.location.hash;

    var modal = UIkit.modal(hash);

    if ( modal ) {
        modal.show();
    }
}

  });

$(function() {

  $("#phone").mask("+7 (999) 999-99-99");
  $(".phone").mask("+7 (999) 999-99-99");
});


$(document).ready(function () {

  var show = true;
  var countbox = ".benefits__inner";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.benefits__number').css('opacity', '1');
          $('.benefits__number').spincrement({
              thousandSeparator: "",
              duration: 1000
          });

          show = false;
      }
  });

}); 


// добавляет класс active

document.querySelector('.menu_one').addEventListener('click', () => {
  document.querySelector('.aside-lk').classList.add('active');
  document.querySelector('.menu_one').classList.add('active'); 
  document.querySelector('.logo1').classList.add('active');
  document.querySelector('.logo2').classList.add('active');
  document.querySelector('.menu-lk').classList.add('active');
  document.querySelector('.close-menu').classList.add('close-menu-active');
})

// удаляет  класс  active

document.querySelector('.close-menu').addEventListener('click', () => {
  document.querySelector('.aside-lk').classList.remove('active');
  document.querySelector('.menu_one').classList.remove('active'); 
  document.querySelector('.logo1').classList.remove('active');
  document.querySelector('.logo2').classList.remove('active');
  document.querySelector('.menu-lk').classList.remove('active');
  document.querySelector('.close-menu').classList.remove('close-menu-active')
})



$('.rat').on('mouseover', function(){
  let $this = $(this);
  $this.nextAll().removeClass('star').addClass( "star-o" );
  $this.prevAll().removeClass( "star-o" ).addClass('star');
  $this.removeClass( "star-o" ).addClass('star');
});
$('.rat').one('click',function(){
 let $this = $(this); $this.addClass('active').siblings().removeClass('active');
});
$('.rat').on('mouseleave', function(){
  let select = $('.active');
  select.nextAll().removeClass('star').addClass('star-o');
  select.prevAll().removeClass('star-o').addClass('star');
  select.removeClass('star-o').addClass('star');
});
