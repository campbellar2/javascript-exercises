const removeFromArray = function(array, ...args) {
    let newArray = [];
    for (const ele of array) {
        if (!args.includes(ele)) {
            newArray.push(ele);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
