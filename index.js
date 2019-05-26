function distanceFromHqInBlocks(blockNumber) {
	let result
	if (blockNumber > 42) {
		result = blockNumber - 42
	} else if (blockNumber < 42) {
		result = 42 - blockNumber
	}
	return result
}

function distanceFromHqInFeet(blockNumber) {
	distanceFromHqInBlocks(blockNumber);
	return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(endingBlock, startingBlock) {
	let result
	if (startingBlock > endingBlock) {
		result = (startingBlock - endingBlock) * 264
	} else if (startingBlock < endingBlock) {
		result = (endingBlock - startingBlock) * 264
	}
	return result
}

function calculatesFarePrice(endingBlock, startingBlock) {
	distanceTravelledInFeet(endingBlock, startingBlock);
	let feet
	let result
	feet = distanceTravelledInFeet(endingBlock, startingBlock)
	if (feet < 400) {
		result = 0
	} else if (feet > 400 && feet < 2000) {
		result = (feet - 400) * 0.02
	} else if (feet > 2500) {
		result = 'cannot travel that far'
	} else if (feet > 2000) {
		result = 25
	}
	return result
}