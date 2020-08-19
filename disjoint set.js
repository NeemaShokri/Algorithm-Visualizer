class DisjointSets{

    constructor() {
        this.pointers = [];
        this.items = new Map();
        this.index = 0;
    }

    makeSet(item) {
        this.pointers.push(-1);
        this.items.set(item, this.index);
        this.index++;
    }

    findSet(item) {

        var itemIndex = this.items.get(item);
        var visited = new Set();

        while (this.pointers[itemIndex] >= 0) {
            visited.add(itemIndex);
            itemIndex = this.pointers[itemIndex];
        }
        
        visited.forEach(i => {
            if (i != itemIndex) {
                this.pointers.splice(i, 1, itemIndex);
            }
        })

        return itemIndex;
    }

    union(item1, item2) {
        var rootA = this.findSet(item1);
        var rootB = this.findSet(item2);

        if (rootA == rootB) {
            return false;
        }

        var weightA = -1 * this.pointers[rootA];
        var weightB = -1 * this.pointers[rootB];
        
        if (weightA < weightB) {
            this.pointers.splice(rootA, 1, rootB);
            this.pointers.splice(rootB, 1, -1 * (weightB + weightA));
        } else {
            this.pointers.splice(rootB, 1, rootA);
            this.pointers.splice(rootA, 1, -1 * (weightB + weightA));
        }
        return true;
    }


}