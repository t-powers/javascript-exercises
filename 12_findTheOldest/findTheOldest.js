const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const findTheOldest = function (array) {
    const mapNewBirthArray = people.map(person => {
        return ({[person.name]: person.yearOfBirth})
    })
    const mapNewDeathArray = people.map(person => {
        return ({[person.name]: person.yearOfDeath})
    })

    console.log(mapNewBirthArray)
    console.log(mapNewDeathArray)
};
findTheOldest(people);

//Plan & Pseudocode
//Problem: Given an array of objects representing people with a birth and death year, return the oldest person.
//Inputs: yearOfBirth, yearOfDeath
//Algorithm:
//Outputs: greatest age


// Do not edit below this line
module.exports = findTheOldest;
