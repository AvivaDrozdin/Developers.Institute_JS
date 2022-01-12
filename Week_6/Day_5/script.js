// // ----------------------
// //Local storage and array of objects
// // ----------------------

let button = document.getElementById("btn");
let getbutton = document.getElementById("btn2");
let firstInput = document.getElementById("key");
let secondInput = document.getElementById("value");
let results = document.getElementById("results");


let arrItems = [];

const addItem = (e) => {
	e.preventDefault();
	let key = firstInput.value;
	let response = secondInput.value;
	
	let product = {};
	product[key] = response;

	arrItems.push(product)
	console.log(arrItems)

	localStorage.setItem("cart", JSON.stringify(arrItems));
}

const displayItem = (e) => {
	e.preventDefault();
	let data = JSON.parse(localStorage.getItem("cart"));
	console.log(data)
}