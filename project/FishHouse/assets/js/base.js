$(window).scroll(function(){
    if ($('html,body').scrollTop()>150) {
        $('header').removeClass('w80');
        $('header').addClass('bg-black');
    } else {
        $('header').addClass('w80');
        $('header').removeClass('bg-black');
    }
})