/**
 *  FIFO - First In First Out or Queue
 *  using Array's unshift() - First IN
 *  using Array's pop() - first out
 *
 */

class Queue {
  constructor() {
    this.queue = new Array()
  }

  dequeue() {
    // First out
    return this.queue.pop()
  }

  enqueue(item) {
    //  first in, adds from the front of the array
    return this.queue.unshift(item)
  }
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.queue, queue.dequeue())
console.log(queue.queue, queue.dequeue())
console.log(queue.queue, queue.dequeue())
