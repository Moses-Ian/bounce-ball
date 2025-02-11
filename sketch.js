let ball;

function setup() {
  // put setup code here
	let canvas = createCanvas(300, 300);
	canvas.parent('sketch-container');
	createParameters();

	ball = new Ball(150, 150, 10, 0, ballRad);

}

function draw() {
  // put drawing code here
	background(51);

	ball.update();
	ball.show();
}