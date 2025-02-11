var gravity;
var ballRad;
var color1, color2, color3;
var softSpeed;
var softLimitKick;
var particleLifetime;
var particleLifeRange;
var particleMaxSpeed;
var shrinkSpeed;
var minSize;

function createParameters() {
    // physics
    gravity = createVector(0, 0.8);

    // ball
    ballRad = 22;
    softSpeed = 20;
    softLimitKick = 0.01;

    // spinners
    color1 = color('#d3cae2');
    color2 = color('#e6c17a');
    color3 = color('#f6ede3');

    // particles
    particleLifetime = 30;
    particleLifeRange = 10;
    particleMaxSpeed = 0.6;
    particleMaxAlpha = 255;

    // ball trail
    shrinkSpeed = 1;
    minSize = 15;
}