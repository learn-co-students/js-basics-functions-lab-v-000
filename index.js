function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs(startingBlock - endingBlock) * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance < 400) {
    return 0
  } else if (distance < 2000) {
    return distance*2/100
  } else if (distance < 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
