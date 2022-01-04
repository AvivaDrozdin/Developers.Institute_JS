// # Exercise
// 1. In the HTML file, create a form containing 2 inputs, username and password. The ACTION SHOULD BE index.html WITH GET REQUEST
// 2. In the JS file, validate the data before processing it
// * Username must be trimed, minimum 4 characters and start with a first letter uppercased
// * Password shoudn't be empty
// 3. If the values are not right, don't submit the form, and set the background color  to red
// 4. If the values are right, display the queries key value pair, on the page



const form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
};









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