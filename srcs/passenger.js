class Passenger {
	constructor({ name, id, city, wallet }) {
		this.name = name;
		this.id = id;
		this.city = city;
		this.wallet = wallet;
	}
	endDrive(finalPrice) {
		this.wallet -= finalPrice;
		return finalPrice;
	}
}

export default Passenger