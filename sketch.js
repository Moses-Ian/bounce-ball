let ball;
let spinner;
var impactPoint;
let spinners;

function setup() {
  // put setup code here
	let canvas = createCanvas(600, 600);
	canvas.parent('sketch-container');
	createParameters();

	ball = new Ball(200, 200, 12, -5, ballRad);
	spinners = [];
	spinners.push(new Spinner(width / 2, height / 2, 200, .05, .02, color2));
}

function draw() {
  // put drawing code here
	background(51);

	ball.update();
	spinners.forEach(spinner => ball.collide(spinner));
	ball.show();

	spinners.forEach(spinner => {
		spinner.update();
		spinner.show();
	});
}