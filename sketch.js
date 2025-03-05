let ball;
let spinner;
var impactPoint;
let spinners;
var particles;
let ballTrail;
var song;
let muteButton;
let volumeSlider;
let noteIndex;
let noteCount = 0;
let noteButton;
let notes;
let mute = false;
let audioState = false;

function preload() {
	song = loadSound("./sounds/9024harpsichordstyle1.ogg");
	notes = [];
	for (let i = 1; i <= 100; i++) {
		let num = i.toString().padStart(2, '0');	// chat-gpt
		notes.push(loadSound(`./sounds/chime_-${num}.mp3`));
	}
	for (let i = 1; i <= 100; i++) {
		let num = i.toString().padStart(2, '0');	// chat-gpt
		notes.push(loadSound(`./sounds/chime2-${num}.mp3`));
	}
}

function setup() {
  // put setup code here
	let canvas = createCanvas(600, 600);
	canvas.parent('sketch-container');
	createParameters();

	ball = new Ball(200, 200, 1, 0, ballRad);
	//ball = new Ball(200, 200, 12, 0, ballRad);

	spinners = [];
	spinners.push(new Spinner(width / 2, height / 2, 200, .05, .0200, color2));
	spinners.push(new Spinner(width / 2, height / 2, 210, .05, .0202, color3));
	spinners.push(new Spinner(width / 2, height / 2, 220, .05, .0204, color2));
	spinners.push(new Spinner(width / 2, height / 2, 230, .05, .0206, color3));
	spinners.push(new Spinner(width / 2, height / 2, 240, .05, .0208, color2));
	spinners.push(new Spinner(width / 2, height / 2, 250, .05, .0210, color3));
	spinners.push(new Spinner(width / 2, height / 2, 260, .05, .0212, color2));

	particles = [];

	ballTrail = new BallTrail();

	// sound
	noteIndex = 0;
	
	muteButton = createButton('Mute');
	muteButton.position(10, 10);
	muteButton.mousePressed(toggleMute);

	volumeSlider = createSlider(0, 1, 0.5, 0.01);
	volumeSlider.position(10, 40);
	volumeSlider.input(updateVolume);

	//noteButton = createButton('Note');
	//noteButton.position(10, 60);
	//noteButton.mousePressed(playNote);
}

function draw() {
	background(51);

	ballTrail.add(ball);
	ballTrail.update();
	ballTrail.show();

	ball.update();
	spinners.forEach(spinner => {
		let didColide = ball.collide(spinner);
		if (didColide)
			tryPlayNote();
	});
	ball.show();

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

function toggleMute() {
	mute = !mute;
}

function updateVolume() {
	song.setVolume(volumeSlider.value());
}

function tryPlayNote() {
	if (mute)
		return;

	if (getAudioContext().state !== 'running') {
		getAudioContext().resume();
		return;
	}

	notes[noteIndex].play();
	noteIndex++;
	if (noteIndex >= notes.length)
		noteIndex = 0;
}

function stopSong() {
	console.log('stop');
	song.stop();
}