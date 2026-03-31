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
    //  */
    // invertTree(root) {
    //     if(!root) return null;

    //     let queue = [root]

    //     while(queue.length){
    //         const node = queue.shift();
    //         [node.left, node.right] = [node.right , node.left]

    //         node.left && queue.push(node.left);
    //         node.right && queue.push(node.right);
    //     }

    //     return root
    // }

    invertTree(root){
        if(!root) return null;

        let temp = root?.left;
        root.left = root.right;
        root.right = temp;

        root?.left && this.invertTree(root.left);
        root?.right && this.invertTree(root.right);

        return root;

    }
}
