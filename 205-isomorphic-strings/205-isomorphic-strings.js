/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sMap = new Map(), tMap = new Map();

    for(let i = 0; i < s.length; i++){
      let sChar = s.charAt(i);
      let tChar = t.charAt(i);
      
      if(sMap.has(sChar) || tMap.has(tChar)){
        if(sMap.get(sChar)!==tChar || tMap.get(tChar)!==sChar){
          return false;
        }
      }
      else{
        sMap.set(sChar, tChar);
        tMap.set(tChar, sChar);
      }
    }return true;
};