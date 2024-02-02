interface Queue<T> {
    items: T[];

    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

export default class MyQueue<T> implements Queue<T> {
    items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item); // Add to the end
    }

    dequeue(): T | undefined {
        return this.items.shift(); // Remove from the front
    }

    peek(): T | undefined {
        return this.items[0]; // View first item without removing
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}
