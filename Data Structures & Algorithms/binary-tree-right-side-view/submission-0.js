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
            let res = [];
    let queue = [];

    if(!root){
        return res
    }

    queue.push(root);

    while (queue.length > 0){
        let size = queue.length;

        for (let i=0; i< size;i++){
            let node = queue.shift();

            if( i === (size-1)){
                res.push(node.val)
            }

            if(node.left){
                queue.push(node.left)
            }

            if(node.right){
                queue.push(node.right)
            }
        }
    }

    return res;
    }
}
