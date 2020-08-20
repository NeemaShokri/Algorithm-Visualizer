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

    draw(color) {
        ctx.fillStyle = color
        ctx.beginPath();
        ctx.arc(this.x + scale/2, this.y + scale/2, scale / 4, 0, 2 * Math.PI);
        ctx.fill();
    }
}