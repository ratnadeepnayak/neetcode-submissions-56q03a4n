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
        let dummyNode = new ListNode(0);
        dummyNode.next = head

        let slow = dummyNode;
        let fast = dummyNode;

        for (let i = 0; i <= n ; i++){
            fast = fast.next
        }

        while(fast){
            slow = slow.next;
            fast = fast.next
        }

        if(slow.next && slow.next.next){
           slow.next = slow.next.next
        }else{
            slow.next = null
        }
 

        return dummyNode.next

    }
}
