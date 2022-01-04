// # EXERCISE 1
// Create a function that takes in a single parameter
// and returns a new promise.


// Using setTimeout, after 5000 milliseconds, the promise will either
// resolve or reject.

// If the input is a string, the promise resolves with that same string
// uppercased.

// If the input is anything but a string it rejects with that same input.

// Use `then` to repeat the string twice

// use `catch` to console.log the error

// finally call a function that console.log ("congratulation")



function checkIfString (str) {
	let checkPromiseString = new Promise(function (resolve, reject) {
		setTimeout(function() {
			if (typeof str === "string") {
				resolve(str.toUpperCase())
			} else {
				reject(str)
			}
		},5000)
	})
	return checkPromiseString;
}

//Will go to the then, and the finally methods
checkIfString("hello")
.then(result => console.log(result, result))
.catch(error => console.log("error", error))
.finally(() => console.log("congratulation"))

//Will go to the catch, and the finally methods
checkIfString(123)
.then(result => console.log(result, result))
.catch(error => console.log("error", error))
.finally(() => console.log("congratulation"))