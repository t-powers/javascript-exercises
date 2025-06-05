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

const findTheOldest = function () {
    const mapNewArray = people.map(person => {
        return {name: person.name, ageOfPerson: person.yearOfDeath - person.yearOfBirth};
    })
        .sort((a, b) => b.ageOfPerson - a.ageOfPerson)
    // .map(person => person.name);
    return (mapNewArray.name);


};
findTheOldest(people);

//Plan & Pseudocode
//Problem: Given an array of objects representing people with a birth and death year, return the oldest person.
//Inputs: yearOfBirth, yearOfDeath
//Algorithm:
//Outputs: greatest age


// Do not edit below this line
module.exports = findTheOldest;
