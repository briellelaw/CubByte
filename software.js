function moveTitle() {
    const title = document.getElementById('Title');
    const tag = document.getElementById('Tag');
   
    var pos = 220;
    var id = setInterval(frame, 2);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--; 
            tag.style.top = pos + 270 + "px";
            title.style.top = pos + "px"; 
             
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    moveTitle();
});
