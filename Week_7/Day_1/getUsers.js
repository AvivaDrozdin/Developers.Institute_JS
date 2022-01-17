const axios = require('axios');

const getUsers = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = await res.data
    return data
  }
  catch(e){
    console.log(e);
  }
}

module.exports = {
  getUsers
}