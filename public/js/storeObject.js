
const storeList1 = document.querySelector(".storeList1")
const storeList2 = document.querySelector(".storeList2")
const storeList3 = document.querySelector(".storeList3")
const boxWrap1 = document.querySelector(".boxWrap1");
const boxWrap2 = document.querySelector(".boxWrap2");
const boxWrap3 = document.querySelector(".boxWrap3");
const mid_btn1 = document.querySelector(".mid_btn1");
const mid_btn2 = document.querySelector(".mid_btn2");
const mid_btn3 = document.querySelector(".mid_btn3");
const prev1 = document.querySelector(".prev1");
const prev2 = document.querySelector(".prev2");
const prev3 = document.querySelector(".prev3");
const next1 = document.querySelector(".next1");
const next2 = document.querySelector(".next2");
const next3 = document.querySelector(".next3");
// let boxList1 = [
//     {
//         imgSrc:"img/store/boximg1.png",
//         title:"Razer Basilisk V3 <br> X HyperSpeed",
//         price:"105,000원",
//     },
//     {
//         imgSrc:"img/store/boximg2.png",
//         title:"Razer Universal Quick Charging Stand for Xbox",
//         price:"66,000원",
//     },
//     {
//         imgSrc:"img/store/boximg3.png",
//         title:"Razer Basilisk V3 X HyperSpeed",
//         price:"105,000원",
//     },
//     {
//         imgSrc:"img/store/boximg4.png",
//         title:"Razer BlackWidow V4 Pro - Green Switch - US",
//         price:"339,000원",
//     },{
//         imgSrc:"img/store/boximg5.png",
//         title:"Razer Kaira HyperSpeed - Xbox Licensed - Black",
//         price:"210,000원",
//     },{
//         imgSrc:"img/store/boximg6.png",
//         title:"Razer Orochi V2 - Roblox Edition",
//         price:"132,900원",
//     },{
//         imgSrc:"img/store/boximg7.png",
//         title:"Razer BlackWidow V3 - Green Switch - US",
//         price:"264,000원",
//     },{
//         imgSrc:"img/store/boximg8.png",
//         title:"Razer Barracuda X - Roblox Edition",
//         price:"194,000원",
//     },{
//         imgSrc:"img/store/boximg9.png",
//         title:"Razer x *A Bathing Ape® BlackWidow V3 - Green Switch",
//         price:"210,000원",
//     },{
//         imgSrc:"img/store/boximg10.png",
//         title:"Razer BlackWidow V3 - Green Switch - US",
//         price:"176,250원",
//     }
// ]
// let boxList2 = [
//     {
//         imgSrc:"img/store/box2img1.png",
//         title:"Razer DeathAdder V2 - Halo Infinite",
//         price:"78,750원",
//     },
//     {
//         imgSrc:"img/store/box2img2.png",
//         title:"Razer DeathAdder V2 Pro - Genshin Impact",
//         price:"142,500원",
//     },
//     {
//         imgSrc:"img/store/box2img3.png",
//         title:"Razer Huntsman V2 Tenkeyless - Linear Red Switch",
//         price:"194,250원",
//     },
//     {
//         imgSrc:"img/store/box2img4.png",
//         title:"Razer Athleisure - Instinct Tee - L",
//         price:"90,000원",
//     },{
//         imgSrc:"img/store/box2img5.png",
//         title:"Razer Athleisure - Instinct Shorts - L",
//         price:"105,000원",
//     },{
//         imgSrc:"img/store/box2img6.png",
//         title:"Team Razer Floor Rug",
//         price:"105,000원",
//     },{
//         imgSrc:"img/store/box2img7.png",
//         title:"Razer | EVISU Godhead Hoodie - L",
//         price:"479,000원",
//     },{
//         imgSrc:"img/store/box2img8.png",
//         title:"Razer | EVISU Daicock Print T-Shirt - L",
//         price:"210,000원",
//     },{
//         imgSrc:"img/store/box2img9.png",
//         title:'Razer Rogue 17" Backpack V3',
//         price:"199,000원",
//     },{
//         imgSrc:"img/store/box2img10.png",
//         title:'Razer Tactical Pro 17.3" Backpack v2',
//         price:"217,900원",
//     }
// ]
// let boxList3 = [
//     {
//         imgSrc:"img/store/box3img1.png",
//         title:"Razer Viper 8K Hz - ESL Edition",
//         price:"78,750원",
//     },
//     {
//         imgSrc:"img/store/box3img2.png",
//         title:"Razer BlackShark V2 - ESL Edition",
//         price:"142,500원",
//     },
//     {
//         imgSrc:"img/store/box3img3.png",
//         title:"Razer DeathAdder V3 Pro - Faker Edition",
//         price:"249,000원",
//     },
//     {
//         imgSrc:"img/store/box3img4.png",
//         title:"Razer DeathAdder V3 Pro - White",
//         price:"216,000원",
//     },{
//         imgSrc:"img/store/box3img5.png",
//         title:"Razer DeathStalker V2 Pro - Clicky Optical Switch",
//         price:"295,000원",
//     },{
//         imgSrc:"img/store/box3img6.png",
//         title:"Razer DeathStalker V2 Pro Tenkeyless",
//         price:"285,000원",
//     },{
//         imgSrc:"img/store/box3img7.png",
//         title:"Razer Huntsman Mini - Linear Optical Switch",
//         price:"180,000원",
//     },{
//         imgSrc:"img/store/box3img8.png",
//         title:"Razer Kiyo Pro Ultra",
//         price:"437,900원",
//     },{
//         imgSrc:"img/store/box3img9.png",
//         title:'Razer Kraken Kitty',
//         price:"192,299원",
//     },{
//         imgSrc:"img/store/box3img10.png",
//         title:'Razer Stream Controller',
//         price:"399,000원",
//     }
// ]
// boxList1.forEach(function(element){
//     boxWrap1.innerHTML +=   `<div class="showBox">
//                                 <img src="${element.imgSrc}">
//                                 <div class="textWrap">
//                                     <h3>${element.title}</h3>
//                                     <div>
//                                         <p>${element.price}</p>
//                                         <a>구입</a>
//                                     </div>
//                                 </div>
//                             </div>`
// });
// boxList2.forEach(function(element){
//     boxWrap2.innerHTML += `<div class="showBox">
//                             <img src="${element.imgSrc}">
//                             <div class="textWrap">
//                                 <h3>${element.title}</h3>
//                                 <div>
//                                     <p>${element.price}</p>
//                                     <a>구입</a>
//                                 </div>
//                             </div>
//                         </div>`
// });
// boxList3.forEach(function(element){
//     boxWrap3.innerHTML += `<div class="showBox">
//                             <img src="${element.imgSrc}">
//                             <div class="textWrap">
//                                 <h3>${element.title}</h3>
//                                 <div>
//                                     <p>${element.price}</p>
//                                     <a>구입</a>
//                                 </div>
//                             </div>
//                         </div>`
// });

