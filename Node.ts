export class Node <T>{
  data: T;
  next?: Node <T>;
  constructor(data: T){
    this.data= data;
    this.next = undefined;
  }
}