const exp = require('express');
const env = require('dotenv')
const cors = require('cors');

const app = exp()
env.config()
app.use(cors());

// Using dynamic pages / Templates
app.set('view engine', 'ejs')




// Access EJS Template   - Looks in views by default because set as an engine
app.get('/', (req, res) => {
    res.render('index')
})


app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/shop', (req,res)=> {
    const products = [
        {id:1, name:'iphone', price:'1200'},
        {id:2, name:'ipad', price:'2000'},
        {id:3, name:'iwatch', price:'500'},
    ]
    res.render('shop', {
        data:products
    })
})







app.listen(process.env.PORT, () => {
    console.log(`Listening to Port ${process.env.PORT}`);
})

