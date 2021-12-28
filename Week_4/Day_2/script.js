// // ## Exercise 1
// // Guess what will be the value of the 2 console.logs

// function setObj(person) {
//     person.age = 25; 
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); //Alex 30 -> ?   OUTCOME ALEX 25  -------> person2 -> uses person1 in func - func changes age to 25  == person 1 now ressigned
// console.log(personObj2); //Alex 30 -> ?   OUTCOME ALEX 25 -------> person2 -> uses person1 in func - func changes age to 25



// // ## Exercise 2
// // Guess what will be the value of the 2 console.logs
// function setObj(person) {
// 	person = {
//         name: 'John',
//         age: 50
//     };

//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // John 50 -> ?  // Alex 30 ---------> because it's the same person
// console.log(personObj2); // name: 'Alex', age: 30 -> ? // -----------> recreates new object completely 







// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variable `characters` equal to an empty array
// 3. In the `startWars` function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// and push it to the `characters` array.
// 4. In the `startWars` function, create a function named `displayCharacter` that should display in the body the fullname of the characters,
// 5. Call the `createCharacter` function a few times inside the starWars function
// and call the `displayCharacter` function once
// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the spaceship the characters are in
// 7. The `displayCharacter` function should now display in the body the fullname and spaceship
// of the characters
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens? (edited) 




// function starWars (shipName){
//     let characters = [];
//     function createCharacter(fname, lname='Smith'){
//         let person = (fname + lname )
//         characters.push(person)
//     };
//     function displayCharacter(){
//         let body = document.body;
//         body.append(characters, shipName)
//     };
//     createCharacter('Lise');
//     createCharacter('Bob', 'Johnson');
//     displayCharacter();
// }

// starWars('A little boat')
// starWars('A bigger boat')


let starWars = (shipName) => {
    let character = [];
    let createCharacter = (fname, lname='Smith') =>{
        let person = (fname + lname);
        character.push(person)
    };
    let displayCharacter = () => {
        let body = document.body;
        body.append(character, shipName)
    };
    createCharacter('Lise ');
    createCharacter('Bob ', 'Johnson');
    displayCharacter()
}


starWars('Little Boat');
starWars('Big Boat')


// let starWars = () => {
//     let characters = [];
//     let createCharacter = (fname, lname='Smith') => {
//         characters.push(createCharacter);
//     };
//     let displayCharacter = () => {
//         for (let character in characters){
//             document.body.innerText += `${characters[character]}`
//         }
//     };
//     createCharacter('Lise');
//     createCharacter('Bob', 'Johnson');
//     displayCharacter()
// }

// starWars()