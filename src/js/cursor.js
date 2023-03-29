const cursor = document.querySelector('.contour');
const cursorinner = document.querySelector('.point');
let offsetY = 0;


var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${offsetY + e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${offsetY + e.clientY}px - 50%), 0)`;
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    focus();
  });
  item.addEventListener('mouseleave', () => {
    unFocus();
});
})


function focus(){
    cursor.classList.add('hover');
    cursorinner.classList.add('hover');
}
function unFocus(){
    cursor.classList.remove('hover');
    cursorinner.classList.remove('hover');
}