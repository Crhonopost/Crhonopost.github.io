document.addEventListener('scroll', scrollHandler);

let sectionIdx = 0;
const listSections = document.querySelectorAll(".section");
const raccourciSections = document.querySelectorAll("nav > a");
for(let i=0; i<listSections.length; i++){
    raccourciSections[i].addEventListener("click", function(event){
        console.log(i);
        changeCurrentSection(i);
    });
}

let previousPosY = 0;
let scrollForce = 0;
function scrollHandler(){
    manageScrollForce();

    if(fullInView(listSections[sectionIdx])){// && (sectionIdx!==listSections.length-1 && scrollForce<0)){
        scrollForce=0;
    }
    else{
        adjustScoll();
    }
}


function fullInView(element){
    const rect = element.getBoundingClientRect();

    return rect.top<0 && rect.bottom>(window.innerHeight);
}

function manageScrollForce(){
    scrollForce += (document.documentElement.scrollTop - previousPosY);

    if(scrollForce > 200){
        scrollForce = 0;
        if(sectionIdx<listSections.length-1){
            changeCurrentSection(sectionIdx+1);
        }
    }
    else if(scrollForce < -200){
        scrollForce = 0;
        if(sectionIdx>=1){
            changeCurrentSection(sectionIdx-1);
        }
    }
}

function changeCurrentSection(newIndex){
    raccourciSections[sectionIdx].style.backgroundColor = "";
    raccourciSections[newIndex].style.backgroundColor = "blue";
    sectionIdx = newIndex;
}

function adjustScoll(){
    let smoothY = lerp(0, listSections[sectionIdx].getBoundingClientRect().top, 0.05);
    scrollTo(0,document.documentElement.scrollTop + smoothY);
    previousPosY = document.documentElement.scrollTop;
}

function adjustPosition(targetY, type, duration){
    if(type === 'decrease'){
        adjustDecrease(document.documentElement.scrollTop, targetY, performance.now(), duration*1000);
    }
}

function adjustDecrease(previousPosY, targetY, startTime, timeout){
    let smoothY = lerp(previousPosY, targetY, 0.25);
    console.log(smoothY);
    scrollTo(0, smoothY);
    console.log(startTime)
    if(performance.now() - startTime < timeout){
        console.log("alo");
        setTimeout(function(){adjustDecrease(smoothY, targetY, startTime, timeout)}, 10);
    }
}

class CameraHandler{
    constructor(){
        this.animationType = "direct";
        this.targetY = 0;
        this.previousPosY = 0;
        this.startTime = performance.now();
        this.timeout = 0;
    }

    startAnimate(animationType, from, to, duration){
        this.animationType = animationType;
        this.previousPosY = from;
        this.targetY = to;
        this.startTime = performance.now();
        this.timeout = duration * 1000;
        this.id = setInterval(this.animate, 10);
    }

    animate(){
        let currentTime = performance.now();
        console.log(this.animationType);
        if(this.animationType !== "direct" && currentTime-this.startTime < this.timeout){
            let smoothY = lerp(this.previousPosY, this.targetY, 0.5);
            scrollTo(0, smoothY);
            this.previousPosY = smoothY;
            console.log(this.startTime);
        }
        else{
            clearInterval(this.id);
        }
    }
}


function addFallingAnimation(x, height, speed){
    let element = document.createElement("div");
    element.className = "topToDown";
    element.style.left = x + "px";
    element.style.animationDuration = speed + "s";
    element.style.height = height + "px";
    document.body.appendChild(element);
}

function playFalling(nb){
    let width = document.documentElement.clientWidth;
    for(let i=0; i<nb; i++){
        let height = 10 + Math.random() * 30;
        let r = Math.random() * width;
        addFallingAnimation(r, 50 + height, height/10);
    }
}
function resetFalling(){
    $$("topToDown").remove();
}

function lerp(a, b, x){
    return a + (b-a) * x;
}