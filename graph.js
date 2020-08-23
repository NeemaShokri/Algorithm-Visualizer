class Graph{

    constructor(vertices, edges) {
        this.vertices = new Set();
        this.edges = new Map();

        vertices.forEach(v => {
            this.addVertex(v);
        })

        edges.forEach(e => {
            this.addEdge(e);
        })
    }

    static constructWithoutVertices() {
        return new Graph([], []);
    }

    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.add(vertex);
            this.edges.set(vertex, new Set());
        }
    }

    addEdge(edge) {
        this.edges.get(edge.getV1()).add(edge);
        this.edges.get(edge.getV2()).add(edge);
    }

    getVertices() {
        return this.vertices;
    }

    getEdges() {
        var result = new Set();
        this.vertices.forEach(v => {
            this.edges.get(v).forEach(e => {
                result.add(e);
            })
        })
        return result;
    }

    edgesFrom(vertex) {
        if (this.edges.has(vertex)) {
            return this.edges.get(vertex);
        }
    }

}