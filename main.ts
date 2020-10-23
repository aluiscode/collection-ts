import { DoublyLinkedList } from './DoublyLinkedList.ts';

const list = new DoublyLinkedList<number>();

list.unshift(99);
list.unshift(10);
list.unshift(14);
list.unshift(12);
list.delete(10);
//12 14 10 99

console.log('########');
list.forward();
console.log('--------');
list.backward();
console.log('########');




