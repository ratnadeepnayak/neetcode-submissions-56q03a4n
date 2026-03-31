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

        const result = this.inorderTreeTraversal(root,[]);

        return result[k-1]
    }

    inorderTreeTraversal(root,arr=[]){
        if(!root){
            return[]
        }

        this.inorderTreeTraversal(root.left,arr);
        arr.push(root.val);
        this.inorderTreeTraversal(root.right,arr);

        return arr;
    }
}
