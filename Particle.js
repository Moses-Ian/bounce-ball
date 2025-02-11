class Particle {
	constructor(x, y, _color) {
		this.pos = createVector(x, y);
		this._color = copyColor(_color);
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
		this._color.setAlpha(particleMaxAlpha * this.life / (particleLifetime + particleLifeRange));
	}

	show() {
		noStroke();
		fill(this._color);
		circle(this.pos.x, this.pos.y, this.rad);
	}
}