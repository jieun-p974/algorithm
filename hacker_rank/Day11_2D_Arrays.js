/*
2차 배열에 값이 모래시계 모양으로 있는 부분을 찾아내서
그 값들을 더했을때 최대값을 출력
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
      var arr = [];
      // 6X6 배열을 만듬
      for(arr_i = 0; arr_i < 6; arr_i++){
         arr[arr_i] = readLine().split(' ');
         arr[arr_i] = arr[arr_i].map(Number);
      }
      /* row i, column j
       * 1 1 1
       * 1 1 1
       * 1 1 1
       */
      var arrs = [];
      // 2차 배열을 순회하는 2차 루프문
      for (var i = 1; i < arr.length - 1;i++){
          for (var j = 1; j < arr[i].length - 1; j++){
              var sum = 0;
              // 모래시계 모양은 위에 3줄, 중간 1줄, 아래 3줄로 이루어짐
              // 위에 3줄 값을 더함
              sum = parseInt(arr[i-1][j-1]) + parseInt(arr[i-1][j]) + parseInt(arr[i-1][j+1]);
              // 가운데 1줄 값을 더함
              sum = sum + parseInt(arr[i][j]);
              // 아래 3줄 값을 더함
              sum = sum + parseInt(arr[i+1][j-1]) + parseInt(arr[i+1][j]) + parseInt(arr[i+1][j+1]);
              // 그 총합을 arrs 배열에 추가함
              arrs.push(sum);
          }
      }
      // arrs 배열내에서 가장 큰 값을 출력하면 모래시계의 최대값을 출력할 수 있음 
      console.log(Math.max.apply(null, arrs));
}
