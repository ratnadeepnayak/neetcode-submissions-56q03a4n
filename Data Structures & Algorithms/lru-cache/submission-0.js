class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(0,0);
        this.tail = new Node(0,0);

        this.head.next = this.tail;
        this.tail.prev = this.head;

    }

    /**
     * @param {number} key
     * @return {number}
     */

    removeNode(node){
        node.next.prev = node.prev;
        node.prev.next = node.next
    }

    addNodeToTheFront(node){
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;

    }

    removeTail() {
        const node = this.tail.prev;
        this.removeNode(node);
        return node;
  }


    get(key) {
       /*
            if the key does not exist in map
               return - 1
            else
               fetch ref of node from map
               remove the Node
               add the Node to the front (MRU)
               return the value (node.value)
        */ 

        if(!(this.map.has(key))){
            return -1
        }else{
            const node = this.map.get(key);
            this.removeNode(node);
            this.addNodeToTheFront(node);
            return node.value;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        /*
            if key exists
                get the node
                update the value of the node
                removeNode()
                addToHead()

            else
                create a node
                add it to map
                add to Head
                if size increased
                    remove Tail
                    remove map

         */

        if(this.map.has(key)){
            const node = this.map.get(key);
            node.value = value;
            this.removeNode(node);
            this.addNodeToTheFront(node);

        }else{
           const newNode = new Node(key, value);
            this.map.set(key, newNode);
            this.addNodeToTheFront(newNode);

      if (this.map.size > this.capacity) {
        const tail = this.removeTail();
        this.map.delete(tail.key);
      }
        }
    }
}
