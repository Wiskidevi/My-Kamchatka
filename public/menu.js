$(document).ready(function(){
    $('.menu-burger__header').on('click', function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });

    // стрелка вверх-вниз
    $("#toFooter").fadeIn();
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll > 0) {
            $("#toTop").fadeIn();
            $("#toFooter").fadeOut();
        } else {
            $("#toTop").fadeOut();
            $("#toFooter").fadeIn();
        }
    });
});
