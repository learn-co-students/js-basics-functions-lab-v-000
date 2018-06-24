const hq = 42;
const feetInBlock = 264;
const fareRate = 0.02;
const freeDistance = 400

function distanceFromHqInBlocks(destination) {
	return Math.abs(destination - hq);
}

function distanceFromHqInFeet(destination) {
	return distanceFromHqInBlocks(destination) * feetInBlock;
}

function distanceTravelledInFeet(start, destination) {
	return Math.abs((destination - start)) * feetInBlock;
}

function calculateRate (start, destination) {
	const distance = billableFeet(start, destination)
	switch (distance) {		
		case (distance > 2000):
			return 25;
		default:
			return 0.02;
	}
}

function billableFeet(start, destination) {
	return distanceTravelledInFeet(start, destination) - freeDistance;
}

function validDistance (start, destination) {
	if (distanceTravelledInFeet(start, destination) < 2500) {
		return true;
	} else {
		return false;
	}
}

function calculatesFarePrice(start, destination) {
	if (validDistance(start, destination) === false) {
		return 'cannot travel that far'
	}

	if (distanceTravelledInFeet(start, destination) <= freeDistance) {
		return 0;
	} else if (distanceTravelledInFeet(start, destination) > 2000) {
		return 25;
	} else {
		return billableFeet(start, destination) * fareRate;
	}
}