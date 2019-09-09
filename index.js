// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  if (streetNumber < 42) {
    return 42 - streetNumber
  } else if (streetNumber > 42) {
    return streetNumber - 42
  } else {
    return streetNumber
  }

}
