class Vertex {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    draw() {
        ctx.fillStyle = "Black";
        ctx.strokeRect(this.x, this.y, scale, scale);
        ctx.fillStyle = "Red";
        ctx.beginPath();
        ctx.arc(this.x + scale/2, this.y + scale/2, 3, 0, 2 * Math.PI);
        ctx.fill();
    }
}