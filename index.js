// Code your solution in this file!

function distanceFromHqInBlocks(street) {
	const headQuarters = 42;
	return Math.abs(street - headQuarters);
}

function distanceFromHqInFeet(street) {
	return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, stop) {
	return Math.abs(start - stop) * 264;
}

function calculatesFarePrice(start, destination) { 
	const waysToGo = Math.abs(start - destination) * 264;

	if (waysToGo < 400) {
		return 0
	} else if (waysToGo >= 400 && waysToGo < 2000) {
		return (waysToGo - 400) * .02
	} else if (waysToGo >= 2000 && waysToGo < 2500) {
		return 25
	} else {
		return "cannot travel that far"
	}

}

