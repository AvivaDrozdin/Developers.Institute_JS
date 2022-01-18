const knex = require('knex')
const db = knex({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'Raisa1912',
        database: 'dvdrental'
    }
});


// CRUD Queries

db('country') // select from table country
// .select('country_id', 'country')  // country_id and country --> RETURNS PROMISE



// .where({country_id:41})            // select where id = 41 




// .update({country:'Vatican'})        // Update to new name = Vatican




// .insert([{                              // Insert new country
//     country: 'LaLaLand'
// }])


.where({country_id:110})                // DELETE REQUIRES WHERE
.del()                                  // Delete LalaLand - REQUIRES WHERE



.returning('*')                         // return all info about country 41

.then(data => {                    // Display promise data
    console.log(data);
})
.catch(e => {                       // catch error
    console.log(e);
})