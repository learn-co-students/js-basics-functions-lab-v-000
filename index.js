function distanceFromHqInBlocks(destination) {
	const hq = 42;
	if (hq > destination) {
		return hq - destination;
	} else {
		return destination - hq;	
	}	
}

function distanceFromHqInFeet(destination) {
	blocks = distanceFromHqInBlocks(destination);
	return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
	if (end > start) {
		blocks = end - start;
	} else {
		blocks = start - end;
	}	
	return blocks * 264;
}

function calculatesFarePrice(start, end) {
	feet = distanceTravelledInFeet(start,end);
	charge = feet - 400;

	if (feet <= 400) {
		return 0;
	}
	if (feet > 400 && feet <= 2000) {
		return charge * .02;
	} else if (feet > 2000 && feet <= 2500) {
		return 25;
	} else {
		return "cannot travel that far";
	}
}
