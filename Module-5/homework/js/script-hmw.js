var slideInterval = 3500;
function getFigures() {
    console.log('getFigures');
    return document.getElementById('carousel').getElementsByTagName('figure');
    
}
    var pointer = 0;
function moveForward() {
    console.log('moveForward');

    var figures = getFigures();
    console.log(figures);
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startPlayback() {    
    console.log('startPlayback');
    setTimeout(moveForward, slideInterval);
     
}

startPlayback();