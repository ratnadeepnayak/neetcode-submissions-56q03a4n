class MinStack {
    constructor() {
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.minStack.length === 0){
            this.minStack.push([val, val])
        }else{
            let lastElement = this.minStack[this.minStack.length - 1];
            let minLastElement = lastElement[1];
            let currMin = Math.min(val,minLastElement);
            this.minStack.push([val, currMin])
        }
    }

    /**
     * @return {void}
     */
    pop() {

        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.minStack[this.minStack.length - 1][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1][1]
    }
}
