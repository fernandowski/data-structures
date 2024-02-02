interface TreeNode<T> {
    value: T;
    children: TreeNode<T>[];
}

export default class Tree<T> {
    private root: TreeNode<T> | null = null;

    addNode(value: T, parentValue?: T): TreeNode<T> {
        const node = { value, children: [] };

        if (!this.root) {
            this.root = node;
            return node;
        }

        if (parentValue) {
            const parentNode = this.findNode(parentValue);
            if (parentNode) {
                parentNode.children.push(node);
                return node;
            }
        }
    }

    findNode(value: T): TreeNode<T> | null {
        return this._findNode(this.root, value);
    }

    private _findNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (!node) {
            return null;
        }

        if (node.value === value) {
            return node;
        }

        for (const child of node.children) {
            const found = this._findNode(child, value);
            if (found) {
                return found;
            }
        }

        return null;
    }
}
