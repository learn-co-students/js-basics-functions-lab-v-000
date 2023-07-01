const headquarters = 42;

function distanceFromHqInBlocks (streetNumber) {
	if (streetNumber > headquarters) {
		return (streetNumber - headquarters);
	}
	else {
		return (headquarters - streetNumber);
	}
}

function distanceFromHqInFeet(streetNumber) {
	let blocks = distanceFromHqInBlocks(streetNumber);
	return (blocks * 264);
}

function distanceTravelledInFeet(startPoint, destination) {
	let distance = destination >= startPoint ?  (destination - startPoint) : (startPoint - destination);
	return distance * 264;
}

function calculatesFarePrice(startPoint, destination) {
	let distance = distanceTravelledInFeet(startPoint, destination)
	if (distance < 400) {
		return 0;
	} else if (distance > 400 && distance < 2000) {
		return ((distance - 400) * .02);
	} else if (distance > 2000 && distance < 2500) {
		return 25;
	} else {
		return "cannot travel that far";
	}
}
