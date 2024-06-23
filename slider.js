const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");



let sliderValue = 1;
const length = images.length;

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


right.addEventListener("click", ()=>{

    sliderValue < length ? changeImages() : goToStart();

} )


left.addEventListener("click", () =>{

    sliderValue > 1 ? prevSlide() : lastSlide();

})

for(let i = 0; i<length; i++)
{
    const div = document.createElement("div");
    div.className = "button";

    bottom.appendChild(div);

}