const exp = require('express')
const app = exp()

// to show POST parameters  -> No more bodyparser, express update
app.use(exp.urlencoded());
app.use(exp.json());


// Open server
app.listen(4000, () => {
    console.log('listening on port 4000 - with a smile!');
})




// POST
app.post('/login', (req, res) => {
    // get parameters:
    console.log(req.body);
})


// GET OBJECT & IMAGE
app.get('/login', (req, res) => {
    // OBJECT
    // res.json({user:'Ziv'})           // <- When sending Object when using res.send(obj)-> use json.stringify
    //                                  // alternative use res.json(obj)

    // IMG
    res.send('<img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80">')

    console.log(req.query);
    // URL Query = login?a=5&b=3  === {a:5, b:3}

})



// GET PARAMS

app.get('/login/:id', (req,res) => {
    console.log(req.params);
    res.send(`Hello ${req.params.id}`)
})



// REDIRECTION
// app.get('/products', (req,res) => {
//     res.redirect('/aboutus')

// })


// ERROR STATUS
app.get('/products', (req, res) => {
    res.status(404).send('File not found')
})




// USE STATIC FILES

// Access Index.html -> public folder for static files
// use = middlware. Between request and response, Whenever we want to use function

// request -> send to authentification (function) via use -> response

// OPTION 1
//      root: /   grab file from public folder
app.use('/', exp.static(__dirname +'/public'))


//OPTION 2
app.get('/aboutus', (req,res) => {
    res.sendFile(__dirname+'/public/about.html')
})




// GET + POST
app.route('/login')
    .get(req, res => {

    })
    .post(req, res => {
        
    })