const palindromes = function (string) {
    let cleanString = string.toLowerCase().replace(/[^a-z]/g, "");
    let reversed = cleanString.split("").
            reverse().
            join("");
    return (cleanString == reversed)
};

// Do not edit below this line
module.exports = palindromes;
