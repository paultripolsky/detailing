$(document).ready(function (){
    $('.mobile-menu').click(function (){
        $('.mobile-menu,.mobile-menu-burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.mobile-burger-item-a,.mobile-menu-contacts-a').click(function(){
        $('.mobile-menu-burger').removeClass('active')
        $('.mobile-menu').toggleClass('active');
        $('body').removeClass('lock');
    });
});