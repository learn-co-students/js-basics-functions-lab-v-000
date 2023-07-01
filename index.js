function distanceFromHqInBlocks(distance) {
	return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
	return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(blockOne, blockTwo) {
	return Math.abs(blockOne - blockTwo) * 264;
}

function calculatesFarePrice(start, destination) {
	const distance = distanceTravelledInFeet(start, destination);

	if (distance > 2500) {
		return 'cannot travel that far'
	} else if (distance > 2000) {
		return 25;
	}
	else if (distance > 400) {
		return 0.02 * distance;
	} else {
		return 0;
	}
}
