/**
 *
 *  Deque - you can remove or add from any end
 *  using Array's pop(), push(), shift(), unshift() methods
 */

class Deqeu {
  constructor() {
    this.deque = new Array()
  }

  popback() {
    return this.deque.pop()
  }

  pushback(item) {
    return this.deque.push(item)
  }

  popfront() {
    return this.deque.shift()
  }

  pushfront(item) {
    return this.deque.unshift(item)
  }
}

let deque = new Deqeu()

deque.pushback(1)
deque.pushfront(2)
deque.pushback(3)
deque.pushfront(4)

console.log(deque.deque)

console.log(deque.deque, deque.popfront())
console.log(deque.deque, deque.popback())
console.log(deque.deque, deque.popfront())
