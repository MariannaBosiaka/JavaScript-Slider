const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let sliderValue = 1;
const length = images.length;

left.addEventListener("click", ()=>{

    if(sliderValue < length)
    {
        console.log("moved the image");
        // slider.style.transform = 'translateX(-${sliderValue * 500}px)';
    
        
        slider.style.transform = `translateX(-${sliderValue*400}px)`;
        sliderValue++;
        
    }
    else
    {
        slider.style.transform = `translateX(0px)`;
        sliderValue = 1;
    }


} )