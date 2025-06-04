//Your job is to write a function that takes the array and returns an array of titles:
//function getTheTitles()
//loop through array
//obtain first position of each which is title
//push title into empty array

const getTheTitles = function (array) {
    return array.map((book) => book.title)
};

// Do not edit below this line
module.exports = getTheTitles;
