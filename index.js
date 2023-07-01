// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  return Math.abs(42 - block)
}

function distanceFromHqInFeet (place) {
  return distanceFromHqInBlocks(place) * 264
}

function distanceTravelledInFeet(blockOne, blockTwo) {
  return Math.abs(blockOne - blockTwo) * 264
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination)
  if (feet < 400) {
    return 0
  } else if (feet >= 400 && feet <= 2000) {
    return parseFloat((feet * .02 - 8).toFixed(2))
  } else if (feet > 2000 && feet < 2500) {
    return 25
  } else if (feet > 2500) {
    return 'cannot travel that far'
  }
}
