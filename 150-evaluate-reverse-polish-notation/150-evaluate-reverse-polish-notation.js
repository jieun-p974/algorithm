/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (i of tokens){
      if(!isNaN(i)){
        stack.push(i);
      }else{
        let earlyIn = stack.pop();
        let laterIn = stack.pop();

        switch (i)
            {case "+":
              stack.push(parseInt(laterIn) + parseInt(earlyIn));
              break;
            case "-":
              stack.push(parseInt(laterIn) - parseInt(earlyIn));
              break;
            case "*":
              stack.push(parseInt(laterIn) * parseInt(earlyIn));
              break;
            case "/":
              stack.push(parseInt(laterIn) / parseInt(earlyIn));
              break;}
      }console.log(stack)
    }
    return Math.floor(stack[0]);
};