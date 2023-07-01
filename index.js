// Code your solution in this file!
function distanceFromHqInBlocks(block) {
	if (block > 42) {
		return block - 42;
	} else {
		return 42 - block
	}
}

// Returns the number of blocks from Scuber's headquarters to the pickup location.
// Note that you can use your distanceFromHqInBlocks function to help return the correct value here.
function distanceFromHqInFeet(block) {
	return distanceFromHqInBlocks(block) * 264;
}


//Calculates the number of feet a passenger travels given a starting block and an destinationing block 
//- it only calculates distance North and South.
// It uses the knowledge that a block is 264 feet long.
function distanceTravelledInFeet(start, destination) {
	if (start < destination) {
		return (destination - start) * 264;
	} else {
		return (start - destination) * 264
	}
}



function calculatesFarePrice(start, destination) {
	const distance = distanceTravelledInFeet(start, destination);

	if (distance <= 400) {
		return 0;
	} else if (distance > 400 && distance <= 2000) {
		return  .02 * distance;
	} else if  (distance > 2000 && distance < 2500) {
		return 25;
	} else {
		return 'cannot travel that far';
	}
}





