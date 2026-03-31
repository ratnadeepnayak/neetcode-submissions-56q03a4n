/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        /*
            1 2 3 4
            1
            1 2       
         */

        let dummyNode = new ListNode();
        let curr = dummyNode;
        let newCurr = dummyNode;
        newCurr.next = head;
        curr.next = head;

        let length = 0;

        while(curr && curr.next){
            length++;
            curr = curr.next;
        }

        let IndxOfNodeToBeChanged = length - n;


        let nodeIdx = 0;

        while(newCurr && newCurr.next){
            if(IndxOfNodeToBeChanged === nodeIdx){
                break;
            }else{
                newCurr = newCurr.next;
                nodeIdx++;
            }
        }

        newCurr.next = newCurr.next.next;

        return dummyNode.next;  

    }
}
