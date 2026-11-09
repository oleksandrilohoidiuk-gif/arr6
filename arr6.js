class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(data) {
  const node = new Node(data); 
  node.next = this.top;
  this.top = node;
  this.length++;
}

peek() {
  if (this.top === null) {     
    return null;
  }
  return this.top.data;
}
pop() {
  if (this.top === null) {
    return null;
  }
  const data = this.top.data;
  this.top = this.top.next;
  this.length--;
  return data;
}
count() {
  return this.length;
}

size() {
  return this.count();
}
clear() {
  this.top = null;
  this.length = 0;
}

toString() {
  let result = [];
  let current = this.top;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(" -> ");
}
}


const s = new Stack();
s.push(11);
s.push(22);
s.push(33);

console.log(s.peek());
console.log(s.length);

console.log(s.pop());
console.log(s.peek());
console.log(s.length);
console.log(s.count());
console.log(s.size());
console.log(s.toString());
console.log(s.count());

s.clear();
console.log(s.count());
console.log(s.peek());
console.log(s.toString());
