const express = require('express');

// require the Drone model here
const DroneModel = require('../models/Drone.model.js')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  //fetch from database, require Drone model(11)
  DroneModel.find()
    .then((result) => {
    res.render('drones/list.hbs',{result})
  })
  .catch((err) => {
    console.log(err)
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
    res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
    //console.log(req.body)
    const {droneName, dronePropellers, droneSpeed} = req.body
    const myNewDrone = {
      name: droneName,
      propellers: dronePropellers,
      maxSpeed: droneSpeed
    }
    
    DroneModel.create(myNewDrone)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(() => {
      //console.log('upppssss')
      res.render('drones/create-form.hbs')
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let id = req.params.id
  DroneModel.findById(id)
    .then((result) => {
    res.render('drones/update-form.hbs',{result})
    //console.log(result)
  })
  .catch((err) => {
    console.log(err)
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let id = req.params.id
  const {droneName,dronePropellers,droneSpeed}=req.body
  let editedDrone = {
    name:droneName,
    propellers: dronePropellers,
    maxSpeed: droneSpeed
  }
  DroneModel.findByIdAndUpdate(id, editedDrone)
  .then((result) => {
    console.log('drone updated', result)
    res.redirect('/drones')
  }).catch((err) => {
    console.log('update failed', err)
    res.render('drones/update-form.hbs',{result})
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here

  let id = req.params.id
  DroneModel.findByIdAndDelete(id)
  .then((result) => {
    //console.log('deletion has succeded',result)
    res.redirect('/')
  }).catch((err) => {
    //console.log('deletion has failed',err)
  });
});

module.exports = router;
