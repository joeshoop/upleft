function qa(sel, ele) {
    if (!ele) {
        ele = document;
    }
    return Array.prototype.slice.call(ele.querySelectorAll(sel));
}
var fxArr = qa('.artifact');
var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var frq = rand(1, 30);

function shuffle(frq, arr) {
    for (var i = 0; i < frq; i++) {
        for (var k = 0; k < arr.length; k++) {
            var n = rand(1, 30);
            var fx = arr[k];
            fx.style.order = n;
            // fx.querySelector(".artifact-wrapper").style.transform = 'rotate(' + rand(-3, 3) + 'deg)';
        }
    }
}

// document.getElementById('logo').addEventListener('click', function(event) {
//     event.preventDefault();
//     shuffle(frq, fxArr);
// }, true);

window.onload = shuffle(frq, fxArr);