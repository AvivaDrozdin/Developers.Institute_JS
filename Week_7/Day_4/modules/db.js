const knex = require('knex')
const env = require('dotenv')
env.config()


// DB CONNECTION
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
})

// Get ALL Cusomters
const getCustomers = () => {
    return db('customer')
    .select('first_name', 'last_name', 'email', 'customer_id')
    .orderBy('first_name')
}


// Get SPECIFIC Customer

const getSpecific = (id) => {
    return db('customer')
    .select('first_name', 'last_name', 'email', 'customer_id')
    .where({customer_id: id})
}


module.exports = {
    getCustomers,
    getSpecific
}


