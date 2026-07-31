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
     * @return {number}
     */
    goodNodes(root) {
        let goodNodes = 0;

        function dfs(node, val){

            if(!node) return;

            let currNodeVal = node.val;

            if(currNodeVal >= val){
                goodNodes++;
            }

            dfs(node?.left, Math.max(val, currNodeVal));
            dfs(node?.right, Math.max(val, currNodeVal));
            
        }

        dfs(root,root?.val)

        return goodNodes;
    }
}
