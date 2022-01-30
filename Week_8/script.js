// Collapsable Nav Bar //
let collapseNav = document.getElementById('collapse-nav');
let navMenu = document.getElementById('nav-menu');


//Collapsable Nav
//when clicked toggles to open the navigation menu (CSS #nav-menu.open)
collapseNav.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});




// Owl Carousel
// Read documentation - decided to use responsive to reduce amount of images shown depending on screen size
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        autowidth: false,
        items: 5,
        responsive: {
            0: {
                items: 1
            },
            490: {
                items: 1
            },
            770: {
                items: 3
            },
            1200: {
                items: 4
            },
            1500: {
                items: 5
            }
        },
        autoplay: false,
        smartSpeed: 1000, // duration of change of 1 slide
        center: true,
        dots: false,

    });
});





// Review Carousel Secrion

// Decided to use DOM to avoid repetition in html.
// Assigned user Names and reveresed them due to reverse image order ---> could just written in reverse order 
let users = ['Anna lin', 'Mery lou', 'Aaron gordon', 'Ben shin', 'Maria gor']
let reverseOrder = users.reverse(users)

// Specify folder where images are stored ---> Not actually required but could been used below in image assignment ***
let images = 'profile_images/'
let fileextension = ".jpg"


let carousel = document.getElementById('carousel')


for (let each in reverseOrder) {
    // Review Card

    // For each user create a review container
    let reviewCard = document.createElement('div');
    reviewCard.setAttribute('class', 'item');
    carousel.appendChild(reviewCard);


    //Review Box
    // Create a box with all information
    let allInfoCont = document.createElement('div');
    allInfoCont.setAttribute('class', 'all-info');
    reviewCard.appendChild(allInfoCont)

    // Reviewers
    // Container for specific user
    let reviewer = document.createElement('div');
    reviewer.setAttribute('class', 'user');
    allInfoCont.appendChild(reviewer);

    // User Name
    let nameCont = document.createElement('div');
    nameCont.setAttribute('class', 'name-container');
    let namePara = document.createElement('p');
    namePara.setAttribute('class', 'name');
    let nameText = document.createTextNode(users[each]);
    namePara.appendChild(nameText);
    nameCont.appendChild(namePara);
    reviewer.appendChild(nameCont);

    // Profile Img
    let imgCont = document.createElement('div');
    imgCont.setAttribute('class', 'profile-img-container');
    let profileImg = document.createElement('img');
    profileImg.setAttribute('class', 'profile-img');
    profileImg.setAttribute('alt', 'User Picture');

    // *** imges & fileextention could been used here      converting number to have numeric values rather 1 - 21 - 31 etc
    profileImg.setAttribute('src', `profile_images/person${[Number(each) + 1]}.png`);
    imgCont.appendChild(profileImg);
    reviewer.appendChild(imgCont);

    // Star Img
    let starCont = document.createElement('div');
    starCont.setAttribute('class', 'star-img-container');

    let starImg = document.createElement('img');
    starImg.setAttribute('class', 'star-img');
    starImg.setAttribute('src', 'Assets/reviews.png')
    starImg.setAttribute('alt', '5 Star Review')
    starCont.appendChild(starImg);
    reviewer.appendChild(starCont);
};






// Contact Form //

let userForm = document.getElementById('user-form');
let sendButton = document.getElementById('send-btn');

// User Input
let userName = document.getElementById('user-name');
let userEmail = document.getElementById('user-email');
let userPhone = document.getElementById('user-phone');

// User Input stored
let nameInput = userName.value;
let emailInput = userEmail.value;
let numberInput = userPhone.value;


// Stroring User Data
//User Email

// Email input gets value assigned when key is realeased
userEmail.addEventListener('keyup', (event) => {
    emailInput = event.target.value;
});



//User Name + check for invalid characters  
userName.addEventListener('keyup', (event) => {
    let nonLetters = /[^A-Za-z]/gi;
    if (nonLetters.test(event.target.value)) {  //if invalid characters found
        event.target.value = event.target.value.replace(nonLetters, '');
        userName.placeholder = 'Only letters allowed';
        userName.style.border = '1px solid red';
    } else {
        userName.style.border = '1px solid black'
        nameInput = event.target.value;
    }
});



//Phone Nr + check for invalid characters
userPhone.addEventListener('keyup', (event) => {
    let invalidCharacters = /[^0-9]/gi;
    if (invalidCharacters.test(event.target.value)) {  //if invalid characters found
        event.target.value = event.target.value.replace(invalidCharacters, '');
        userPhone.placeholder = 'Only numbers allowed';
        userPhone.style.border = '1px solid red';
    } else {
        userPhone.style.border = '1px solid black'
        numberInput = event.target.value;
    }
});





//post request with inputted data

let sendUserData = async () => {
    // URL where we want to "send" data to
    let url = 'https://jsonplaceholder.typicode.com/users';
    // which data
    const userData = { nameInput, emailInput, numberInput };
    //console.log(userData);

    let settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        // converts JS Object to JSON string
        body: JSON.stringify(userData)
    }

    // Try sending the data and chaning send to sent
    try {
        sendButton.innerText = 'Sending';

        // Fetch starts HTTP request to url -   because of await -> async is paused until request is completed
        let response = await fetch(url, settings);
        console.log(response.ok);

        // response.json = method on the Response object that lets you extract a JSON object. 
        //The method returns a promise, have to wait for the JSON: await response.json().
        let data = await response.json();
        console.log(data);

        //If data send successfully, change 'Send' to 'Sent!' 
        // if response send successfully -> ok returns bool true -> We  change send to sent!!!
        // clear all values!!!
        if (response.ok) {
            sendButton.innerText = 'Sent!';
            userEmail.value = '';
            userName.value = '';
            userPhone.value = '';
        }

        return data;

        // if the seding didn't succeed return error
    } catch (error) {
        console.log(`An error has occurred ${error}`);
        return;
    }
};


// In case error during submission occures

// We take the contact form
userForm.addEventListener('submit', async (event) => {
    // and prevent the being default submitted
    event.preventDefault();
    // instead we want wait until sendUserData promise is resolved 
    try {
        await sendUserData();
        
        // if there is an error on submission - catch error and diplay in console log
    } catch (error) {
        console.log(`an error occurred when submitting ${error}`);
        return;
    }
});

