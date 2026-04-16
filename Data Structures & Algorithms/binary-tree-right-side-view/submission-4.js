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

        if(!root) return [];

        let queue = [];

        let ans = [];

        queue.push(root);


        while(queue.length){
            let queueLength = queue.length;

            for (let i = 0; i < queueLength; i++){
                let curr = queue.shift();

                if(i === 0){
                    ans.push(curr?.val);
                }

                if(curr?.right){
                    queue.push(curr?.right)
                }

                if(curr?.left){
                    queue.push(curr?.left);
                }
            }
        }
        return ans;
    }
}