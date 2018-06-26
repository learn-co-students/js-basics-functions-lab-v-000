function distanceFromHqInBlocks(pu) {
	let hq = 42;
	if (hq <= pu) {
		return pu - hq;
		 
	} else {
		return hq-pu;
		
	}

}

function distanceFromHqInFeet(pu) {
	const blocks = distanceFromHqInBlocks(pu);
	return blocks * 264;
}	

function distanceTravelledInFeet(from, to) {
	return Math.abs(from - to) * 264;	

}

function calculatesFarePrice(start, end) {
	const distance = distanceTravelledInFeet(start, end);
	if (distance < 400) {
		return 0;
	} else if (distance >= 400 && distance <= 2000) {
		return (distance - 400) * .02;
	} else if (distance > 2000 && distance <= 2500) {
		return 25;
	} else {
		return "cannot travel that far";
	}
}