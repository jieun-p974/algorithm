/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function DFS(root,level,result){
    if(!root) return;
    if(level >= result.length) result[level] = [];
    result[level].push(root.val);
    DFS(root.left, level+1, result);
    DFS(root.right, level+1, result);
    return result;
}

var levelOrder = function(root) {
    return !root ? [] : DFS(root,0,[]);
};