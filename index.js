// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
	let distance = 42 - blocks;
	return Math.abs(distance);
}

function distanceFromHqInFeet(blocks) {
	let inFeet = distanceFromHqInBlocks(blocks) * 264;
	return inFeet;
}

function distanceTravelledInFeet(to, from) {
	let distance = (Math.abs(to - from)) * 264;
	return distance; 
}

function calculatesFarePrice(start, destination) {
	let distance = distanceTravelledInFeet(start, destination);
	let response;

	if (distance <= 400) {
		response = 0;
	} else if (distance > 400 && distance < 2000) {
		let chargedDistance = distance - 400;
		response = chargedDistance * 0.02;
	} else if (distance > 2000 && distance < 2500) {
		response = 25;
	} else if (distance > 2500) {
		response = "cannot travel that far";
	}
	return response;
}