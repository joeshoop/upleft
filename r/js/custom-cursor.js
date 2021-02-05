function move(e){
    // Track the coordinates of the mouse cursor, and move cursor lines with mouse.
    if (e.pageX) {
        // Cursor is visible in top left corner on devices without a mouse. Figure out a way to hide it until a mouse move is detected.
        // Should also fall back to a default cursor, and only trigger this fancy stuff if it is supported
  
        cursorX = e.clientX; // X coordinate based on page, not viewport.
        cursorY = e.clientY; // Y coordinate based on page, not viewport.
  
        document.querySelector('.cursor-container').style.transform = 'translate3d(' + cursorX + 'px,' + cursorY + 'px, 0)';
    };
  };

function click(e){
    // Click events here
    // Expand the cursor to full screen when navigating into a project?
};

var resetCursor;
var artifacts = document.getElementsByClassName('artifact');
var artifactMouseEnter = function() {
    clearTimeout(resetCursor);
    document.querySelector('.cursor-content').innerHTML = this.dataset.meta;
    document.querySelector('.cursor').classList.add('hovering', this.dataset.slug);
};
var artifactMouseLeave = function() {
    resetCursor = setTimeout(function() { 
        document.querySelector('.cursor-content').innerHTML = "";
    }, 200); // This number should match the transition times in cursor.scss
    document.querySelector('.cursor').classList.remove('hovering', this.dataset.slug);
};
for (var i = 0; i < artifacts.length; i++) {
    artifacts[i].addEventListener('mouseenter', artifactMouseEnter, false);
    artifacts[i].addEventListener('mouseleave', artifactMouseLeave, false);
};


document.onmousemove = move;

document.onclick = click;