// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(a, b) {
  return Math.abs(a - b) * 264
}

function calculatesFarePrice(a, b) {
  let distance = distanceTravelledInFeet(a, b);
    if (distance < 400) {
      return 0
  } else if (distance  > 400 && distance < 2000) {
      return .02 * distance
  }  else if (distance > 2000 && distance < 2500) {
      return 25
  }  else {
      return "cannot travel that far"
  }
}
