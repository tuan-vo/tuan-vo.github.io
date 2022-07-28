var clickfull = document.querySelector('html,body');
    header = document.querySelector('header'),
    btnMenu = document.querySelector('.icon-menu'),
    menu = document.querySelector('#menu_main'),
    search = document.querySelector('.search'),
    iconSearch = document.querySelector('.icon-search'),
    ipSearch = document.querySelector('.js-ipSearch')
    overlayfull = document.querySelector('.overlay-full');
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 150){
       header.classList.add('active')
    }
    else{
       header.classList.remove('active')
    }
})

btnMenu.onclick = function(){
    menu.classList.add('active');
    overlayfull.classList.add('active');
}
overlayfull.onclick = function(){
    menu.classList.remove('active');
    overlayfull.classList.remove('active');
}
search.onclick = function(){
    iconSearch.classList.remove('active');
    ipSearch.classList.add('active');
}

