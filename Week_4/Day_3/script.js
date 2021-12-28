// EXERCISE 1 
// Use map  to create new array containing only the score of the students
// const students = [
//     {name: 'Bob', score: 33},
//     {name: 'Lisa', score: 75}
// ]

// let studentScores = students.map((elem) => elem.score);

// // Display which student got which score
// studentScores.forEach((elem,ind) => document.body.innerText += `The ${ind+1} student received the score ${elem} \n`)

// console.log(studentScores)



// // EXERCISE 2
// //Create a new array of objects, containing the name, score and isAboveAverage key
// //if the students has a score bigger that 50, the key isAboveAverage will be true

// const studentFootball = [
//     {name: 'Alex', score: 76},
//     {name: 'Linda', score: 50},
//     {name: 'Daniel', score: 40},
//     {name: 'Rob', score: 64}
// ]

// let aboveAvarage = studentFootball.map((element) => {
//     let isAboveAvarage = element.score > 50 ? true : false;
//     return {
//         name: element.name,
//         score: element.score,
//         isAboveAvarage
//     }
//     // == as  return {...element, isAboveAvarage}
// });

// console.log(aboveAvarage)



// // EXERCISE 3
// let famousPeople = [
//     {
//         name: "Angelina Jolie",
//         job: "actor",
//         age: 80
//     },
//     {
//         name: "Georges Clooney",
//         job: "actor",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         job: "actor",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         job: "singer",
//         age: 16
//     },
//     {
//         name: "Britney Spears",
//         job: "singer",
//         age: 100
//     }
// ]

// // 1. Use the map method, to create a new array that contains only the name of the actors
// let famousNames = famousPeople.map((elem) => elem.name);
// console.log(famousNames)

// // 2. Use the map method, to create a new array , that contains objects, each object contains the name of the actor, and it's job
// let famousNameJob = famousPeople.map((elem) => {
//     return {
//         name : elem.name,
//         job : elem.job
//     }
// })
// console.log(famousNameJob)



// // EXERCISE 4
// // Find best stuents with score above 50
// let bestStudents = studentFootball.filter((elem) => elem.score>50);
// console.log(bestStudents)

// // Best student with short name:
// let bestStudentsShortName= studentFootball.filter((elem) => elem.score > 50 && elem.name.length === 3)




// // EXERCISE 5
// // create a new array that filters only the positive value
// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// let positives = numbers.filter((elem) => elem>=0);
// console.log(positives)


// // EXERCISE 6: 
// //Suppose you have a list of Star Trek characters,
// //and you want to get just the characters that appeared in Star Trek: The Next Generation.
// //Use filter() to filter the array of characters below

// const characters = [
//    { name: 'James T. Kirk', series: ['Star Trek'] },
//    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
//    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
//    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
// ];

// let nextGen = characters.filter((elem) => elem.series.includes('Star Trek: The Next Generation'))

// console.log(nextGen)


// // EXERCISE 7 - NOT MANDATORY - 
// //Use the filter method to create an array without duplicates. The result should be ["blue","red","yellow"]
// const colors = ["blue", "red", "blue", "yellow"];
// let findDuplicates = colors.filter((elem, index) => colors.indexOf(elem) == index)
// console.log(findDuplicates)



// // ------------- REDUCE NOTE ---------//
// let nums = [10, 20, 35, 40];
// let sum = nums.reduce((accumulator, currentValue, index, arr) => {
//     console.log(`In ${index} loop the:`);
//     console.log(`accumulator: ${accumulator}`);
//     console.log(`currentValue: ${currentValue}`);
//     return accumulator + currentValue;
// })

// console.log(sum)


// const people = ["John","Lea", "Tom"];
// let secretSociety =  people.reduce((accumulator, currentValue) => {
// 	return accumulator+currentValue[0]
// }, "")

// console.log(secretSociety)



// EXERCISE 8 
// Find the sum of the score of the students using reduce
const students = [
 	{name: 'Rich', score: 33}, 
 	{name: 'Peter', score: 55},
 	{name: 'John', score: 75}
];

let studentsNew = students.reduce((accumilator, currentValue) => {
    return accumilator + currentValue.score
}, 0)

console.log(studentsNew)


// EXERCISE 9
// Turn an array of voter objects into a count of how many people voted

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

// Do the exercise using reduce only
let voted = voters.reduce((accumilator, elem) => elem.voted == true? accumilator+=1 : accumilator, 0 )
console.log(voted)


