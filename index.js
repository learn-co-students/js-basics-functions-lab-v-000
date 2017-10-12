// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  return Math.abs(42 - block)
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet (startBlock, endBlock) {
  return Math.abs(endBlock - startBlock) * 264
}

function calculatesFarePrice (startBlock, endBlock) {
  const difference = distanceTravelledInFeet(startBlock, endBlock)

  if (difference <= 400) {
    return 0
  } else if (difference > 400 && difference <= 2000) {
    return difference * .02
  } else if (difference > 2000 && difference < 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }

}
