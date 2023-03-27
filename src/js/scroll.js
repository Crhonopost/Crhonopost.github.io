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
let reached = true;
function scrollHandler(eventWheel){
    manageScrollForce(eventWheel.deltaY);
}

// manage the scroll force to change the current section
function manageScrollForce(scrollAmount){
    scrollForce += scrollAmount;
    
    if(scrollForce > 0 && !Utils.fullInView(listSections[sectionIdx])){
        scrollForce = 0;
        if(sectionIdx<listSections.length-1 && listSections[sectionIdx].getBoundingClientRect().bottom < window.innerHeight){
            changeCurrentSection(sectionIdx+1);
        }
    }
    else if(scrollForce < 0 && !Utils.fullInView(listSections[sectionIdx]) && listSections[sectionIdx].getBoundingClientRect().top > 0){
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
    Camera.startAdjust();
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
            //Camera.adjust();
        }
    }
    static adjust(){
        let smoothY = Utils.lerp(document.documentElement.scrollTop, Camera.targetY, 0.05);

        scrollTo(0, smoothY);
        if(Math.abs(document.documentElement.scrollTop - Camera.targetY) < 5){
            scrollTo(0, Camera.targetY);
            Camera.stopAdjust();
        }
        else{
            Camera.cameraId = requestAnimationFrame(Camera.adjust);
        }
    }

    static stopAdjust(){
        cancelAnimationFrame(Camera.cameraId);
        Camera.cameraId = null;
    }

    static setTargetY(newTargetY){
        Camera.targetY = newTargetY;
    }
}

let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

ctx.filter = "blur(15px) contrast(20)";


class Circle{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;

        this.direction = [0.25,0.25];

        this.radius = radius;
        this.color = color;
    }

    update(){
        this.x += this.direction[0];
        this.y += this.direction[1];
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        
        ctx.fill();
    }
}

let circle = new Circle(20, 0, 30, "white");
let circle2 = new Circle(0, 0, 30, "white");

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    circle.update();
    circle2.update();
    circle.draw();
    circle2.draw();
    requestAnimationFrame(animate);
}