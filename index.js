// Code your solution in this file!

function distanceFromHqInBlocks(distanceToCustomer) {
	//hq is on 42nd st
	let blocks
	if (distanceToCustomer > 42) {
		blocks = distanceToCustomer - 42;
	} else if (distanceToCustomer < 42) {
		blocks = 42 - distanceToCustomer;
	}
	return blocks
}

function distanceFromHqInFeet(distanceToCustomer) {
	//every block in manhattan is 264 ft long

	let feet
	if (distanceToCustomer > 42) {
		feet = ((distanceToCustomer - 42) * 264);
	} else if (distanceToCustomer < 42) {
		feet = ((42 - distanceToCustomer) * 264);
	}
	return feet
}

function distanceTravelledInFeet(pickupLocation, dropoffLocation) {
	let feet

	if (pickupLocation < dropoffLocation) {
		feet = ((dropoffLocation - pickupLocation) * 264);
	} else {
		feet = ((pickupLocation - dropoffLocation) * 264);
	}
	return feet
}

function calculatesFarePrice(start, destination) {
	let fare
	let distance = distanceTravelledInFeet(start, destination)

	if (distance < 400) {
		fare = 0;
	} else if (distance > 400 && distance < 2000) {
		fare = (distance - 400) * 0.02;
	} else if (distance > 2000 && distance < 2500) {
		fare = 25;
	} else if (distance > 2500) {
		fare = "cannot travel that far";
	}
	return fare
}