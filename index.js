// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let block;
  block = Math.abs(location - 42);
  return block;
}

function distanceFromHqInFeet(location) {
  let distance;
  distance = distanceFromHqInBlocks(location) * 264
  return distance;
}

function distanceTravelledInFeet(start, end) {
  let distanceTravelled;
  distanceTravelled = Math.abs(start - end) * 264;
  return distanceTravelled;
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);
  let fare;
  if (distance <= 400) {
    fare = 0
  } else if (distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    fare = 25;
  } else {
    fare = 'cannot travel that far'
  }
  return fare;
}
