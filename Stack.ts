import { Node } from './Node.ts';

export class Stack <T>{
  private head?: Node <T>; //Where remove

  constructor(){
    this.head = undefined;
  }

  public isEmpty(): boolean{
    return this.head === undefined;
  }

  public push(data: T){
    const node: Node<T> = new Node<T>(data);
    node.next = this.head;
    this.head = node;
  }

  public pop(): T | undefined{
    if(!this.head) return;
    const data: T = this.head.data;
    this.head= this.head.next;
    return data;
  }
}