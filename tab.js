var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');
var content3 = document.getElementById('content3');
let Btn1 = document.getElementById('btn1')
let Btn2 = document.getElementById('btn2')
let Btn3 = document.getElementById('btn3')

function openHtml(){
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    Btn1.style.background = "rgb(0, 128, 0)"
    Btn2.style.background = "rgb(30, 144, 254)"
    Btn3.style.background = "rgb(30, 144, 254)"
    Btn1.style.color = "rgb(0, 0, 0)"
    Btn2.style.color = "rgb(255, 255, 255)"
    Btn3.style.color = "rgb(255, 255, 255)"
    content1.style.transitionDelay = "0.3s"
    content1.style.transitionDelay = "0s"
    content1.style.transitionDelay = "0s"
   
}
function openCss(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    Btn1.style.background = "rgb(30, 144, 254)"
    Btn2.style.background = "rgb(0, 128, 0)"
    Btn3.style.background = "rgb(30, 144, 254)"
    Btn1.style.color = "rgb(255, 255, 255)"
    Btn2.style.color = "rgb(0, 0, 0)"
    Btn3.style.color = "rgb(255, 255, 255)"
    content1.style.transitionDelay = "0s"
    content1.style.transitionDelay = "0.3ss"
    content1.style.transitionDelay = "0s"
}
function openJs(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
    Btn1.style.background = "rgb(30, 144, 254)"
    Btn2.style.background = "rgb(30, 144, 254)"
    Btn3.style.background = "rgb(0, 128, 0)"
    Btn1.style.color = "rgb(255, 255, 255)"
    Btn2.style.color = "rgb(255, 255, 255)"
    Btn3.style.color = "rgb(0, 0, 0)"
    content1.style.transitionDelay = "0s"
    content1.style.transitionDelay = "0s"
    content1.style.transitionDelay = "0.3s"
}