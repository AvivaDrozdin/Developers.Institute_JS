// ----------- REPETITION LAST WEEK ------------------ //

//1st exercise
//You need to guess what will be console logged, and explain why

// let username = "John";

// function checkName (){
// 	console.log("In the function",username); 
// 	username += "Smith";  
// 	console.log("Still in the function",username); 

// console.log("before the function", username); 

// checkName()

// console.log("after the function", username); 

// OUTPUT
// 1) Before Func: John   ---> Console Logged first because function not called yet
// 2) In Func: John       ---> After calling the function we console log the global var username
// 3) Still in Func: JohnSmith ---> We added Smith inside function 
// 4) After Func: JohnSmith ---> adding smith in function, reassigned global variable





//2nd exercise
//You need to guess what will be console logged, and explain why

// let name = "John";

// function checkName (){
// 	let name = "Tom";
// 	console.log("In the function",name); 
// 	name += "Smith";
// 	console.log("Still in the function",name);
// }

// console.log("before the function", name);

// checkName()

// console.log("after the function", name);

// OUTPUT:
// 1) Before Func: John  ----> Console Logged first because function not called yet
// 2) In Func: Tom       ----> We creating a local variable name = Tom and console log
// 3) Still in Func: TomSmith ---> we reassign local variable name
// 4) After Func: John ----> global variable remains unchanged!




// ----------- DESTRUCTURING ----------------- //

//1st Exercise
// Display in the body the name, email and phone of every employee
// const employees = [
// 	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
// 	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
// ]

// const employees = [
// 	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
// 	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
// ]


// OLD WAY
// for (let emp of employees) {
//     document.body.textContent += `${emp.name}, ${emp.email}, ${emp.phone}`
// }


// NEW WAY
// for (let emp of employees) {
//     let {name, email, phone} = emp;
//     document.body.textContent += `${name}, ${email}, ${phone}`   // += used so both employees are displayed. If = is used one line is replacing the other
// }




// ------------ ARROW FUNCTIONS ------------//

// 1. Greet the user (ie. using an argument),
// * first by using function declarations
// * then function expression,
// * then arrow function

// 1) Function Declaration
function sayHi (word){
    console.log(`Computer says ${word}`)
}
sayHi('Hi')

// 2) Function Expression 
let greeting = function(someWord){
    console.log(`Computer says ${someWord}`)
}
greeting('Hi')

// 3)
const saySomething = (somehthing) => console.log(`Computer says ${somehthing}`)
saySomething('something')
