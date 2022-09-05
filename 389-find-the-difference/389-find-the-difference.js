/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let ss = [...s].sort();
    let tt = [...t].sort();

    for (let i = 0; i < tt.length; i++){
      if(ss[i] !== tt[i]) return tt[i]
    }

console.log(ss,tt)
};