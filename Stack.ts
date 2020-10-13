import { Node } from './Node.ts';

export class Stack <T>{
  private top?: Node <T>; //Where remove

  constructor(){
    this.top = undefined;
  }

  public isEmpty(): boolean{
    return this.top === undefined;
  }

  public peek(): T | undefined{
    if(!this.top) return;
    return this.top.data;
  }

  public push(data: T){
    const node: Node<T> = new Node<T>(data);
    node.next = this.top;
    this.top = node;
  }

  public pop(): T | undefined{
    if(!this.top) return;
    const data: T = this.top.data;
    this.top= this.top.next;
    return data;
  }
}