let slider = document.getElementById('slider');
let previous = document.getElementById('previous');
let next = document.getElementById('next');

const timeout = 4000;
const speed = 10;

let allSlider , lastSlider , nextTimeout ;

nextTimeout = setTimeout(nextSlide , timeout);
function nextSlide(){
    allSlider = document.querySelectorAll('.slid');
    lastSlider = allSlider[allSlider.length - 1];
    requestAnimationFrame(moveRight);
}   
function moveRight(){
    let left = parseInt(lastSlider.style.left);
    lastSlider.style.left = (left+speed) +'px';
    if(left < 800){
    requestAnimationFrame(moveRight);
    }else{
        slider.insertBefore(lastSlider , slider.firstElementChild);
        lastSlider.style.left = '0';
        nextTimeout = setTimeout(nextSlide , timeout);
    }
}
     