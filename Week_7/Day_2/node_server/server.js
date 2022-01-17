
// ------ WITHOUT EXPRESS -------- (longer)

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('I am listening to a request');
//     console.log(req.method);
//     console.log(req.headers);
//     console.log(req.url);
 

//     //This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.//
//     res.end('Hello from my first web server')
    
// })


// server.listen(5000,()=> {
//     console.log('Server is listening to port 5000');
// })






// ------- WITH EXPRESS --------

// const exp = require('express');
// const app = exp();

// app.listen(5000, () => {
//     console.log('listening on port 5000');
// })

// app.get('/api/products', (req, res) => {
//     res.json([
//         {name: 'iPhone', price: 800},
//         {name: 'iPad', price: 1500},
//         {name: 'iWath', price: 300},
//     ])
// })




// ------ WITH EXPRESS - added module //
// const exp = require('express');
// const data = require('./data')
// const app = exp();

// app.listen(5000, () => {
//      console.log('listening on port 5000');
// })

// // get all
// app.get('/api/products', (req, res) => {
//     res.json(data.products)
// })

// // get by id
// app.get('/api/products/:productId', (req, res) => {
//     console.log(req.params.productId);
//     const id = Number(req.params.productId);
//     const product = data.products.find(item => {
//         return item.id == id
//     })
//     res.json(product)
// })







// EXERCISE - Axios Module
const exp = require('express');
const users = require('./user')
const app = exp();

app.listen(5000, () => {
     console.log('listening on port 5000');
})




// get all
app.get('/api/users', (req, res) => {
    users.getUsers()
    .then(data => res.json(data))
})



// get by id
app.get('/api/users/:userId', (req, res) => {
    console.log(req.params.userId);
    const id = Number(req.params.userId);
    const user = data.users.find(item => {
        return item.id == id
    })
    res.json(user)
})
