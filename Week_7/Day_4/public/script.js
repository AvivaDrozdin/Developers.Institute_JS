// Fetch DB API - Display Customers in Select Box

// Fetch api
const getCustomers = () => {
    fetch('http://localhost:8002/customers')
    .then(res => res.json())
    // then go to select customers
    .then(data => {
        selectCustomers(data);
    })
    .catch(e => {
        console.log(e);
    })
}


getCustomers()

// populate select box
const selectCustomers = (arr) => {
    const selector = document.getElementById('customers')
    arr.forEach(item => {
        const o = new Option(item.first_name + ' ' + item.last_name + ' ' + item.customer_id)
        selector.appendChild(o)
    });
}


// onclick Customer GET
const customerGet = () => {
    const id = document.getElementById('customer_input_get').value;
    fetch(`http://localhost:8002/customer?cid=${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    })
}


// onclick Customer POST
const customerPost = () => {
    const id = document.getElementById('customer_input_post').value;
    fetch(`http://localhost:8002/customer`, {
        method: 'POST',
        headers: {
            ''
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    })
}