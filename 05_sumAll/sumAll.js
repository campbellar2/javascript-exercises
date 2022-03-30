const sumAll = function(num1, num2) {
    if (typeof(num1) != "number" || typeof(num2) != "number") { return "ERROR";} 
    if (num1 < 0 || num2 < 0) { return "ERROR";} 
    let sum = 0;
    let i = Math.min(...arguments);
    do {
        sum += i;
        i += 1;
    } while (i <= Math.max(...arguments));
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
