class Particle {
	constructor(x, y, color) {
		this.pos = createVector(x, y);
		this.color = color;
		this.rad = 4;
		this.vel = p5.Vector.random2D();
		this.vel.setMag(random() * particleMaxSpeed);
		this.life = particleLifetime + random() * particleLifeRange;
		this.exists = true;
	}

	update() {
		this.pos.add(this.vel);
		this.life--;
		if (this.life <= 0)
			this.exists = false;
		this.color.setAlpha(particleMaxAlpha * this.life / (particleLifetime + particleLifeRange));
	}

	show() {
		noStroke();
		fill(this.color);
		circle(this.pos.x, this.pos.y, this.rad);
	}
}