import { Queue } from './Queue.ts'

const queue = new Queue<Number> ();

console.log(queue.isEmpty());
queue.enqueue(22);
queue.enqueue(2322);
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.isEmpty());



// const queue2 = new Queue<String> ();

// console.log(queue2.isEmpty());
// queue2.enqueue("This is a string");
// console.log(queue.isEmpty());
// console.log(queue2.dequeue());
// console.log(queue2.dequeue());
