// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
	return Math.abs(42-distance);
}

function distanceFromHqInFeet(block) {
	return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
	return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
	const feet = distanceTravelledInFeet(start, destination);

	if (feet > 2500) {
		return 'cannot travel that far';
	}

	if (feet < 400) {
		return 0;
	} else if (feet <= 2000) {
		return (feet * 0.2)/10;
	} else {
		return 25;
	}
}