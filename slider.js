const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");



let sliderValue = 1;
const length = images.length;

for(let i = 0; i<length; i++)
{
    const div = document.createElement("div");
    div.className = "button";

    bottom.appendChild(div);

}

const resetBg = () => {
    buttons.forEach(button =>{
        button.style.backgroundColor = "transparent";
    })
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "white";

buttons.forEach((button, i) =>{
    button.addEventListener("click",  () => {
        resetBg();
        slider.style.transform = `translateX(-${i * 400}px)`;
        button.style.backgroundColor = "White";
    })
})

const changeImages = () => {

    console.log("moved the image");
    // slider.style.transform = 'translateX(-${sliderValue * 500}px)';
    
        
    slider.style.transform = `translateX(-${sliderValue*400}px)`;
    sliderValue++;

}

const goToStart = () => {

    slider.style.transform = `translateX(0px)`;
    sliderValue = 1;

}

const prevSlide = () => {
    
    slider.style.transform = `translateX(-${(sliderValue-2)*400}px)`;
    sliderValue--;
}

const lastSlide = () =>{

    slider.style.transform = `translateX(-${(length - 1)*400}px)`;
    sliderValue = length;
}


const backRemove = () => {
    resetBg();
    buttons[sliderValue-1].style.backgroundColor = "White";
}

right.addEventListener("click", ()=>{

    sliderValue < length ? changeImages() : goToStart();
    backRemove();

} )


left.addEventListener("click", () =>{

    sliderValue > 1 ? prevSlide() : lastSlide();
    backRemove();

})



