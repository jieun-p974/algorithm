/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let diff = [];

    // 두 문자열이 같으면 true
    if(s1 === s2) return true;
    
    // 두 문자의 다른 문자를 배열 diff에 저장
    for (let i = 0; i < s1.length; i++){
      if(s1[i] !== s2[i]){
        diff.push(i)
      }
    }
    // diff의 길이가 1이거나 2를 초과하면 false
    if(diff.length === 1 || diff.length > 2) return false;

    // 자리 바꿨을 때 같으면 true
    return s1[diff[0]] == s2[diff[1]] && s1[diff[1]] == s2[diff[0]]
};