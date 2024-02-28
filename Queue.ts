class QueueNode {
    public data: number;
    public next: QueueNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    public head: QueueNode | null;
    public tail: QueueNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public print(): void {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data); // just to see data
            temp = temp.next; // setting next temp variable
        }
    }
    //enqueue
    public enqueue(data: number): void {
        var newNode = new QueueNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            //  !. is a definite assignment assertion
            this.tail!.next = newNode;
        }
        this.tail = newNode;
    }
    //dequeue
    public dequeue(): void {
        //    if(this.head !== null) {
        //     this.head = this.head.next;
        //    }
        if (this.head === null) {
            console.error("The queue is empty");
        } else {
            this.head = this.head.next;
        }
    }
}


let queue = new Queue();

queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.print();
/**
 * 10
 * 15
 * 20
 */

console.log();
queue.enqueue(30);
queue.print();

console.log();
queue.dequeue();
queue.print();

console.log("here");
queue.enqueue(40);
queue.print();

console.log();
queue.dequeue();
queue.print();

/**
 * 10 - head
 * 15
 * 20 - tail
 * 
 * 10 - head
 * 15
 * 20
 * 30 - tail
 * 
 * 15 - head
 * 20
 * 30 - tail
 * 
 * here
 * 15 - head
 * 20
 * 30
 * 40 - tail
 * 
 * 20 - head
 * 30
 * 40 - tail
 */