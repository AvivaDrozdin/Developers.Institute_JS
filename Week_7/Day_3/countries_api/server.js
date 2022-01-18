const exp = require('express');
const knex = require('knex');
const cors = require('cors');
const DB = require('./modules/db') // importing select countries func

const app = exp();
app.use(cors());

const db = knex({
  client:'pg',
  connection:{
    host:'127.0.0.1',
    port:'5432',
    user:'postgres',
    password:'Raisa1912',
    database:'dvdrental'
  }
});

app.use('/',exp.static(__dirname+'/public'))

app.listen(3001, ()=>{
  console.log('listening to port 3001');
})

app.get('/countries',(req,res)=>{
  DB.getCountries(db)
  .then(data =>{
    res.json(data)
  })
  .catch(e => {
    console.log(e);
  })
})