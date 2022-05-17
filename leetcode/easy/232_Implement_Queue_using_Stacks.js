/*
  232. Implement Queue using Stacks
  선입선출 큐를 두개의 스택을 사용해서 구현하라.
  구현된 큐는 모든 일반 큐의 함수를 지원해야 한다.(push, peek, pop, empty)
  MyQueue클래스 구현:
  - push(x): 원소 x를 큐의 뒤에 넣기(x는 정수)
  - pop(): 큐의 제일 앞의 원소를 제거하고 반환하기
  - peek(): 큐의 제일 앞 원소를 반환
  - empty(): 큐가 비어있으면 true, 아니면 false 반환
*/
var MyQueue = function() {
    this.stack1 = [];// 첫 번째 스택(in)
    this.stack2 = [];// 두 번째 스택(out)
};

/**
 * @param {number} x // x는 숫자형
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);// 입력받은 숫자 x를 스택1에 추가
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.peek(); // 제일 앞 원소를 반환
    return this.stack2.pop(); // 스택2에서 삭제
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.stack2.length === 0){// out 스택에 아무 것도 없으면
      while(this.stack1.length != 0) {// in 스택이 빌때까지
         this.stack2.push(this.stack1.pop());// out 스택에 in스택에서 제거한 것을 넣음
      }
    }return this.stack2[this.stack2.length-1];// out 스택의 마지막 원소를 반환
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  // in 스택의 길이가 0이고 out 스택의 길이가 0일 때 반환
    return this.stack1.length === 0 && this.stack2.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
