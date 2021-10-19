class Ride {
	constructor({rideId, distance, passenger, driver}) {
		this.rideId = rideId;
		this.distance = distance;
		this.price = distance * 1.5;
		this.passenger = passenger;
		this.driver = driver;
		this.finished = false;
	}
}

export default Ride