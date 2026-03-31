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
        
        1. find the midpoint
        2. reverse the second half

        0,1,2,3

        6,5,4
        
         */

        let slow = head;
        let fast = head;

        while(fast && fast.next){
            slow= slow.next;
            fast = fast.next.next
        }

        let prev = null;
        let curr = slow.next;
        slow.next = null;

        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        //prev is the new head of the linkedList
        // 0,1,2,3
        // 6,5,4

        let list1 = head;
        let list2 = prev;


        while(list2){
            let temp1 = list1.next;
            let temp2 = list2.next;
            list1.next = list2;
            list2.next = temp1;
            list1 = temp1;
            list2 = temp2 

        }

    }
}
