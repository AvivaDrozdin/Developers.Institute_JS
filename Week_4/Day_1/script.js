//1st exercise
//You need to guess what will be console logged, and explain why
let username = "John";

function checkName (){
	console.log("In the function",username); 
	username += "Smith";  
	console.log("Still in the function",username); 

console.log("before the function", username); 

checkName()

console.log("after the function", username); 

// OUTPUT
// 1) Before Func: John   ---> Console Logged first because function not called yet
// 2) In Func: John       ---> After calling the function we console log the global var username
// 3) Still in Func: JohnSmith ---> We added Smith inside function 
// 4) After Func: JohnSmith ---> adding smith in function, reassigned global variable





//2nd exercise
//You need to guess what will be console logged, and explain why
let name = "John";

function checkName (){
	let name = "Tom";
	console.log("In the function",name); 
	name += "Smith";
	console.log("Still in the function",name);
}

console.log("before the function", name);

checkName()

console.log("after the function", name);

// OUTPUT:
// 1) Before Func: John  ----> Console Logged first because function not called yet
// 2) In Func: Tom       ----> We creating a local variable name = Tom and console log
// 3) Still in Func: TomSmith ---> we reassign local variable name
// 4) After Func: John ----> global variable remains unchanged!

