window.mouseIsDown = false;

function docOnMousedown(e) {
    window.mouseIsDown = true;
}

function docOnMouseup(e) {
    window.mouseIsDown = false;
}

document.onmousedown = docOnMousedown;
document.onmouseup = docOnMouseup;


function rangeSliderTouchDrag(e) {
    var el = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);

    if (el && el.tagName === 'label') {
        el.click();
    }
    if (el && el.closest('label')) {
        el.closest('label').click();
    }
}

function rangeSliderMouseOver(e) {
    if (window.mouseIsDown) {
        event.target.click();
    }
}

var options = document.querySelectorAll('.range-slider ul li label'),
    optionsArray = Array.prototype.slice.call(options);

optionsArray.some(function(option) {
    option.ontouchmove = rangeSliderTouchDrag;
    option.onmouseover = rangeSliderMouseOver;
});
