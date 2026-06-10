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

        function validateTree(node,low,high){
            if(!node) return true;

            if(node?.val <= low || node?.val >= high){
                return false
            }

            let isLeftValid = validateTree(node?.left, low, node?.val);
            let isRightValid = validateTree(node?.right, node?.val, high);

            return isLeftValid && isRightValid

        }

        return validateTree(root,-Infinity, Infinity)
    }
}
