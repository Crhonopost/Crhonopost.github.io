const link = document.querySelectorAll('.hover-this');
const cursor = document.querySelector('.cursor');
let offsetY = 0;

const animateit = function (e) {
    console.log(e);
};

const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = -50+ x + 'px';
    cursor.style.top =  -50 + y + 'px';
};

link.forEach(b => b.addEventListener('mousemove', animateit));
link.forEach(b => b.addEventListener('mouseleave', animateit));


window.addEventListener('mousemove', editCursor);
window.addEventListener('scroll', () => {
    offsetY = window.pageYOffset;
    cursor.style.transform = `translateY(${offsetY}px)`;
});