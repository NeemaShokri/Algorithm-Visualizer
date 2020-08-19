class Edge {

    constructor(v1, v2, weight) {
        this.v1 = v1;
        this.v2 = v2;
        this.weight = weight
    }

    getV1() {
        return this.v1;
    }

    getV2() {
        return this.v2;
    }

    getWeight() {
        return this.weight;
    }

    draw() {
        ctx.strokeStyle = "Red";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.v1.getX() + scale / 2, this.v1.getY() + scale / 2);
        ctx.lineTo(this.v2.getX() + scale / 2, this.v2.getY() + scale / 2);
        ctx.stroke();
    }
}