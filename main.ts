import { Queue } from './Queue.ts';
import { Stack } from './Stack.ts';
import { List } from './List.ts';

const queue = new Queue<number>();

console.log(queue.isEmpty());
queue.enqueue(22);
queue.enqueue(2322);
console.log(queue.peek());


const stack = new Stack<number>();
console.log(stack.isEmpty());
stack.push(22);
stack.push(421);
// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log(stack.isEmpty());
console.log(stack.peek());



const list = new List<number>();

list.append(55);
list.search(55);
