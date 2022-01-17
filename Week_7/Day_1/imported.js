const greeting = (name) => {
    console.log(`Hello ${name}, this is greeting 1`);
};

const greeting2 = (name, surname) => {
    console.log(`Hello ${name, surname}, this is greeting 2`);
}

// IMPORTANT: exportS not export!
module.exports = {
    greeting,
    greeting2
}




// EXERCISE 1 //

const users = require('./getUsers');

users.getRobots()
.then(res => {
  console.log(res);
})
.catch(e => {
  console.log(e);
})