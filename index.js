// Code your solution in this file!
function distanceFromHqInBlocks(n) {
	return Math.abs(n - 42)	;
}

function distanceFromHqInFeet(n) {
	return distanceFromHqInBlocks(n) * 264
}

function distanceTravelledInFeet(a, b) {
	return Math.abs(distanceFromHqInFeet(a) - distanceFromHqInFeet(b))
}

function calculatesFarePrice(a, b) {
	let fare;
	let distance;

	distance = distanceTravelledInFeet(a, b)
	switch (true) {
		case distance < 400:
			fare = 0;
			break;
		case distance >= 400 && distance < 2000:
			fare = (distance - 400) * .02;
			break;
		case distance >= 2000 && distance < 2500:
			fare = 25;
			break;
		case distance > 2500:
			fare = 'cannot travel that far'
			break;
	}

	return fare;
}