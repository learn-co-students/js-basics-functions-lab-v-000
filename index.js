// Code your solution in this file!
function calculateVertical (start, destination) {
	return Math.abs(start - destination) * 264;
}
function distanceFromHqInBlocks (distance) {
	return Math.abs(distance - 42);
}

function distanceFromHqInFeet (distance) {
	const blocks = distanceFromHqInBlocks(distance);
	return blocks * 264;
}

function distanceTravelledInFeet (start, destination) {
	return calculateVertical(start, destination);
}

function calculatesFarePrice (start, destination) {
	const distance = distanceTravelledInFeet(start, destination)
	if (distance < 400) {		
		return 0;
	} else if (distance >= 400 && distance <= 2000) {
		return distance * 0.02;
	} else if (distance > 2000 && distance <= 2500) {
		return 25;
	} else {
		return 'cannot travel that far';
	}
}