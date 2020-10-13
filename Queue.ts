import { Node } from './Node.ts';

//FIFO
export class Queue <T>{
  private head?: Node <T>; //Where remove
  private tail?: Node <T>; //Where add things

  constructor(){
    this.head = undefined;
    this.tail = undefined;
  }

  public isEmpty(): boolean{
    return this.head === undefined;
  }

  public enqueue(data: T): void{
    const node: Node<T> = new Node<T>(data);
    if(this.tail){
      this.tail.next = node;
    }
    this.tail = node;
    if(!this.head){
      this.head= node;
    }
  }

  public dequeue(): T | void{
    if(!this.head) return;
    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }
}
