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
     * @return {number}
     */
    maxDepth(root) {

        //Recursive - DFS

        if(!root){
            return 0
        }

        let leftHeight = this.maxDepth(root.left);
        let rightHeight = this.maxDepth(root.right);

        return 1 + Math.max(leftHeight, rightHeight)

        //Iterative - BFS
    //     let level = 0;

    //     let queue = [];

    //     if(root){
    //         queue.push(root)
    //     }else{
    //         return level
    //     }

    //     while (queue.length > 0){
    //         let queueLength = queue.length;

    //         for(let i=0; i<queueLength; i++){
    //             let curr = queue.shift();

    //             if(curr.left){
    //                 queue.push(curr.left)
    //             } 

    //             if(curr.right){
    //                 queue.push(curr.right)
    //             } 
    //         }

    //         level++;

    //     }

    // return level;

    }
}
