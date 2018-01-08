// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  const hq = 42
  const distance = block - hq
  if (block < hq) {
    return distance * -1
  } else {
    return distance
  }
}

function distanceFromHqInFeet(block) {
  const distanceInBlocks = distanceFromHqInBlocks(block)
  return distanceInBlocks * 264
}

function distanceTravelledInFeet(blockOne, blockTwo) {
  if (blockOne < blockTwo) {
    return (blockTwo - blockOne) * 264
  } else {
    return (blockOne - blockTwo) * 264
  }
}

function calculatesFarePrice(start, destination) {
  const distanceTravelled = distanceTravelledInFeet(start, destination)
  if (distanceTravelled === 264) {
    return 0
  } else if ((distanceTravelled >= 400) && (distanceTravelled <= 2000)) {
    return 0.02 * distanceTravelledInFeet(start, destination)
  } else if ((distanceTravelled > 2000) && (distanceTravelled < 2500)) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
