function distanceFromHqInBlocks(location) {
	const headquarters = 42;
	if (location > headquarters) {
		return location - headquarters;
	} else {
		return headquarters - location;
	}
}

function distanceFromHqInFeet(location) {
	const blocksTraveled = distanceFromHqInBlocks(location)
	return blocksTraveled * 264;
}

function distanceTravelledInFeet(location1, location2) {
	if (location1 < location2) {
		return (location2 - location1) * 264;
	} else {
		return (location1 - location2) * 264;
	}
}

function calculatesFarePrice (location1, location2) {
	const distanceTraveled = distanceTravelledInFeet(location1, location2)
	if (distanceTraveled < 400) {
		return 0
	} else if (distanceTraveled < 2000) {
		return distanceTraveled * .02
	} else if (distanceTraveled > 2000 && distanceTraveled < 2500) {
		return 25
	} else {
		return 'cannot travel that far'
	}
}