const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 40;
const rows = canvas.height / scale;
const cols = canvas.width / scale;
var vertecies = [];
var edges = [];
var mst;
var start = null;
var end = null;

function carveMaze() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    vertecies = [];
    edges = [];

    for (let i = 0; i < rows; i++) {
        var temp = [];
        for (let j = 0; j < cols; j++) {
            const v = new Vertex(i * scale, j * scale);
            setTimeout(() => {
                v.draw("White");
            }, 60 * i);
            temp.push(v);
        }
        vertecies.push(temp);
    }
    
    for (let i = 0; i < rows; i+=1) {
        for (let j = 0; j < cols; j+=1) {
            if (i + 1 < vertecies.length) {
                const e = new Edge(vertecies[i][j], vertecies[i + 1][j], Math.random());
                //e.draw();
                edges.push(e);
            }
            if (j + 1 < vertecies.length) {
                const e = new Edge(vertecies[i][j], vertecies[i][j + 1], Math.random());
                //e.draw();
                edges.push(e);
            }
        }
    }

    mst = KruskalsMSTFinder(edges, vertecies);
    var timer = 240

    mst.forEach(e => {
        setTimeout(() => {
            e.draw("White");
        }, timer * 5);
        timer++;
    })
}

function solveMaze() {
    if (start != null && end != null) {
        start.draw("White");
        end.draw("White");
        mst.forEach(e => {e.draw();});
    }

    var x1 = Math.floor(Math.random() * vertecies.length);
    var y1 = Math.floor(Math.random() * vertecies.length);

    var x2 = Math.floor(Math.random() * vertecies.length);
    var y2 = Math.floor(Math.random() * vertecies.length);

    start = vertecies[x1][y1]
    end = vertecies[x2][y2]

    start.draw("Green");
    end.draw("Red");
}