let contents = [
    {
        imgSrc:"img/mobile/content1.jpg",
        title:"RAZER KISHI V2 FOR IPHONE",
        text:"iPhone용 유니버설 모바일 게이밍 컨트롤러",
    },
    {
        imgSrc:"img/mobile/content2.jpg",
        title:"RAZER KISHI V2 FOR ANDROID",
        text:"안드로이드용 유니버설 모바일 게이밍 컨트롤러",
    },
    {
        imgSrc:"img/mobile/content3.jpg",
        title:"RAZER KISHI",
        text:"대부분의 스마트폰 기기에서 사용할 수 있으며 이동 중에도 콘솔 수준의 편안함으로 게임을 컨트롤할 수 있도록 설계된 수상 경력에 빛나는 유니버설 모바일 게이밍 컨트롤러입니다.",
    },
    {
        imgSrc:"img/mobile/content4.jpg",
        title:"RAZER HAMMERHEAD TRUE WIRELESS PRO",
        text:"탁월한 오디오 품질과 액티브 노이즈 캔슬링 기술을 자랑하는 THX® 인증의 완전한 무선 이어버드로 오디오 몰입도를 한 차원 높여보세요.",
    },{
        imgSrc:"img/mobile/content5.jpg",
        title:"RAZER OPUS",
        text:"고급 액티브 노이즈 캔슬링 기술이 있는 무선 THX® 인증 헤드폰으로 순수하고 충실도 높은 사운드를 방해 없이 즐기며 중단 없는 오디오를 경험하세요.",
    },{
        imgSrc:"img/mobile/content6.jpg",
        title:"THX ONYX™",
        text:"휴대용 DAC 헤드폰 앰프",
    },{
        imgSrc:"img/mobile/content7.jpg",
        title:"RAZER HAMMERHEAD TRUE WIRELESS",
        text:"몰입감에 새롭게 눈뜨다",
    },{
        imgSrc:"img/mobile/content8.jpg",
        title:"RAZER OPUS X",
        text:"ANC 기술을 탑재한 저지연 무선 헤드셋",
    },{
        imgSrc:"img/mobile/content9.jpg",
        title:"RAZER ANZU",
        text:"최첨단 오디오 글래스로 시력 보호는 물론 몰입형 사운드까지 경험하며 세상을 다른 관점에서 보고 들어보세요.",
    }
];
const contentsWrap = document.querySelector(".contentsWrap");
contents.forEach(function(element){
    contentsWrap.innerHTML += `<div class="showBox">
                                    <img src="${element.imgSrc}">
                                    <div class="textWrap">
                                        <h3>${element.title}</h3>
                                        <p>${element.text}</p>
                                        <a>자세한 정보<i class="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>`
});
const moreBtn = document.querySelector(".more");
const showBox = document.querySelectorAll(".contentsWrap .showBox");

let startIndex = 3;
let minIndex = 3;
moreBtn.onclick = function(){
    for(let i=startIndex; i<startIndex+3; i++){
        showBox[i].style.display = "flex";
    }
    startIndex = startIndex + 3;
    if(startIndex >= showBox.length){
        moreBtn.style.display = "none";
    }            
}