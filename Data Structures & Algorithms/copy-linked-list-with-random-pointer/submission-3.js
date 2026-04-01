// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let curr = head;
        let oldToCopy = new Map();
        oldToCopy.set(null,null);

        while(curr){
            let copy = new Node(curr.val);
            oldToCopy.set(curr,copy);
            curr = curr.next;
        }

        curr = head;

        while(curr){
            let copiedNode = oldToCopy.get(curr);
            copiedNode.next = oldToCopy.get(curr.next);
            copiedNode.random = oldToCopy.get(curr.random);
            curr= curr.next
        }

        return oldToCopy.get(head)
    }
}
