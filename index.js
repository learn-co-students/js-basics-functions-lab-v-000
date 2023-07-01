// Code your solution in this file!

function distanceFromHqInBlocks(street) {
	let distance = Math.abs(street - 42);
	return distance;
}

function distanceFromHqInFeet(street) {
	let distance = distanceFromHqInBlocks(street);
	distanceInFeet = distance * 264;
	return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
	let distance = Math.abs(start - destination);
	distanceInFeet = distance * 264;
	return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
	const distance = distanceTravelledInFeet(start, destination);
	let response;

	if (distance < 400) { 
		response = 0; 
	} else if (distance > 400 && distance < 2000) {
		response = (distance - 400) * 0.02;	
	} else if (distance > 2000 && distance < 2500) {
		response = 25; 
	} else {
		response = 'cannot travel that far'; 
	} 
	return response
}


