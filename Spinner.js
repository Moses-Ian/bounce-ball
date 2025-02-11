class Spinner {
    constructor(x, y, rad, cutoutPercent, angVel, color) {
        this.pos = createVector(x, y);
        this.rad = rad;
        this.cutoutPercent = cutoutPercent;
        this.angle = 0;
        this.angVel = angVel;
        this.color = color;
    }

    update() {
        this.angle += this.angVel;
    }

    show() {
        push();
        translate(this.pos);
        rotate(this.angle);
        stroke(this.color);
        noFill();
        strokeWeight(2);
        let cutout = TWO_PI * this.cutoutPercent; // 5% of the arc
        arc(0, 0, this.rad * 2, this.rad * 2, cutout / 2, TWO_PI - cutout / 2);
        pop();
    }
}