//1491. Average Salary Excluding the Minimum and Maximum Salary
//주어진 직원들의 월급(고유 정수)배열이 있다.
//최소값과 최저값을 제외한 평균 월급을 반환
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum = 0;//모두 더한 값을 저장할 함수
    let avg = 0;//평균값을 저장할 함수
    //Math.max함수로 최대값을 저장
    let max = Math.max.apply(null,salary);
    //Math.min함수로 최소값을 저장
    let min = Math.min.apply(null, salary);

    //salary배열 길이만큼 반복하면서 배열내의 모든 값을 더함
    for (var i = 0; i < salary.length; i++){
      sum += salary[i];
    }
    //모든 값을 더한 것에서 최대, 최소를 빼고 평균값을 구함
    sum = sum - max - min;
    avg = sum/(salary.length - 2);
    return avg;
};
