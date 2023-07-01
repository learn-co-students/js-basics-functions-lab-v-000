function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(blockNumber) {
	return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(endingBlock, startingBlock) {
	if (startingBlock > endingBlock) {
		return (startingBlock - endingBlock) * 264;
	} else {
		return (endingBlock - startingBlock) * 264;
	}
}

function calculatesFarePrice(endingBlock, startingBlock) {
	const feet = distanceTravelledInFeet(endingBlock, startingBlock);

	if (feet < 400) {
		return 0;
	} else if (feet > 400 && feet < 2000) {
		return (feet - 400) * 0.02;
	} else if (feet > 2500) {
		return 'cannot travel that far';
	} else if (feet > 2000) {
		return 25
	}
}