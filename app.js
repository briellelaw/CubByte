const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });
}


function moveTitle() {
    var pos = 0;
    var id = setInterval(frame, 2);
    function frame() {
        const title = document.getElementById('Title');
        const tag = document.getElementById('Tag');
        if (pos == 220) {
            clearInterval(id);
        } else {
            pos++; 
            tag.style.top = pos + 270 + "px";
            title.style.top = pos + "px"; 
             
        }
    }
}

window.onload = moveTitle();
navSlide();
// moveTitle();