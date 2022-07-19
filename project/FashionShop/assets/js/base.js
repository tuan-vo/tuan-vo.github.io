$(window).scroll(function(){
    if($('html,body').scrollTop()>150){
        $('header').addClass('bg-white');
    }else{
        $('header').removeClass('bg-white');
    }
})