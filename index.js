// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  if (location > 42) {
    return location - 42;
  } else {
    return 42 - location;
  }
}

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264
}
