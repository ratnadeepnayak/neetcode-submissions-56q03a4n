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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {

        let ans = [];
        function inorderTraversal(node){
            if(!node) return;

            inorderTraversal(node.left);
            ans.push(node.val);
            inorderTraversal(node.right)
        }

        inorderTraversal(root);

        return ans[k-1]
    }
}
