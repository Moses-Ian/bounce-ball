let ball;
let spinner;

function setup() {
  // put setup code here
	let canvas = createCanvas(600, 600);
	canvas.parent('sketch-container');
	createParameters();

	ball = new Ball(200, 200, 10, 0, ballRad);
	spinner = new Spinner(width / 2, height / 2, 200, .05, .02, color2);
}

function draw() {
  // put drawing code here
	background(51);

	ball.update();
	ball.collide(spinner);
	ball.show();

	spinner.update();
	spinner.show();
}