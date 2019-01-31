// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(42 - parseInt(street))
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  let travelled = distanceTravelledInFeet(start, end)

  if (travelled <= 400) {
    return 0
  }
  else if (travelled > 400 && travelled <= 2000) {
    return (travelled - 400) * .02;
  }
  else if (travelled > 2000 && travelled <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
