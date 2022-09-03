/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let length = mat.length-1;
    let sum = 0;

    for(let i = 0; i <= length; i++){
      sum += mat[i][i] + mat[i][length-i];
    }

    if(length%2===0){//행렬의 길이가 홀수일때 가운데값 한번 빼주기
      sum = sum - mat[length/2][length/2];
    }
    return sum;
};