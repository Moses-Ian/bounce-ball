let ball;
let spinner;
var impactPoint;
let spinners;
var particles;

function setup() {
  // put setup code here
	let canvas = createCanvas(600, 600);
	canvas.parent('sketch-container');
	createParameters();

	ball = new Ball(200, 200, 12, 0, ballRad);

	spinners = [];
	spinners.push(new Spinner(width / 2, height / 2, 200, .05, .02, color2));

	particles = [];
}

function draw() {
  // put drawing code here
	background(51);

	ball.update();
	spinners.forEach(spinner => ball.collide(spinner));
	ball.show();

	console.log(spinners.length);
	spinners.forEach(spinner => {
		spinner.update();
		spinner.show();
	});

	particles.forEach(particle => {
		particle.update();
		particle.show();
	});

	// cleanup
	for (let i = spinners.length - 1; i >= 0; i--)
		if (!spinners[i].exists)
			spinners.splice(i, 1);
	for (let i = particles.length - 1; i >= 0; i--)
		if (!particles[i].exists)
			particles.splice(i, 1);

}