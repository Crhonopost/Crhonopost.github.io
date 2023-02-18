document.addEventListener('scroll', scrollHandler);

let listSections = [document.getElementById("section1"), document.getElementById("section2")];
let sectionIdx = 0;

let previousPosY = 0;
let scrollForce = 0;
function scrollHandler(){
    manageScrollForce();

    if(!fullInView(listSections[sectionIdx])){// && (sectionIdx!==listSections.length-1 && scrollForce<0)){
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
            sectionIdx++;
            playFalling(10);
        }
    }
    else if(scrollForce < -200){
        scrollForce = 0;
        if(sectionIdx>=1){
            sectionIdx--;
        }
    }
}

function adjustScoll(){
    let smoothY = lerp(0, listSections[sectionIdx].getBoundingClientRect().top, 0.15);
    scrollTo(0,document.documentElement.scrollTop + smoothY);
    previousPosY = document.documentElement.scrollTop;
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