import { Node } from './Node.ts';

export class DoublyLinkedList<T>{
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor(){}

  public push(data: T): void{
    let node: Node<T> = new Node<T>(data);

    if(!this.tail){
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail= node;
  }

  public pop(): T | undefined{
    if(!this.tail) return;

    const data: T = this.tail.data;
    this.tail = this.tail.prev as Node<T>;
    this.tail.next = undefined;
    return data;
  }

  public unshift(data: T){
    const node: Node<T> = new Node<T>(data);

    if(!this.head){
      this.head = node;
      this.tail = node;
      return
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  public shift(): T | undefined{
    if(!this.head) return;

    const data = this.head.data;
    this.head = this.head.next as Node<T>;
    this.head.prev = undefined;
    return data;
  }

  public delete(data: T): void{
    if(!this.tail || !this.head) return;

    if(this.head.data === data){
      this.shift();
      return;
    }

    if(this.tail.data === data){
      this.pop();
      return;
    }

    let current: Node<T> = this.head;

    while(current.next){
      if(current.next.data === data){
        current.next = current.next.next as Node<T>;
        current.next.prev = current;
        return;
      }
      current = current.next;
    }
  }

  public forward (){
    if(this.head){
      let current: Node<T> | undefined = this.head;
      while(current.next){
        console.log(current.data);
        current = current?.next;
      }
      console.log(current.data);
    }
  }

  public backward(){
    let current: Node<T> | undefined = this.tail;
    while(current?.prev){
      console.log(current.data);
      current = current?.prev;
    }
    console.log(current?.data);
  }
}