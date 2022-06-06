/*
10진수를 2진수로 변환하고 연속되는 숫자의 최대수를 출력
5 => 101
1이 1번 반복됨 출력값은 1
13 => 1101
1이 2번 반복됨 출력값은 2
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    var n = parseInt(readLine()).toString(2);
    var splits = n.split('0'); // 0을 기준으로 자르기

    // 잘라낸 결과인 splits 배열내 현재값의 길이를 return하고 그 값의 누적값a, 현재값b가 있을 때  누적값이 더 크면 a, 아니면 b return
    console.log(splits.map(function(elem){return elem.length;}).reduce(function(a,b){
      if(a>b) return a;
      else return b;
    }));
}
