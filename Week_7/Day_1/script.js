console.log('Hello Node.js');


const a = require('./imported.js')
console.log(a)


a.greeting('Anna')
a.greeting2('Lisa', 'Mills')


const axios = require('axios');

const getRobots = async() => {
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data =  await res.data;
        console.log(data);
    } catch(e) {
        console.log(e);
    }
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