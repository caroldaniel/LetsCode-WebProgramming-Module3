import Driver from '../../aula-16/driver.js'
import Passenger from './passenger.js'
import Ride from './ride.js'

class Uber {
	constructor() {
		this.wallet = 1000;
		this.drivers = [];
		this.passengers = [];
		this.rideIds = [];
		this.rides = [];
	}
	//create new user
	newUser(type, userObject) {
		if (type === 'driver')
		{
			this.drivers.unshift(new Driver(userObject));
			return this.drivers[0];
		}
		else if (type === 'passenger')
		{
			this.passengers.unshift(new Passenger(userObject));
			return this.passengers[0];
		}
		else console.log('Invalid type of user');
	}

	//get next available driver
	getAvailableDriver() {
		let i = 0;
		while (i < this.drivers.length)
		{
			if (this.drivers[i].available === true)
				return (this.drivers[i])
			i += 1
		}
		throw new Error('Sorry, there are no available drivers');
	}
	// create new Ride instance and assign it to next available driver
	startDrive(distance, passenger) {
		let drive;
		let rideId = 1;
		let driver = this.getAvailableDriver();
		if (driver === 0)
			return 0;
		driver.acceptDrive();
		while (this.rideIds.includes(rideId))
			rideId += 1;
		this.rideIds.push(rideId);
		drive = new Ride({rideId: rideId, distance: distance, passenger: passenger, driver: driver})
		this.rides.push(drive);
		return drive;
	}
	// Repass value paid by passenger to driver, with 20% retention to Uber
	finishDrive(driveObject){
		driveObject.finished = true;
		this.wallet += driveObject.passenger.endDrive(driveObject.price);
		this.wallet -= driveObject.driver.endDrive(0.8 * driveObject.price);
	}
}

export default Uber