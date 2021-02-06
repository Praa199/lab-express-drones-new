//require mongoose(1)

const mongoose = require('mongoose');

//create schema(2)

let Drone = new mongoose.Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

//create model(myDrone will be the name of database)(3)

let DroneModel = mongoose.model('myDrone', Drone)

//model export(4)

module.exports = DroneModel

//create seeds.js(5)
