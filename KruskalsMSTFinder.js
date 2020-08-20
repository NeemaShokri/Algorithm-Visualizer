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