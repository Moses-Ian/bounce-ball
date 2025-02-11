class Ball {

	constructor(x, y, vx, vy, rad) {
		this.pos = createVector(x, y);
		this.vel = createVector(vx, vy);
		this.rad = rad;
		this.mass = 1;
	}

	update() {
		//console.log(this.vel.mag());
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

	// https://www.youtube.com/watch?v=GfmV6rPd4C0
	// https://www.youtube.com/watch?v=dJNFPv9Mj-Y
	collide(spinner) {
		// we start out inside the spinner


		let dist = this.pos.dist(spinner.pos);
		if (dist + this.rad > spinner.rad) {
			let oldVelMag = this.vel.mag();
			let massSum = this.mass + spinner.mass;
			let impactVector = p5.Vector.sub(spinner.pos, this.pos);
			let velDiff = p5.Vector.sub(spinner.vel, this.vel);
			let velMag = this.vel.mag();
			let angle = this.vel.angleBetween(impactVector);
			
			// component along the impact vector
			let impactMag = velMag * cos(angle);
			let impactComponent = impactVector.copy();
			impactComponent.setMag(impactMag);

			// component perpendicular to that
			let perpComponent = this.vel.copy().sub(impactComponent);

			// negate the impactComponent
			impactComponent.x = -impactComponent.x;
			impactComponent.y = -impactComponent.y;

			// negate the perpendicular component
			//perpComponent.x = -perpComponent.x;
			//perpComponent.y = -perpComponent.y;

			// the new velocity is the sum of the negated impact component and the perpendicular component
			this.vel = impactComponent;
			this.vel.add(perpComponent);

			// set the position to the correct point along the impact vector
			let posMag = spinner.rad - this.rad;
			this.pos = impactVector;
			this.pos.setMag(-posMag);
			this.pos.add(spinner.pos);

			// compare the old and new velocities
			let newVelMag = this.vel.mag();
			this.velMagOffset = newVelMag - oldVelMag;
			this.vel.setMag(newVelMag - this.velMagOffset);

			// kick the speed toward the desired speed on each bounce
			this.softLimit();
		}
	}

	softLimit() {
		let force = this.vel.mag() * (softSpeed - this.vel.mag()) * softLimitKick;
		let forceVector = this.vel.copy().setMag(force);
		this.vel.add(forceVector);
	}

	show() {
		stroke(255);
		fill(0);
		circle(this.pos.x, this.pos.y, this.rad * 2);
	}
}