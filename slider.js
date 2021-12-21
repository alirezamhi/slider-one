let slider = document.getElementById('slider');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
// add time
const timeout = 4000;
const speed = 10;

let allSlider , lastSlider , nextTimeout ;
// animate not start
let animating = false ; 

nextTimeout = setTimeout(nextSlide , timeout);
function nextSlide(){
    allSlider = document.querySelectorAll('.slid');
    lastSlider = allSlider[allSlider.length - 1];
    requestAnimationFrame(moveRight);
    // animate start
    animating = true ;
}   
function moveRight(){
    let left = parseInt(lastSlider.style.left);
    lastSlider.style.left = (left+speed) +'px';
    // if picture end
    if(left < 800){
    requestAnimationFrame(moveRight);
    // if picture not end
    }else{
        slider.insertBefore(lastSlider , slider.firstElementChild);
        lastSlider.style.left = '0';
        nextTimeout = setTimeout(nextSlide , timeout);
        animating = false ;
    }
}
// add next butoon 
next.addEventListener('click' , function(){
    if (!animating){
        clearTimeout(nextTimeout);
        nextSlide();
    }
});


     
