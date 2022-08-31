/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root,result = []) {
    // 자식이 있으면 자식 먼저 출력없으면 이웃 노드로 넘어감
    if(!root) return result;
    result.push(root.val);
    for (let child of root.children){
        preorder(child,result)
    }
    return result
};