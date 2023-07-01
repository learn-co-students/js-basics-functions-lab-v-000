function distanceFromHqInBlocks (value) {

	return Math.abs(value - 42);
}

function distanceFromHqInFeet (value) {

	return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet (block1, block2) {

	return Math.abs(block1 - block2) * 264;
}

function calculatesFarePrice (block1, block2) {
	const distance = distanceTravelledInFeet(block1, block2)
	
	let cost

	if (distance <= 400){
		cost = 0;
	}
	
	else if (distance > 400 && distance <= 2000) {
		cost =  (distance - 400) * .02;
	}

	else if (distance > 2000 && distance <= 2500) {
		cost =  25;
	}

	else {
		cost = 'cannot travel that far';
	}

	return cost
}