cont2Slide(next1,prev1,boxWrap1,mid_btn1);
cont2Slide(next2,prev2,boxWrap2,mid_btn2);
cont2Slide(next3,prev3,boxWrap3,mid_btn3);

    function cont2Slide(next,prev,boxWrap,mid_btn){
        let count = 0;
        next.onclick = ()=>{
            if( count === 4){
                next.style.opacity = "0"
                boxWrap.style.transform = `translateX(${count * -15 +"%"})`
            }
            else if(count >= 1){
                
                count +=1;
                boxWrap.style.transform = `translateX(${count * -15 +"%"})`
                
            }
            else{
                prev.style.opacity = "1"
                count +=1;
                boxWrap.style.transform =`translateX(-15%)`
            }
            
        }
        prev.onclick = ()=>{
            if( count === 0){
                boxWrap.style.transform =`translateX(0%)`
                prev.style.opacity = "0"
            }
            else{
                next.style.opacity = "1"
                count -=1;
                boxWrap.style.transform = `translateX(${count * -15 +"%"})`
            }
            
        }
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 640){
                boxWrap.style.transform = `translateX(0px)`
                mid_btn.style.display = 'none';
            }
            else{
                count = 0;
                prev.style.opacity = "0"
                next.style.opacity = "1"
                boxWrap.style.transform = `translateX(0px)`
                mid_btn.style.display = 'flex';
            }
        })
        
                
    };         
    

