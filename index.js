// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let pickup = 42
  return Math.abs(someValue - pickup)
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(someValue1, someValue2) {
  return Math.abs(someValue2 - someValue1) * 264
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0
  } else if (distance <= 2000) {
    return 0.02 * (distance - 400)
  } else if (distance > 2500) {
    return "cannot travel that far"
  } else {
    return 25
  }
}
