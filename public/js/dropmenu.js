const header = document.querySelector (".header");
const gnbWrap = document.querySelector(".gnbWrap");
const menu = document.querySelectorAll(".gnb > li");
const line = document.querySelectorAll(".gnb > li .line");
const sub = document.querySelectorAll(".sub");
onmouse();
leavemouse();
//함수 설정

function onmouse(){
    gnbWrap.onmouseenter = function(){
        for(let i=0; i<sub.length; i++){
         sub[i].style.height = "160px";
        }
        gnbWrap.querySelector(".gnbBg").style.height = "160px";
    }

    for(let i=0; i< menu.length; i++){
        menu[i].onmouseenter = function(){
            line[i].style.width = 100 +"%"
            line[i].style.left = 0+"px"
            header.style.borderBottom = "2px solid #00e600"
        }
    }
    

}
function leavemouse(){
    gnbWrap.onmouseleave = function(){
        for(let i=0; i<sub.length; i++){
         sub[i].style.height = "0px";
        }
        gnbWrap.querySelector(".gnbBg").style.height = "0px";
     }
     for(let i=0; i< menu.length; i++){
        menu[i].onmouseleave = function(){
            header.style.borderBottom = "2px solid #fff"
            line[i].style.width = 0 +"%"
            line[i].style.left = 50+"%"
        }
    }
}
