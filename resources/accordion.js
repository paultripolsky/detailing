$(document).ready(function (){
    $('.accordion-item-trigger').click(function (){
        $(this).next('.accordion-item-content').slideToggle(150);
        $(this).children('.plus').toggleClass('rotate');
    });
});