const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 40;
const rows = canvas.height / scale;
const cols = canvas.width / scale;
var vertecies = [];
var edges = [];

function KruskalsMSTFinder(edges, vertecies) {
    var finalMST = new Set();
    var msts = new DisjointSets();

    vertecies.forEach(arr => {
        arr.forEach(v => {
            msts.makeSet(v);
        })
    })

    edges.sort(function(a, b) {
        return a.getWeight() - b.getWeight();
    })

    edges.forEach(edge => {
        var u = edge.getV1();
        var v = edge.getV2();

        var uMST = msts.findSet(u);
        var vMST = msts.findSet(v);

        if (uMST != vMST) {
            finalMST.add(edge);
            msts.union(u, v);
        }
    })

    return finalMST;
}

for (let i = 0; i < rows; i++) {
    var temp = [];
    for (let j = 0; j < cols; j++) {
        const v = new Vertex(i * scale, j * scale);
        setTimeout(() => {
            ctx.strokeStyle = 'Black';
            v.draw();
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

console.log("Total Edges: " + edges.length);

var mst = KruskalsMSTFinder(edges, vertecies);

console.log("MST Size: " + mst.size);

var timer = 400;

mst.forEach(e => {
    setTimeout(() => {
        ctx.strokeStyle = 'Red';
        e.draw();
    }, timer * 5);
    timer++;
})