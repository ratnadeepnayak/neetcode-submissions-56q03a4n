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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let dummyNode = new ListNode();
        let head = dummyNode;

        while(list1 || list2){
            let l1 = list1 !== null ? list1.val : Infinity;
            let l2 = list2 !== null ? list2.val : Infinity;

            if(l1 < l2){
                head.next = list1;
                head = list1;
                list1 = list1.next;
            }else{  
                head.next = list2;
                head = list2;
                list2 = list2.next;
            }
        }

        return dummyNode.next;
    }
}
