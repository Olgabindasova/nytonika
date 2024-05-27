
$(function() {

    $("#phone").mask("+7 (999) 999-99-99");
    $(".phone").mask("+7 (999) 999-99-99");
  });

$(document).ready(function () {
  // добавляет класс passive
  document.querySelector('.button-form-tab-2').addEventListener('mouseover', () => {
  document.querySelector('.button-form-tab-1').classList.add('passive');
  })
  // убирает класс passive
  document.querySelector('.button-form-tab-2').addEventListener('mouseout', () => {
  document.querySelector('.button-form-tab-1').classList.remove('passive');
  })
  }); 


  // добавляет класс active
document.querySelector('.menu_one').addEventListener('click', () => {
    document.querySelector('.aside-lk').classList.add('active');
    document.querySelector('.menu_one').classList.add('active'); 
    document.querySelector('.logo1').classList.add('active');
    document.querySelector('.logo2').classList.add('active');
    document.querySelector('.menu-lk').classList.add('active');
    document.querySelector('.close-menu').classList.add('close-menu-active');
  });
  
  // удаляет  класс  active
document.querySelector('.close-menu').addEventListener('click', () => {
    document.querySelector('.aside-lk').classList.remove('active');
    document.querySelector('.menu_one').classList.remove('active'); 
    document.querySelector('.logo1').classList.remove('active');
    document.querySelector('.logo2').classList.remove('active');
    document.querySelector('.menu-lk').classList.remove('active');
    document.querySelector('.close-menu').classList.remove('close-menu-active')
  });
  