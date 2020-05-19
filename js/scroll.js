$('.nav-link').click(function() {
    state = ($(this).attr("href"));
    $('html,body').animate({
        scrollTop: $('#cases').offset().top},
        'slow');
});