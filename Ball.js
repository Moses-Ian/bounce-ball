class Ball {

	constructor(x, y, vx, vy, rad) {
		this.pos = createVector(x, y);
		this.vel = createVector(vx, vy);
		this.rad = rad;
	}

	update() {
		this.vel.add(gravity);
		this.pos.add(this.vel);

		if (this.pos.y >= height - this.rad) {
			this.pos.y = height - this.rad;
			this.vel.y = -this.vel.y;
		}
		if (this.pos.y <= this.rad) {
			this.pos.y = this.rad;
			this.vel.y = -this.vel.y;
		}
		if (this.pos.x >= width - this.rad) {
			this.pos.x = width - this.rad;
			this.vel.x = -this.vel.x;
		}
		if (this.pos.x <= this.rad) {
			this.pos.x = this.rad;
			this.vel.x = -this.vel.x;
		}



	}

	show() {
		stroke(255);
		fill(0);
		circle(this.pos.x, this.pos.y, this.rad * 2);
	}
}