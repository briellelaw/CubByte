const url = 'https://briellelaw.github.io/CubByte/';
const urlTemp = 'http://127.0.0.1:5500/';

function moveTitle() {
    const title = document.getElementById('Title');
    const tag = document.getElementById('Tag');
    const pageTitle = document.getElementById('PageTitle');
   
    var pos = 150;
    var id = setInterval(frame, 2);
    pageTitle.style.top = 400 + "px";
    function frame() {
        if (pos == 50) {
            clearInterval(id);
        } else {
            pos--; 
            tag.style.top = pos + 270 + "px";
            title.style.top = pos + "px"; 
        }
    }
}

function moveTitleSmall() {
    const title = document.getElementById('Title');
    const tag = document.getElementById('Tag');
    const pageTitle = document.getElementById('PageTitle');
   
    var pos = 0;
    var id = setInterval(frame, 2);
    pageTitle.style.top = 400 + "px";
    function frame() {
        if (pos == 50) {
            clearInterval(id);
        } else {
            pos++; 
            tag.style.top = pos + 270 + "px";
            title.style.top = pos + "px"; 
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    // if (document.referrer === 'https://briellelaw.github.io/CubByte/index.html') {
    if (document.referrer === 'http://127.0.0.1:5500/index.html') {
        moveTitle();
    }
    else if (document.referrer === urlTemp + 'html/systems.html' ||
             document.referrer === urlTemp + 'html/networking.html' ||
             document.referrer === urlTemp + 'html/cloud.html') {
        moveTitleSmall();
    }
    else {
        const title = document.getElementById('Title');
        const tag = document.getElementById('Tag');
        const pageTitle = document.getElementById('PageTitle');
        var pos = 50;
        title.style.top = pos + "px"; 
        tag.style.top = pos + 270 + "px";
        pageTitle.style.top = 400 + "px";
    } 
});
