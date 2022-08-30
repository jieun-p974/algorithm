/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let arithmetic = [];
    const sameValues=(arrays) =>{
        return arrays.every((v,i,a)=>v===a[0]);
    } 

    arr.sort((a,b)=>(a-b));

    if(arr.length<3){
        return true;
    }
    else {
        for (let i = 0; i<arr.length-1;i++){
            arithmetic.push(arr[i+1] - arr[i]);
           
            /*if(arr[i+1]-arr[i]===arr[i+2]-arr[i+1]) {
                console.log(i,arr[i+1]-arr[i],arr[i+2]-arr[i+1])
            }
            else return false;*/
        } console.log(arithmetic);
        return sameValues(arithmetic);
    }
};
