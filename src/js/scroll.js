document.addEventListener('scroll', scrollHandler);

let listSections = [document.getElementById("section1"), document.getElementById("section2")];
let sectionIdx = 0;

let previousPosY = 0;
let scrollForce = 0;
let scrollDirection = 0;
function scrollHandler(){
    manageScrollForce();
    //console.log(scrollDirection);
    
    if(fullInView(listSections[sectionIdx]) || (scrollForce>0 && sectionIdx===listSections.length-1)){
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

    if(document.documentElement.scrollTop - previousPosY > 0){
        scrollDirection = 1;
    }
    else{
        scrollDirection = -1
    }

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
    listSections[sectionIdx].scrollIntoView();
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