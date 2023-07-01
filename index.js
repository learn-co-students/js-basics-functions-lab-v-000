// Code your solution in this file!

const home = 42;
const blockDistance = 264;

function distanceFromHqInBlocks(distance) {
  return Math.abs(home - distance);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * blockDistance;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((start - end) * blockDistance)
}

function calculatesFarePrice(start, end) {
  let travelled = distanceTravelledInFeet(start, end)
  if (travelled < 400) {
    return 0;
  } else if (travelled < 2000) {
    return travelled * .02;
  } else if (travelled < 2500) {
    return 25;
  } else {
    return "cannot travel that far"
  }
}
