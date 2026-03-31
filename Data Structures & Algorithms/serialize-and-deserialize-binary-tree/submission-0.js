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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        
        let result = []
        function preorder(node){
            
            if(!node){
                result.push("-#");
                return
            }

            result.push(`-${node.val}`)

            preorder(node?.left)
            preorder(node?.right);
        }

       preorder(root);

       console.log(result.join("")) 
       return result.join(",");

    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {

        let arrData = data.split(",");

        let index = 0;

        function buildTree(){
            let token = arrData[index];
            index++;

            if(token === "-#"){
                return null;
            }

            const node = new TreeNode(parseInt(token?.slice(1), 10));
            node.left = buildTree();
            node.right = buildTree();
            return node;
        }

        return buildTree();
    }
}
