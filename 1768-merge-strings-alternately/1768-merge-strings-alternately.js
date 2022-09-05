/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = [];
    let len = word1.length >= word2.length ? word1.length : word2.length;

    for(let i = 0; i < len; i++){
      if(word1[i] && word2[i]) result.push(word1[i],word2[i]);
      else if(word1[i] && !word2[i]) {
        result.push(word1.substring(i));
        break;
      }
      else {
        result.push(word2.substring(i));
        break;
      }
    }
    return result.join("");
};