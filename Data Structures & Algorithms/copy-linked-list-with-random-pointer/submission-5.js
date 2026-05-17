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
        let nodeToCopy = new Map();
        nodeToCopy.set(null,null)
        let curr = head;

        while(curr){
            let node = new Node(curr.val);
            nodeToCopy.set(curr,node);
            curr = curr.next;
        }

        curr = head;

        while(curr){
            let copy = nodeToCopy.get(curr);
            copy.next = nodeToCopy.get(curr.next);
            copy.random = nodeToCopy.get(curr.random);
            curr = curr.next;
        }

        return nodeToCopy.get(head)
    }
}
