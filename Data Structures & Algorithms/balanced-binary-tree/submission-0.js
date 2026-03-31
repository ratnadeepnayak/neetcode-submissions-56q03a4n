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
    isBalanced(root) {

        if(root == null){
            return true
        }

        let leftHeight = this.getHeight(root.left);
        let rightHeight = this.getHeight(root.right);

        if(Math.abs(rightHeight - leftHeight) > 1) {
            return false
        }


        const left = this.isBalanced(root.left);
        const right = this.isBalanced(root.right);

            if(!left || !right) return false;

    return true
       

    }

    getHeight(root){
        if(root == null){
            return 0
        };

        let leftHeight = this.getHeight(root.left);
        let rightHeight = this.getHeight(root.right);

        return 1 + Math.max(leftHeight, rightHeight)
    }
}
