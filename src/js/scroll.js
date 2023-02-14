document.addEventListener('scroll', scrollHandler);

let listSections = [document.getElementById("section1"), document.getElementById("section2")];
let sectionIdx = 0;

let previousPosY = 0;
let scrollForce = 0;
function scrollHandler(){
    scrollForce += (document.documentElement.scrollTop - previousPosY);

    if(scrollForce > 200){
        scrollForce = 0;
        if(sectionIdx<listSections.length-1){
            sectionIdx++;
        }
    }
    else if(scrollForce < -200){
        scrollForce = 0;
        if(sectionIdx>=1){
            sectionIdx--;
        }
    }

    listSections[sectionIdx].scrollIntoView();
    previousPosY = document.documentElement.scrollTop;
}