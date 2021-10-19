import Uber from './uber.js'

// create new uber instance
const uber = new Uber();

// create passenger and driver users
const passenger1 = uber.newUser('passenger', {name: 'Carolina', id: 417, city: 'São Paulo', wallet: 100});
const passenger2 = uber.newUser('passenger', {name: 'Herbert', id: 340, city: 'São Paulo', wallet: 500});
uber.newUser('driver', {name: 'José', id: 818, city: 'São Paulo', wallet: 30});

// create new ride on app
const newRide1 = uber.startDrive(40, passenger1);

// // create new ride with no available drivers: throw error
// const newRide2 = uber.startDrive(40, passenger2);

// finish ride on app and pay the driver
uber.finishDrive(newRide1);

console.log(uber)