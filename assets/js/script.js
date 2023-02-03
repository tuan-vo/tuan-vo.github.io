var myMusic = document.getElementById('music'),
    iconMusic = document.getElementById('iconMusic');
var n = 0;
iconMusic.onclick = () =>{
    iconMusic.classList.toggle('bx-pause-circle');
    iconMusic.classList.toggle('bx-play-circle');
    if(n==0){
        myMusic.play();
        n = 1;
    }
    else{
        myMusic.pause();
        myMusic.load();
        n = 0;
    }
}
