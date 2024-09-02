// initial cicrle scale animation
var circles = function() {
    const circle1 = document.querySelector('#circle1');
    const circle2 = document.querySelector('#circle2');

    circle2.style.animation = 'circle-scale-anim .5s ease';

    setTimeout(function() {
        circle1.style.animation = 'circle-scale-anim .5s ease';
    }, 250);

    setTimeout(function() {
        circle2.style.display = 'none';
    }, 500);

    setTimeout(function() {
        circle1.style.display = 'none';
    }, 750);
};

circles();
