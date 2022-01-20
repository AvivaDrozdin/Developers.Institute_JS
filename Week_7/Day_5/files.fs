const fs = require('fs');

// read - Async
fs.readFile('./data', (err, data) => {
    if(err){
        console.log(err)
    } else {
        console.log(data.toString())
    }
})


// read Sync 
// const fileSync = fs.readFileSync()



// Write

let txt = 'hello file management'  // --> if change text will overwrite
fs.writeFile('./filename.txt', txt, (err) => {
    if(err){
        console.log(err)
    }
})



// Add JSON to file
let arr  = [
    {name: 'Adam'},
    {name: 'Bob'},
    {name: 'Charles'}
]


fs.writeFile('./filename.txt', JSON.stringify(arr), (err) => {
    if(err){
        console.log(err)
    }
})


// Append
let newTxt = 'Good Morning'
fs.appendFile('./someFile', newTxt, (err)=>{
    if(err){
        console.log(err)
    }
})

// ---> If no file exists, will be created



// DELETE
fs.unlink('./filename.txt', (err)=> {
    if(err){
        console.log(err)
    }
})



// COPY
fs.copyFile('./somefile', './copyto', (err) => {
    if(err){
        console.log(err)
    }
})