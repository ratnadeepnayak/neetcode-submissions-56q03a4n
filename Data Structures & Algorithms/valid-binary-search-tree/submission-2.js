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
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        /* a BT is a valid BST if all elements on left are smaler
            and all elmeents on right are larger than the root val
         */

        function isBST(curr, low, high){

            if(!curr) return true;

            if(curr.val <= low || curr.val >= high){
                return false;
            }

            let isLeftValidBST = isBST(curr.left,low,curr.val);
            let isRightValidBST = isBST(curr.right,curr.val, high)

            return isLeftValidBST && isRightValidBST

        }

        return isBST(root, -Infinity, Infinity)
    }
}
