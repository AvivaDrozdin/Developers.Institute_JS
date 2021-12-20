// EXERCISE 1 //
// For each of the questions, find 2 WAYS of accessing :
// 1. The div DOM node?
// 2. The ul DOM node?
// 3. The second li (with Pete)?


// //RETRIEVE DIV
// let firstWay = document.body.firstElementChild  
// let secondWay = document.body.children[0]



// // RETRIEVE UL 
// let ulFirstWay = firstWay.nextElementSibling // == document.body.firstElemenetChild.nextElementSibling
// let ulSecondWay = firstWay.children[0] // == document.body.firstElemenetChild.children[0]



// // RETRIEVE PETE
// let peteFirstWay = ulFirstWay.children[1] // == document.body.firstElemenetChild.nextElementSibling.children[1]
// let peteSecondWay = ulFirstWay.lastElementChild // == == document.body.firstElemenetChild.nextElementSibling.lastElementChild


// // CHANGE PETE TO TOM
// let peteChange = peteSecondWay.textContent = 'Tom'  

// // CHANGE TOM TO TOM SMITH
// let peteSmith = peteSecondWay.textContent += 'Smith' 







// EXERCISE 2
// For each of the questions, find 2 WAYS to access :
// 1. The div node
// 2. The ul nodes, and render all of it's children one by one
// 3. The first li of each ul


//REWRITE!!!!

// RETRIEVE DIV
// let divFirstWay = document.getElementsByTagName('div')
// console.log(divFirstWay)                                    // correct

// let divSecondWay = document.body.firstElementChild
// console.log(divSecondWay)                                   // correct

// let divThirdWay = document.querySelector('#container')
// console.log(divThirdWay)                                    // Correct

// let divFouthWay = document.getElementById('container')
// console.log(divFirstWay)                                    // correct



// // RETRIEVE UL & RENDER ALL CHILDREN 
// let ulFirstWay = document.getElementByClassName('list')
// console.log(ulFirstWay)

// let ulSecondWay = document.querySelectorAll('.list')
// console.log(ulSecondWay)

// let liAllFirst = document.getElementsByTagName('li')
// console.log(liAllFirst)

// let liAllSecond = document.querySelectorAll('li')
// console.log(liAllSecond)



// Render all LIs

// let allUl = document.getElementsByTagName('ul')

// for (let i = 0; i < allUl.length; ++i) {
//     console.log(allUl[i])
// }


// Render first li in ul
//let allUlTwo = document.getElementsByTagName('ul')
let allUlTwo = document.getElementsByClassName('list')

for (let item of allUlTwo){
    console.log(`li is ${item.firstElementChild.textContent} first LI of every UL`)
    //console.log(item.firstElementChild)
}





// // RETRIEVE 1st LI OF EACH UL
// let firstLiOne = document.getElementsByTagName('ul').firstElementChild
// console.log(firstLiOne)






