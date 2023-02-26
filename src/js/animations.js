let animations = [["#RichVote", "fromLeft"]];







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
