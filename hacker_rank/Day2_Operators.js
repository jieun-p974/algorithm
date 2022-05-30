/*
음식 가격, 팁 퍼센티지, 세금 퍼센티지가 입력값으로 주어짐
음식 가격에 팁과 세금을 더해서 총합을 구하라
음식 가격 meal_cost
팁 퍼센티지 tip_percent
세금 퍼센티지 tax_percent
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let result = 0, tip = 1, tax = 1;

    tip = meal_cost * (tip_percent/100);
    tax = meal_cost * (tax_percent/100);
    result = Math.round(meal_cost+tip+tax);

    console.log(result)
}

function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
