// Iteration #1
//(10)
const mongoose = require('mongoose');



// connection check(6)
require('../configs/db.config.js');

const { Mongoose } = require('mongoose');

//require model(7)
const DroneModel = require('../models/Drone.model.js')

//insert into model (create = insert & insertMany)(8)
DroneModel.insertMany ([
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
])
.then((result) => {
    console.log('sEEded & closed')
    //always ^C or close connection after seeding(require mongoose at the top)(10):
    mongoose.connection.close()
}).catch((err) => {
    console.log('not seeded',err)
});
// test on terminal:(sEEded & closed) $ node bin/seed.js(9)

    //./bin/seeds.js is only to test database