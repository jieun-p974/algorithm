/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j = 0;
    let count = 0;
    for (let i=0;i<t.length;i++){
        if(s[j]){
            if(s[j] === t[i]){
                count++;
                j++;
            }
        }
    }
    return count === s.length;
};