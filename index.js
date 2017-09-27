function distanceFromHqInBlocks(blockLocation) {
	const headquarters = 42
	if (blockLocation > headquarters) {
		return blockLocation - headquarters
	} else {
		return headquarters - blockLocation
	}
}

function distanceFromHqInFeet(blockLocation) {
	const blocksTraveled = distanceFromHqInBlocks(blockLocation)
	return blocksTraveled * 264
}

function distanceTravelledInFeet(blockLocation1, blockLocation2) {
	//block is 264 feet
	if (blockLocation1 < blockLocation2) {
		return (blockLocation2 - blockLocation1) * 264
	} else {
		return (blockLocation1 - blockLocation2) * 264
	}
}

function calculatesFarePrice(blockLocation1, blockLocation2) {
	const distanceTraveled = distanceTravelledInFeet(blockLocation1, blockLocation2)
	if (distanceTraveled < 400) {
		return 0
	} else if (distanceTraveled < 2000) {
		return distanceTraveled * .02
	} else if (distanceTraveled > 2000 && distanceTraveled < 2500) {
		return 25
	} else {
		return "cannot travel that far"
	}
}