/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {

        let lca = null;

        function traversal(node){
            let count = 0;

            if(!node) return 0;

            let leftCount = traversal(node?.left);
            let rightCount = traversal(node?.right);

            if(node?.val === p.val || node?.val === q.val){
                count = count + 1;
            }

            count = leftCount + rightCount + count

            if(count === 2 && !lca){
                lca = node;
            }

            return count;
        }

        traversal(root);

        return lca;
    }
}
