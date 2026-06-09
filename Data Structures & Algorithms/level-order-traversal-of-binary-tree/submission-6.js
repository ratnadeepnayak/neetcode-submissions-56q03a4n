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
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = [];
        let queue = [];

        if(!root) return []

        queue.push(root);

        while (queue.length > 0) {
            let level = queue.length;

            let temp = [];
            for (let i = 0; i < level; i++) {
                let node = queue.shift();
                temp.push(node.val);

                if (node?.left) {
                    queue.push(node.left);
                }

                if (node?.right) {
                    queue.push(node.right);
                }
            }

            result.push(temp);

        }

        return result
    }
}
