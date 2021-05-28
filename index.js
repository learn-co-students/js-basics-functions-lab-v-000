// Code your solution in this file!
function distanceFromHqInBlocks(blockValue) {
  //returns the number of blocks given a value
  if (blockValue > 42) {
    return blockValue - 42
  } else {
    return 42 - blockValue
  }
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264
  } else {
    return (end - start) * 264
  }
}

function calculatesFarePrice(start, end) {
  distance = distanceTravelledInFeet(start, end)
  if ( distance < 400) {
    return 0
  } else if ( distance > 400 && distance < 2000) {
    return .02 * (distance - 400)
  } else if ( distance > 2000 && distance < 2500) {
    return 25
  } else if (distance > 2500) {
    return "cannot travel that far"
  }
}

