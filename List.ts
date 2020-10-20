import { Node } from './Node.ts';

export class List<T> {
  private head?: Node<T>

  constructor() {}

  public append(data: T): void{
    const node: Node<T> = new Node<T>(data);

    if(!this.head){
      this.head = node;
      return;
    }

    const current: Node<T> = this.head;
    while(current.next){
      current.next = current;
    }
    current.next = node;
  }

  public prepend(data: T): void{
    const newHead: Node<T> = new Node<T>(data);

    if(!this.head){
      this.head = newHead;
      return;
    }

    newHead.next = this.head;
    this.head = newHead;
  }

  public delete(data: T): void{
    if(!this.head) return;

    if(this.head.data === data){
      this.head = this.head.next;
      return;
    }

    let current: Node<T> = this.head;

    while(current.next){
      if(current.next.data === data){
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  public search(data: T): T | undefined{
    if(!this.head) return;
    let current: Node<T> = this.head;
    while(current.next && current.data !== data){
      current=current.next;
    }
    return current.data;
  }
}