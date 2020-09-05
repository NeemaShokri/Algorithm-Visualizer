const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const scale = 30;
ctx.canvas.width = Math.ceil((window.innerWidth * 0.9) / scale) * scale;
ctx.canvas.height = Math.ceil((window.innerHeight * 0.9) / scale) * scale;
const rows = canvas.height / scale;
const cols = canvas.width / scale;
var mst;
var start = null;
var end = null;

console.log("rows:" + rows);
console.log("cols: " + cols);

function carveMaze() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    graph = Graph.constructWithoutVertices();
    vertecies = [];
    edges = [];

    //Create grid of vertices
    for (let i = 0; i < rows; i++) {
        var temp = [];
        for (let j = 0; j < cols; j++) {
            const v = new Vertex(j * scale, i * scale);
            setTimeout(() => {
                v.draw("White");
            }, 25 * i);
            temp.push(v);
            graph.addVertex(v);
        }
        vertecies.push(temp);
    }
    
    //Create random weight edges between vertices
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i + 1 < vertecies.length) {
                const e = new Edge(vertecies[i][j], vertecies[i + 1][j], Math.random());
                edges.push(e);
                graph.addEdge(e);
            }
            if (j + 1 < vertecies[0].length) {
                const e = new Edge(vertecies[i][j], vertecies[i][j + 1], Math.random());
                edges.push(e);
                graph.addEdge(e);
            }
        }
    }

    mst = KruskalsMSTFinder(graph);
    var timer = rows * 25;

    Array.from(mst.getEdges()).sort(function(a, b) {
        return a.getWeight() - b.getWeight();
    }).forEach(e => {
        setTimeout(() => {
            e.draw("White");
        }, timer * 1);
        timer++;
    })
}

function solveMaze() {
    if (start != null && end != null) {
        start.draw("White");
        end.draw("White");
        mst.getEdges().forEach(e => {e.draw();});
    }

    start = Array.from(mst.getVertices())[Math.floor(Math.random() * Array.from(mst.getVertices()).length)];
    end = Array.from(mst.getVertices())[Math.floor(Math.random() * Array.from(mst.getVertices()).length)];

    start.draw("Green");
    end.draw("Red");
}