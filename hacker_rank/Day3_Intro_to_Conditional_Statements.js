/*
integer n을 받음
만약 n이 홀수면 Weird 출력
n이 짝수고 2~5사이면 Not Weird 출력
n이 짝수고 6~20사이면 Weird 출력
n이 짝수고 20보다 크면 Not Weird 출력
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
    const N = parseInt(readLine().trim(), 10);

    if(N%2 !== 0){
      console.log('Weird');
    }else if(N%2===0){
      if(2<=N && N<=5){
        console.log('Not Weird');
      }else if(6<=N && N<=20){
        console.log('Weird');
      }else if (20<N) {
        console.log('Not Weird');
      }
    }
}
