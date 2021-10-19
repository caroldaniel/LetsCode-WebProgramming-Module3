class Driver {
	constructor({ name, id, car, city, wallet }) {
		this.name = name;
		this.id = id;
		this.car = car;
		this.city = city;
		this.wallet = wallet;
		this.available = true;
	}
	acceptDrive() {
		this.available = false;
	}
	endDrive(finalPrice) {
		this.wallet += finalPrice;
		this.available = true;
		return finalPrice;
	}
}

export default Driver