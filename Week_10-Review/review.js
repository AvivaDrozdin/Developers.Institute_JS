// FUNCTION DECLARATION

// if function more than 10 lines of code - split it!  One Function per Action


// GLOBAL VAR
// variables declared outside any function.
// Global variables are visible from an function (unless shadowed by locals)
// !!! Minimize use of Global variables





// PARAMETERS
function funcName(param, param2){
    return param+param2
}


// DEFAULT VALUES  - assignes as default to param
function getUsers(){
    let arr = [];
    return arr
}

function showUser(users=getUsers()){
    users.forEach(item =>  {
        console.log('Hello' + item);
    })
}



// CURRYING
const x = (a,b) => a*b
console.log(x(5,6));

// ==== as
const y = (a) => {
    return (b) => {
        return a*b;
    }
}

// eg.
const VAT = 1.17;
let m = y(VAT);
console.log(m);
console.log(m(20));


// OBJECT
let user = { 
    name: 'bob',
    age: 22
}
 // == as
 let {name, age} = user





 // BUBBLE SORT! 
let array = [1,4,5,3,2]
let temp;

// for (let i = 0; i < array.length; i++){
//     for(let j = 0; j < array.length; j++){
//         if (array[j] > array[j+1]){
//             var tempArr = arr[j];
//             array[j] = array[j+1]
//             array[j+1] = tempArr
//         }
//     }
//     console.log(tempArr);
// }



for (let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
        if (array[i] > array[j]){
            temp = arr[i];
            array[i] = array[i]
            array[j] = tempArr
        }
    }
    console.log(tempArr);
}

