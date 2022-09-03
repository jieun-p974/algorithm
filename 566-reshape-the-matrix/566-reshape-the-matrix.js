/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;

    if(m*n !== r*c) return mat;
    
    let answer = Array.from({length: r}, v => Array.from({length: c}, v => 0));

    for (let  i = 0; i < r * c; i++) {
      answer[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
    } 
    return answer;
};