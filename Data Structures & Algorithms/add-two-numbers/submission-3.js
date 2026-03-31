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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummyNode = new ListNode(0);
        let curr = dummyNode;
        let carry = 0;
        while (l1 || l2){
            let l1Val = l1?.val || 0;
            let l2Val = l2?.val || 0;

            let combinedVal = l1Val + l2Val + carry

            let sum = Math.floor(combinedVal % 10);
            carry = Math.floor(combinedVal/10);

            let node = new ListNode(sum);
            curr.next = node;
            curr = node;  

            l1 = l1?.next;
            l2 = l2?.next;       
        }

        if(carry){
            const node = new ListNode(carry);
            curr.next = node;
        }

        return dummyNode.next;

    }
}
