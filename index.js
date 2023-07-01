// Code your solution in this file!
function distanceFromHqInBlocks (street) {
	let distance = street - 42;
	return Math.abs(distance);
};

function distanceFromHqInFeet (street) {
	return distanceFromHqInBlocks(street) * 264;
};

function distanceTravelledInFeet (start, destination) {
	let distance = Math.abs(start - destination);
	return distance * 264;
}

function calculatesFarePrice (start, destination) {
	const distance = distanceTravelledInFeet (start, destination);

	if (distance < 400) {
		return 0;
	} else if (distance  >= 400 && distance < 2000) {
		return distance * 0.02;
	} else if (distance >= 2000 && distance < 2500) {
		return 25;
	} else {
		return "cannot travel that far"
	}
}