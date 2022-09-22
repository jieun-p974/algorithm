/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let count = 0;
    let currNode = head;

    while (currNode.next){
      count++;
      currNode = currNode.next;
    }
    currNode = head;
    let half = Math.ceil(count/2);
    count = 0;

    while(count < half){
      count++;
      currNode = currNode.next;
    }
    return currNode;
};