import { Node } from './Node.ts';

//FIFO
export class Queue <T>{
  private head?: Node <T>; //Where remove
  private tail?: Node <T>; //Where add things

  constructor(){
    this.head = undefined;
    this.tail = undefined;
  }

  isEmpty(): boolean{
    return this.head === undefined;
  }

  enqueue(data: T): void{
    const node = new Node(data) as Node<T>;
    if(this.tail){
      this.tail.next = node;
    }
    this.tail = node;
    if(!this.head){
      this.head= node;
    }
  }

  dequeue(): T | void{
    if(!this.head) return;
    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }
}
