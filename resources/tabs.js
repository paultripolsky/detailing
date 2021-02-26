$(document).ready(function (){
   $('.tabs-trigger__item').click(function (){
       
       $('.tabs-trigger__item').removeClass('tabs-trigger__item--active');
       $('.tabs-content__item').removeClass('tabs-content__item--active');

       $(this).addClass('tabs-trigger__item--active');
       $($(this).attr('href')).addClass('tabs-content__item--active')
   });
   $('.tabs-trigger__item:first').click();
});