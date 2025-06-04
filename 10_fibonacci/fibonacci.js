const fibonacci = function (userEntry) {

    let totalNum = 1;
    for (let i = 0; i < userEntry; i++) {
        totalNum += totalNum[i];
    }
    return totalNum;


};

// Do not edit below this line
module.exports = fibonacci;
