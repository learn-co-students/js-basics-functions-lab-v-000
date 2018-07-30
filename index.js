// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(street) {
	let response;
		if (street <= hq){
			response = hq - street;
		} else {
			response = street - hq;
		}
	return response
}

function distanceFromHqInFeet(blocks) {
	let response = distanceFromHqInBlocks(blocks) * 264;
	return response
}

function distanceTravelledInFeet(start, finish) {
	let blocks = start - finish;
	blocks = Math.abs(blocks);
	let response = blocks * 264;
	return response
}

function calculatesFarePrice(start, finish) {
	let feet = distanceTravelledInFeet(start, finish);
	let price;
		if (feet < 400) {
			price = 0;
		} else if (feet >= 400 && feet <= 2000) {
			feet = feet - 400;
			price = feet * .02;
		} else if (feet > 2000 && feet < 2500) {
			price = 25;
		} else if (feet > 2500){
			price = "cannot travel that far";
		}
	return price;
}

