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
        let queue = [];
        let res = [];

        if(!root){
            return res;
        }

        queue.push(root);

        while (queue.length > 0){
            let temp = [];
            let queueSize = queue.length;

            for (let i=0;i < queueSize; i++){
                let node = queue.shift();
                temp.push(node.val);

                
                if(node.left){
                    queue.push(node.left);
                }

                if(node.right){
                    queue.push(node.right);
                }

            }

            if(temp.length){
                res.push(temp);
            }
        }

        return res;

    }
}
