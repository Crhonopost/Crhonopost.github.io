let animations = [["#RichVote", "fromLeft"]];

for(let i=0; i<animations.length; i++){
    animations[i][0] = document.querySelector(animations[i][0]);
}

function manageAnimations(){
    animations.forEach(animation => {
        if(Utils.inView(animation[0])){
            animation[0].classList.add(animation[1]);
            console.log("add");
        }
    });
}

document.addEventListener("scroll", manageAnimations);





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
