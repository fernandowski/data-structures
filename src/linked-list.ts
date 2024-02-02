interface Node<T> {
    value: T;
    next: Node<T> | null;
}

export default class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    append(value: T): void {
        const newNode = { value, next: null };
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value: T): void {
        const newNode = { value, next: this.head };
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.length++;
    }

    insertAt(index: number, value: T): void {
        if (index < 0 || index > this.length) {
            throw new Error("Invalid index");
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }
        const newNode = { value, next: currentNode.next };
        currentNode.next = newNode;
        if (newNode.next === null) {
            this.tail = newNode;
        }
        this.length++;
    }

    removeAt(index: number): T | undefined {
        if (index < 0 || index >= this.length) {
            throw new Error("Invalid index");
        }
        if (index === 0) {
            return this.shift();
        }
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }
        const removedNode = currentNode.next;
        currentNode.next = removedNode.next;
        if (removedNode === this.tail) {
            this.tail = currentNode;
        }
        this.length--;
        return removedNode.value;
    }

    shift(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.length--;
        return removedNode.value;
    }

}
