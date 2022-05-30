/*
주어진 문자열 S와 길이 N
문자열 S의 짝수 인덱스따로 홀수 인덱스 따로 출력하기
*/
function processData(input) {
    //Enter your code here
    let inputCopy = input.split('\n').slice(1);

    inputCopy.forEach((str) => {
      let evenS = '', oddS = '';
      for(let i = 0; i < str.length; i++){
        i%2 ? oddS += str[i] : evenS += str[i];
      }
      console.log(`${evenS} ${oddS}`)
    });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
