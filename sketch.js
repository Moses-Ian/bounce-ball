let ball;
let spinner;

function setup() {
  // put setup code here
	let canvas = createCanvas(300, 300);
	canvas.parent('sketch-container');
	createParameters();

	//ball = new Ball(150, 150, 10, 0, ballRad);
	spinner = new Spinner(150, 150, 100, .05, .02, color2);
}

function draw() {
  // put drawing code here
	background(51);

	//ball.update();
	//ball.show();

	spinner.update();
	spinner.show();
}