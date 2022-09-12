/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length
    let i = 0
    let j = n-1
    
    while(i < j){
        [matrix[i], matrix[j]] = [matrix[j], matrix[i]]
        i++
        j--
    }
    
    for(let p=0; p<n; p++){
        for(let q=p+1; q<=n-1; q++){
            [matrix[p][q] ,matrix[q][p]] = [matrix[q][p] ,matrix[p][q]]
        }
    }
    return matrix
};