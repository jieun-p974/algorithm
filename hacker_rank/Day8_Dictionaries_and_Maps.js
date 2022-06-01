/*
주어진 숫자 n은 전화번호부에 저장된 연락처 개수
전화번호는 이름:번호가 한쌍
이름을 찾을 수 없다면 Not found라고 출력
*/
function processData(input) {
    //Enter your code here
    //input을 전부 잘라서 개행으로 저장
    var input = input.split('\n');
    // numLines에 input[0](번호 갯수) 저장
    var numLines = parseInt(input[0],10);
    // 전화번호부 역할
    var phoneBook = new Map();

    // 전부 개행으로 저장했으니까 저장된 연락처는 총 numLines*2개(원래는 이름, 번호가 한줄이어서)
    //그 뒷 줄은 출력할 이름들이라서 phoneBook에 저장 안함
    for (var i = 1; i < numLines; i++){
        // 키값으로 이름, 벨류로 번호 저장하고 i가 2씩 증가하니까 1,2; 3,4; 5,6처럼 이름, 번호 쌍으로 저장
        var inputValues = input[i].split(' ');
        phoneBook.set(inputValues[0], inputValues[1]);
    }
    // 출력은 이름 = 번호로 해야함
    // 출력할 사람의 이름은 input[numLines*2+1]부터 저장되있음
    for (var j = numLines + 1; j < input.length; j++){
        // 만약 phoneBook에 출력할 이름이 있으면 이름 = 번호 형식으로 출력
        var values = input[j].split(' ');
        if(phoneBook.has(values[0])){
          console.log(`${values[0]}=${phoneBook.get(values[0])}`);
        }
        else // 출력할 정보가 없다면 Not Found출력
          console.log('Not found');
    }
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
