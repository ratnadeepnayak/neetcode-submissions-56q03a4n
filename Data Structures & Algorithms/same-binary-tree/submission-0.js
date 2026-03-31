/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        //traverse the array
        //compare the val of both the trees
        //check for letf and right

        if(!p && !q){
            return true;
        }

        if(p && q && p.val === q.val){
            const leftValidation = this.isSameTree(p.left, q.left);
            const rightValidation = this.isSameTree(p.right, q.right);
            return leftValidation && rightValidation;
        }else{
            return false
        }



     


    }
}
