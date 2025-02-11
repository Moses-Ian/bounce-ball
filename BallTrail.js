class BallTrail {
    constructor() {
        this.balls = [];
    }

    add(ball) {
        this.balls.push({
            x: ball.pos.x,
            y: ball.pos.y,
            r: ball.rad,
            life: 30
        });
    }

    update() {
        this.balls.forEach(ball => {
            ball.r -= shrinkSpeed;
            ball.life--;
        });
        if (this.balls[0].life <= 0 || this.balls[0].r <= minSize)
            this.balls.splice(0, 1);
    }

    show() {
        noStroke();
        fill(color1);
        this.balls.forEach(ball => {
            circle(ball.x, ball.y, ball.r * 2);
        });
    }
}