// Code your solution in this file!
function distanceFromHqInBlocks(blockNum) {
  let result
  if (blockNum > 42) {
    result = blockNum - 42
  } else {
    result = 42 - blockNum
  }
  return result
}

function distanceFromHqInFeet(blockNum) {
  let result
  result = distanceFromHqInBlocks(blockNum) * 264
  return result
}

function distanceTravelledInFeet(startBlock,endBlock){
  let result
  if (startBlock < endBlock) {
    result = (endBlock-startBlock) * 264
  } else {
    result = (startBlock-endBlock) * 264
  }
  return result
}

function calculatesFarePrice(startBlock,endBlock) {
  let result = 0;
  let calculation
  let feet = distanceTravelledInFeet(startBlock,endBlock)

  if (feet <= 400) {
      result = 0;
    } else if (feet > 400 && feet < 2000) {
      result = (feet-400) * .02;
    } else if (feet > 2000 && feet < 2500) {
      result = 25;
    } else if (feet > 2500) {
      result = 'cannot travel that far'
    }

  return result
}
