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

        let ans = [];

        let queue = [];

        if(!root) return ans;

        queue.push(root);

        while(queue.length){
            let level = queue.length;
            let levelArr = [];

            for (let i =0; i< level; i++){
                let curr = queue.shift();
                levelArr.push(curr?.val);

                if(curr?.right){
                    queue.push(curr.right)
                }

                if(curr?.left){
                    queue.push(curr.left)
                }
            }

            ans.push(levelArr[0])
        }

    return ans
    }
}
