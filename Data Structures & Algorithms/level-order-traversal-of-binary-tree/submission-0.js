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
        let res = []

        if(root){
            queue.push(root)
        }else{
            return queue
        }

        while(queue.length > 0){
            let levelLength = queue.length;
            let levelQueue = [];
            for(let i=0; i< levelLength; i++){
                const node = queue.shift();
                levelQueue.push(node.val);

                if(node.left){
                   queue.push(node.left) 
                }

                if(node.right){
                    queue.push(node.right)
                }             
            }
            res.push(levelQueue)
        }

    return res
    }
}
