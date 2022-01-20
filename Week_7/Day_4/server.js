const exp = require('express');
const app = exp();
const env = require('dotenv')
const DB = require('./modules/db')
env.config()



// MAKE SERVER WITH dotenv
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
})


// ACESS STATIC FILE!!!! 
app.use('/', exp.static(__dirname + '/public'))



// NEW ROOT - to About
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
})


// REDIRECT
app.get('/welcome', (req, res) => {
    res.redirect('/home')
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})



// NEW ROUTE - all customers
app.get('/customers', (req, res) => {
    DB.getCustomers()
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        console.log(e);
    })
    
})



// NEW ROUTE - specific customer - URL ID  
app.get('/customer', (req,res) => {
                    // == /customer?cid=123
    DB.getSpecific(req.query.cid)
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        console.log(e);
    })
})


// NEW ROUTE - Post
app.post('/customer', (req, res) => {
    DB.getSpecific(req.body.cid)
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        console.log(e);
    })
})