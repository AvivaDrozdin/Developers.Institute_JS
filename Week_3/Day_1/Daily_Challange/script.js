// 1. Create an Array of Planets
let planets = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

let colorList = ["yellow", "grey", "beige", "blue", "red", "orange", "burlywood", "aquamarine", "purple", "grey"];

let moons = [0, 0, 0, 1, 2, 79, 82, 27, 14, 5]




// 2. For each Planet, in the array, create div with class name planet (createElement)

for (let i = 0; i < planets.length; i++) {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(planets[i]);
    newDiv.appendChild(newContent);
    newDiv.className = (`planet ${i}`) // add  class planet + i which is a number & a second class 
    document.body.appendChild(newDiv);
    let backgroundColor = document.getElementsByClassName("planet")[i].style.backgroundColor = colorList[i];


    //Bonus
    let ml =120 //ml = margin left to push it off from left
    if (moons[i] != 0){
        for (let h =0; h <moons[i]; h++){
            ml+=50 //margin 50. everytime loop runs push from left 50px
            let divMoon = document.createElement('div');
            divMoon.classList.add('moon');
            divMoon.style.marginLeft=ml + 'px';
            newDiv.appendChild(divMoon)    
        }
    }
}    



// 3

