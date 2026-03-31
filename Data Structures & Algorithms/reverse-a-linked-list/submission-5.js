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
     * @return {ListNode}
     */
    reverseList(head) {

        /*
            LinkedList id about moving pointers
            have a prev pointer to null;
            curr = head

            while curr
            let next = curr.next;
            curr.next = prev;
            prev= curr;
            curr = next

            return prev


         */

        let prev = null;
        let curr = head;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev
    }
}
