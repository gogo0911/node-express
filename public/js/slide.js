const slide = document.querySelector(".slide");
const views = document.querySelectorAll(".viewWrap > .view");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const bars = document.querySelectorAll(".bars li");


let slideNum = 0;

prevBtn.onclick = function(){prevMove();}

nextBtn.onclick = function(){nextMove();}

barBtn();

let autoSlide = setInterval(function(){
    nextMove();
},3000)

slide.onmouseenter = function(){
    clearInterval(autoSlide);
}
slide.onmouseleave = function(){
    autoSlide = setInterval(function(){nextMove();},3000)
}


// 함수 설정 구역
function classOnoff(){
    for(let i=0; i<views.length; i++){
            bars[i].classList.remove("on");
            views[i].classList.remove("on");
        }
        bars[slideNum].classList.add("on")
        views[slideNum].classList.add("on")
}
function prevMove(){
    if(slideNum == 0){
        slideNum = views.length -1;
    }
    else{
        slideNum -=1;
    }
    classOnoff();
}
function nextMove(){
    if(slideNum == views.length -1){
        slideNum = 0;
    }
    else{
        slideNum +=1;
    }
    classOnoff();
}
function barBtn(){
    for(let j=0; j<views.length; j++){
        bars[j].onclick = function(event){
            event.preventDefault();
            slideNum = j;
            classOnoff();
        }
    }
}