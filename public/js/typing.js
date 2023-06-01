let text = "게이밍의 혁신 \n From RAZER KOREA";
let serveText = "";
let i = 0;
const typing = document.querySelector(".text .typing");

let autoTyping = setInterval(function(){
    startTyping();
},200)
//함수 설정
function startTyping(){
    serveText = text[i]; 
    i += 1;

    if(serveText ==="\n"){
        typing.innerHTML +="<br>";
    }
    else{
        typing.innerHTML += serveText;
    }

    
    if(i > text.length -1){
        clearInterval(autoTyping);
        setTimeout(function(){
            typing.innerHTML = "";
            i = 0;
            autoTyping = setInterval(function(){
                startTyping();
            },200);
        },5000);
    }
}