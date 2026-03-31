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

        /* good nodes in a tree 
            we can start from the top and use a top down recursion and check 
            how many good nodes we have encountered till we reach the leaf
         */

        let goodNodes = 0;

        function dfs(node, maxValue){
            if(!node) return;

            if(node.val >= maxValue){
               goodNodes = goodNodes + 1; 
            }

            maxValue = Math.max(maxValue,node.val)

            dfs(node?.left, maxValue);
            dfs(node?.right, maxValue);

        }

        dfs(root, root?.val)

        return goodNodes

    }
}
