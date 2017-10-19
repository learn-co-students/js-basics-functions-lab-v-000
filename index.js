// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location < 42) {
    return 42 - location;
  } else {
    return location - 42;
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((start - end) * 264);
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  if (distance > 2500) {
    return "cannot travel that far"
  } else if (distance <= 2500 && distance > 2000) {
    return 25;
  } else if (distance <= 2000 && distance > 400) {
    return (distance) * 0.02;
  } else {
    return 0;
  }
}