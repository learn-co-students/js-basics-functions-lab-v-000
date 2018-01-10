// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  return Math.abs(location  - 42)
}

function distanceFromHqInFeet (block) {
  numberBlocks = distanceFromHqInBlocks(block)
  return 264 * numberBlocks
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
  if (distance > 2500) {
      return 'cannot travel that far'
  } else if (2000 < distance && distance < 2500) {
    return 25
  } else if (distance < 400){
    return 0
  } else {
    return .02 * distance
  }
}
