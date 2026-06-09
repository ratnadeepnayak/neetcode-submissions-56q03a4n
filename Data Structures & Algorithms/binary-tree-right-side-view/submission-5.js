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
     * @return {number[]}
     */
    rightSideView(root) {
        let queue = [];

        let result = [];

        if(!root) return [];

        queue.push(root);

        while(queue.length > 0){
            let level = queue.length;

            for (let i =0; i<level; i++){
                let node = queue.shift();
                if(i === 0){
                    result.push(node.val)
                }

                if(node?.right){
                    queue.push(node.right);
                }

                if(node?.left){
                    queue.push(node?.left);
                }
            }

        }

        return result
    }
}
