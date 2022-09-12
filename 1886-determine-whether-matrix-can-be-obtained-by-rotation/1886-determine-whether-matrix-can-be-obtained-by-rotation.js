/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    const R = mat.length
    const C = mat[0].length
    
    const strTarget = JSON.stringify(target)
    
    // 1. Stringify and compare
    if(JSON.stringify(mat) === strTarget) return true
    
    let rotations = 3
    
    while(rotations-- > 0) {
        // 2. Rotate by 90 degrees exactly like in https://leetcode.com/problems/rotate-image/
       mat.reverse()
       for(let i = 0; i < R; i++) {
           for(let j = i + 1; j < C; j++) {
               const temp = mat[i][j]
               mat[i][j] = mat[j][i]
               mat[j][i] = temp
           }
       }
       
       // 3. Compare after rotation
       if(JSON.stringify(mat) === strTarget) return true
    }
    
    return false
};