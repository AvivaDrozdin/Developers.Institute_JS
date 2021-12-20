//Exercise 1
// 1. Create two buttons - id of "red", id of "blue"
// 2. When we click on the red button -> Change the backgroundcolor of the page to red
// 3. the same for blue

// find red & blue buttons

let clickButton = (event) => {
    //console.log(event.target) ---> finds target
    //console.log(event.target.textContent)  ----> text inside button
    document.body.style.backgroundColor = event.target.textContent.toLowerCase()
};

let red = document.querySelector('#btnRed');
let blue = document.querySelector('#btnBlue');

red.addEventListener('click', clickButton);
blue.addEventListener('click', clickButton);


//Exercise 2
// let colors = ["blue", "yellow", "green", "pink"];
// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that
// changes the background color of the document,
// to the color of the button (do it directly in the JS)

let colors = ["blue", "yellow", "green", "pink"];

let container = document.getElementById('container');

for (let color of colors){
    let newBtn = document.createElement('button');
    let newText = document.createTextNode(color)
    newBtn.setAttribute('id', `btn${color}`)
    newBtn.appendChild(newText)
    container.appendChild(newBtn)
    newBtn.addEventListener('click', clickButton)    
};