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
     * @return {void}
     */
    reorderList(head) {

        /*
            2 -> 4 -> 6 -> 8      

            list 1 = 2->4
            list 2 = 8->6

         */

        //find mid point
        let slow = head;
        let fast = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        //reverse the second half
        let curr = slow.next;
        slow.next = null;
        let prev = null;

        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        } 

        //merge the two lists
        let list1 = head;
        let list2 = prev;


        while(list2){
            let temp1 = list1.next;
            let temp2 = list2.next;

            list1.next = list2;
            list2.next = temp1;

            list1 = temp1;
            list2 = temp2;
        }
        
    }
}