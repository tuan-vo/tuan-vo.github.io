var btnlogin1 = document.querySelector('.login'),
    btnlogin2 = document.querySelector('.btn-login'),
    formlogin = document.querySelector('.form-login');
$(window).scroll(function(){
    if($('html,body').scrollTop()>150){
        $('header').addClass('bg-white');
    }else{
        $('header').removeClass('bg-white');
    }
})
btnlogin1.onclick = function(){
    formlogin.classList.toggle('openForm');
}
btnlogin2.onclick = function() {
    formlogin.classList.remove('openForm');
}