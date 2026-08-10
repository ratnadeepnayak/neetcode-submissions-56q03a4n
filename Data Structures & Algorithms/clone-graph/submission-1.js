/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {

        if(!node) return null

        let queue = [node];

        let clonedNode = new Node(node?.val);
        let visited = new Map();
        visited.set(node, clonedNode);

        while (queue.length > 0) { 
            let curr = queue.shift();

            for (let n of curr.neighbors) {
                if (!visited.has(n)) {
                    visited.set(n, new Node(n.val));
                    queue.push(n);
                }

                visited.get(curr).neighbors.push(visited.get(n));
            }
        }

        return clonedNode
    }
}