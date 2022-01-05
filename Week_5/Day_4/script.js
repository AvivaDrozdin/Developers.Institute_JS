// Exercise Game - The word game

// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject
// 2. The 2nd function, receives a noun - if the noun is less than 3 letters - reject
// 3. The 3rd function, receives a city - if the city doesn't start with an uppercase letter -> reject
// 4. The 4st function, receives a verb (finishing with "ing") - if it doesn't end with "ing" -> reject
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"


async function isString(fame1, fame2) {
    if (typeof fame1 !== "string" && typeof fame2 !== "string")
        throw new Error("not a string");
    return [fame1, fame2];
}
async function nounLength(noun) {
    if (noun.length < 3) throw new Error("noun too short");
    return noun;
}
async function cityCase(city) {
    if (city[0] !== city[0].toUpperCase()) throw new Error("not upper cased");
    return city;
}
async function verbIng(verb) {
    if (!verb.endsWith("ing")) throw new Error("not present progressive");
    return verb;
}
async function createsSentence() {
    const famePeople = await isString("Jerry", "John");
    const noun = await nounLength("charming");
    const city = await cityCase("Paris");
    const verb = await verbIng("playing");
    console.log(
        ` ${noun} ${famePeople[0]} is ${verb} football with ${famePeople[1]} in ${city} `
    );
}
createsSentence();




