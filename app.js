const url = 'https://briellelaw.github.io/CubByte/';
const urlTemp = 'http://127.0.0.1:5500/';

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });
}


function moveTitleSmall() {
    var pos = 50;
    var id = setInterval(frame, 2);
    function frame() {
        const title = document.getElementById('Title');
        const tag = document.getElementById('Tag');
        if (pos == 150) {
            clearInterval(id);
        } else {
            pos++; 
            tag.style.top = pos + 270 + "px";
            title.style.top = pos + "px"; 
             
        }
    }
}

function moveTitleLarge() {
    var pos = 0;
    var id = setInterval(frame, 2);
    function frame() {
        const title = document.getElementById('Title');
        const tag = document.getElementById('Tag');
        if (pos == 150) {
            clearInterval(id);
        } else {
            pos++; 
            tag.style.top = pos + 270 + "px";
            title.style.top = pos + "px"; 
             
        }
    }
}

if (document.referrer === urlTemp + 'html/hardware.html' ||
    document.referrer === urlTemp + 'html/software.html' ||
    document.referrer === urlTemp + 'html/databases.html') {
    moveTitleSmall();
} 
else {
    moveTitleLarge();
}
navSlide();