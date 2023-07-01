// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  const block = location - 42;
  return Math.abs(block);
}

function distanceFromHqInFeet (location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet (start, destination) {
  const difference = start - destination;
  return Math.abs(difference) * 264;
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return distance * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
