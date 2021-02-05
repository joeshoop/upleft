var obj, safeZone, gridArea, gridTop, gridLeft, gridHeight, gridWidth;


function gridVars(){ // define variables for Grid
  gridArea = document.querySelector('.artifacts').getBoundingClientRect();
  gridTop = gridArea.top;
  gridLeft = gridArea.left
  gridWidth = gridArea.width;
  gridHeight = gridArea.height;
};

function gridLimits(){
  // Define edges of safe area as px: Top Edge, Right Edge, Bottom Edge, Left Edge
  safeZone = [0, gridWidth - obj.offsetWidth, gridHeight - obj.offsetHeight, 0];
};

// function eachArtifact (){
//     var artifacts = document.querySelectorAll(".artifact-wrapper");
//     artifacts.forEach(function(element){
//         // var artifactSize = element.getBoundingClientRect();

//         var rotateRandom = Math.floor(Math.random()*2)+1;
//         rotateRandom *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
//         element.style.transform = 'rotate(' + rotateRandom + 'deg)';
//     });
// };

window.onload = function(){ // set variables on load
    
// gridVars();
// eachArtifact();

// console.log(gridArea);
    
    // to do:
    // randomize x & y properties on load
    // option for user to click randomize

    // for each top level item in that array, create a handle in the html
    // for (artifact in artifacts) {
    //   var currentHandle = draggableHandles[handles[handle]]
    //   console.log(currentHandle.title);

    //   document.querySelector('.editor-handles').innerHTML +=
    //     '<div class="draggable-handle ' + currentHandle.class + '" data-draggable="true" data-draggable-type="' + currentHandle.class + '"> \
    //       ' + currentHandle.title + '\
    //       <ul class="draggable-directions"> \
    //         <li class="up"> \
    //           <span class="label">' + currentHandle.labels.top + '</span> \
    //         </li> \
    //         <li class="right"> \
    //           <span class="label">' + currentHandle.labels.right + '</span> \
    //         </li> \
    //         <li class="down"> \
    //           <span class="label">' + currentHandle.labels.bottom + '</span> \
    //         </li> \
    //         <li class="left"> \
    //           <span class="label">' + currentHandle.labels.left + '</span> \
    //         </li> \
    //       </ul> \
    //     </div>';
    // }

}


var resizeEnd;
window.onresize = function() { // reset variables after a resize
  // need to reset position of images after resize as well
    clearTimeout(resizeEnd);
    resizeEnd = setTimeout(function() {
        gridVars();
    }, 500);
}

// function click(e) {
//   obj = e.target;

//     if (obj.dataset.draggable) {
        
//         document.body.classList.remove("draggable-dropped");

//         draggableEdges();

//         obj.classList.add("being-dragged");

//         // Distance you clicked from top left corner of box.
//         cursorOffsetY = cursorY - obj.offsetTop;
//         cursorOffsetX = cursorX - obj.offsetLeft;

//     }
// }

// if (true) { // If an object is being dragged, make it follow the coordinates of the mouse cursor.

//     dragLimits = [0, gridWidth - obj.offsetWidth, gridHeight - obj.offsetHeight, 0];
    
//     // limit draggable range to edges of editor
//     newBoxTop = Math.max(Math.min(cursorY - cursorOffsetY, dragLimits[2]), 0);
//     newBoxLeft = Math.max(Math.min(cursorX - cursorOffsetX, dragLimits[1]), 0);

//     obj.style.top = newBoxTop + 'px';
//     obj.style.left = newBoxLeft + 'px';

//     if (newBoxTop < (editorWidth/2)) {  
//     // (should be based on center middle of draggable box, rather than on top left coordinate.)
//     // should also account for the number of items in each arrays above (lines 4-11)
//     // should work on each box independently
//       document.body.classList.replace("typography-x-thin", "typography-x-heavy");
//     } else {
//       document.body.classList.replace("typography-x-heavy", "typography-x-thin");
//     }

//     if (newBoxLeft < (editorWidth/2)) {
//       document.body.classList.replace('typography-y-large', "typography-y-small");
//     } else {
//       document.body.classList.replace('typography-y-small', "typography-y-large");
//     }
// }

// function drop() {
//   document.body.classList.add("draggable-dropped");

//   obj.classList.remove("being-dragged");
//   beingDragged = false;
//   obj = false;
//   newBoxTop = false;
//   newBoxLeft = false;
// }

// document.onmousedown = click;

// document.onmouseup = drop;