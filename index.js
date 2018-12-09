// Code your solution in this file!
function distanceFromHqInBlocks(loc) {
	let dist;

	dist = Math.abs(loc - 42);

	return dist;
}

function distanceFromHqInFeet(loc) {
	return distanceFromHqInBlocks(loc) * 264;
}

function distanceTravelledInFeet(locA, locB) {
	const dist = Math.abs(locB - locA) * 264;

	return dist;
}

function calculatesFarePrice(start, destination) {
	const billableDist = (distanceTravelledInFeet(start, destination) - 400); //the first 400 feet are free.
	let px;

	if (billableDist <= 0) {
		px = 0;
	} else if (billableDist <= 1600) {
		px = billableDist * 0.02;
	} else if (billableDist <= 2100) {
		px = 25;
	}	else {
		px = 'cannot travel that far';
	}

	return px;
}
