// 연결 리스트의 head는 링크된 목록이 순환인지 확인
// 다음 포인터를 계속 따라가면 다시 도달할 수 있는 노드가 목록에 있을 경우 연결된 목록이 순환
// 내부적으로 pos는 꼬리의 다음 포인터가 연결된 노드의 인덱스를 나타냄(pos는 매개 변수로 전달되지 않음)
// 링크된 목록이 순환이면 true, 아니면 false 반환

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let map1 = [];
    // ListNode인 head 끝까지 반복
    while (head != null && head.next != null){
       // map1이 head를 포함하면 true 반환
        if(map1.includes(head)) {
           return true
       }
       // map1에 head를 순서대로 넣고
       // head에는 head.next를 넣음
        map1.push(head);
        head = head.next;
    }
    // 반복문이 끝날 때까지 아무것도 없으면 false 반환
    return false;
};
