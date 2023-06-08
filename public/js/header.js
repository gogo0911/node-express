const boxs = document.querySelectorAll(".container > div");
const topscroll = document.querySelector(".topscroll");
const m_btn = document.querySelector(".m_btn");
const m_Wrap = document.querySelector(".m_gnbWrap");
const m_close = document.querySelector(".m_close");





window.onscroll = function(){

    let scTop = window.scrollY;
    
    if(scTop > 0){
        header.classList.add("on");
    }
    else {
        header.classList.remove("on")
    }
}

m_btn.addEventListener("click",()=>{
    m_Wrap.style.width = "60%"
})
m_close.addEventListener("click",()=>{
    m_Wrap.style.width = "0%"
})