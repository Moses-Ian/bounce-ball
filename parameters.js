var gravity;
var ballRad;
var color1, color2, color3;
var softSpeed;
var softLimitKick;

function createParameters() {
    gravity = createVector(0, 0.8);
    ballRad = 22;
    color1 = color('#d3cae2');
    color2 = color('#e6c17a');
    color3 = color('#f6ede3');
    softSpeed = 20;
    softLimitKick = 0.01;
}