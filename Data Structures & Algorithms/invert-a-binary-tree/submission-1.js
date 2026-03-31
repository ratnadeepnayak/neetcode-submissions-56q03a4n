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
     * @return {TreeNode}
     */
    invertTree(root) {

     //BFS Approach   
    // if (root === null) {
    //     return null;
    // }

    //     const temp = root.right;
    //     root.right = root.left;
    //     root.left = temp;

    //     this.invertTree(root.left);
    //     this.invertTree(root.right);

    //     return root

    //DFS Approach

    if(root === null){
        return null
    }

    const left = this.invertTree(root.left);
    const right = this.invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;

    }
}
