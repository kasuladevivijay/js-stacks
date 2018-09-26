/**
 *  LIFO - Last In First Out
 *  using array's push() to add, pop() to remove
 *
 */
class Stack {
    constructor(){
		this.stack = new Array();
	}

    pop() {
        return this.stack.pop()
    }

    push(item) {
        return this.stack.push(item);
    }
}

let stac = new Stack();

stac.push(1)
stac.push(2)
stac.push(3)

console.log(stac.stack, stac.pop());
console.log(stac.stack, stac.pop());
console.log(stac.stack, stac.pop());
