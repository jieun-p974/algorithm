/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let manhattan = [];
    let ans = -1;


    for (let i = 0; i < points.length; i++){
        if(x===points[i][0]||y===points[i][1]){
            let sum = Math.abs(x-points[i][0])+Math.abs(y-points[i][1])
            manhattan.push(sum);
        }else manhattan.push(Number.POSITIVE_INFINITY);
    }
    if (Math.min(...manhattan)===Number.POSITIVE_INFINITY) return -1;
    return manhattan.indexOf(Math.min(...manhattan));

};