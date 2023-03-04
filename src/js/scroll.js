document.addEventListener('wheel', scrollHandler);

let sectionIdx = 0;
const listSections = document.querySelectorAll(".section");
const raccourciSections = document.querySelectorAll("nav a");
for(let i=0; i<listSections.length; i++){
    raccourciSections[i].addEventListener("click", function(event){
        changeCurrentSection(i);
    });
}

let previousPosY = 0;
let scrollForce = 0;
function scrollHandler(eventWheel){
    manageScrollForce(eventWheel.deltaY);

    if(Utils.fullInView(listSections[sectionIdx])){// || (sectionIdx===2 && scrollForce>0)){
        scrollForce=0;
        Camera.stopAdjust();
    }
    else{
        Camera.startAdjust();
    }
}

// manage the scroll force to change the current section
function manageScrollForce(scrollAmount){
    scrollForce += scrollAmount;

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
    select(raccourciSections[newIndex]);
    deselect(raccourciSections[sectionIdx]);
    sectionIdx = newIndex;
    Camera.setTargetY(listSections[sectionIdx].getBoundingClientRect().top + window.scrollY);
}
function select(element){
    element.classList.remove("unselected");
    element.classList.add("selected");
}
function deselect(element){
    element.classList.remove("selected");
    element.classList.add("unselected")
}

class Camera{
    // use methods to move the camera in a static context
    static cameraId = null;
    static targetY = 0;


    static startAdjust(){
        if(Camera.cameraId === null){
            Camera.adjust();
        }
    }
    static adjust(){
        let smoothY = Utils.lerp(document.documentElement.scrollTop, Camera.targetY, 0.05);

        scrollTo(0, smoothY);
        Camera.cameraId = requestAnimationFrame(Camera.adjust);
    }

    static stopAdjust(){
        cancelAnimationFrame(Camera.cameraId);
        Camera.cameraId = null;
    }

    static setTargetY(newTargetY){
        Camera.targetY = newTargetY;
    }
}