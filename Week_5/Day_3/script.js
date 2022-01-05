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




// # Fetch
// # Exercise
// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// # Part II
// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page
// # Part III
// If the giphy API doesn't find a gif depending on the word (because the word can be strange),then instead of displaying an empty image, display a gif that says "404 ERROR"

function word() {
    fetch("http://random-word-api.herokuapp.com/word?number=1")
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error("not 200");
        }
      })
      .then((jsData) => {
        let body = document.body;
        body.innerText = jsData[0];
        console.log(jsData[0]);
        exercise(jsData[0]);
      })
      .catch((error) => {
        console.log("In the catch", error);
      });
  }
  
  function exercise(test) {
    fetch(`https://api.giphy.com/v1/gifs/random?tag=%22${test}%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error("not 200");
        }
      })
      .then((jsData) => {
        append(jsData.data.images.original.url);
      })
      .catch((error) => {
        console.log("In the catch", error);
        let body = document.body;
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          "https://i.pinimg.com/originals/13/3d/62/133d62f4c7611596b265b81bfb9be08c.gif"
        );
        body.append(img);
      });
  }
  
  function append(url) {
    let body = document.body;
    let img = document.createElement("img");
    img.setAttribute("src", url);
    body.append(img);
  }
  
  word();