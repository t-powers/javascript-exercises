const palindromes = function (inputString) {
    const inputLc = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");
    return inputLc.split("").reverse().join("") === inputLc;

};
console.log(palindromes("racecar2"));

// Do not edit below this line
module.exports = palindromes;
