class Spinner {
    constructor(x, y, rad, cutoutPercent, angVel, _color) {
        this.pos = createVector(x, y);
        this.rad = rad;
        this.cutout = TWO_PI * cutoutPercent;
        this.angle = 0;
        this.angVel = angVel;
        this._color = copyColor(_color);
        this.mass = 1;
        this.vel = createVector(0, 0);
        this.exists = true;
    }

    update() {
        this.angle += this.angVel;
        if (this.angle > TWO_PI)
            this.angle -= TWO_PI;
    }

    destroy() {
        this.exists = false;
        for (let i = this.cutout + this.angle; i < TWO_PI + this.angle; i += TWO_PI / 180) {
            particles.push(new Particle(this.pos.x + this.rad * cos(i), this.pos.y + this.rad * sin(i), this._color));
        }
    }

    show() {
        if (!this.exists)
            return;

        push();
        translate(this.pos);
        scale(1, -1);
        rotate(-this.angle);
        stroke(this._color);
        noFill();
        strokeWeight(2);
        arc(0, 0, this.rad * 2, this.rad * 2, 0, TWO_PI - this.cutout);
        pop();
    }
}