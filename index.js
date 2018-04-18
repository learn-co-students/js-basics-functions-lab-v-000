// Code your solution in this file!

function distanceFromHqInBlocks(street1) {
	return Math.abs(street1 - 42);
}
 
function distanceFromHqInFeet(street1) {
  let blocks = distanceFromHqInBlocks(street1);
  return blocks * 264;
}

function distanceTravelledInFeet(street1, street2) {
	let blocks = Math.abs(street1 - street2);
	return blocks * 264;
}

function calculatesFarePrice(start, destination) {
	const distance = distanceTravelledInFeet(start, destination);

	let farePrice;

	switch (distance > 0) {
		case distance <= 400:
			farePrice = 0;
			break;
		case distance <= 2000:
			farePrice = ((distance - 400) * .02);
			break;
		case distance <= 2500:
			farePrice = 25;
			break;
		case distance > 2500:
			farePrice = 'cannot travel that far';
			break;
	}

	return farePrice;
}