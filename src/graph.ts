interface Node<T> {
    value: T;
    neighbors: Node<T>[];
}

export default class Graph<T> {
    private nodes: Map<T, Node<T>> = new Map();

    addNode(value: T): Node<T> {
        if (!this.nodes.has(value)) {
            const node = { value, neighbors: [] };
            this.nodes.set(value, node);
            return node;
        } else {
            return this.nodes.get(value)!;
        }
    }

    addEdge(value1: T, value2: T): void {
        const node1 = this.addNode(value1);
        const node2 = this.addNode(value2);
        node1.neighbors.push(node2);
    }
}
