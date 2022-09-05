/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result;

    result = command.replace(/\(\)/g, "o").replace(/\(al\)/g,"al");

    return result;
};