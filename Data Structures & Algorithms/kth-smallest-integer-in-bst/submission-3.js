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

        let res = [];

        function dfs(curr){
            if(!curr) return;

            curr?.left && dfs(curr.left);
            res.push(curr.val);
            curr?.right && dfs(curr.right);

        }

        dfs(root);

        return res[k-1];
    }
}
