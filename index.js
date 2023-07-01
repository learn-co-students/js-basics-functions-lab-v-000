// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let distance =  (location - 42);
  return Math.abs(distance);
}

function distanceFromHqInFeet(location) {
  let distance = (location - 42) * 264;
  return Math.abs(distance);
}

function distanceTravelledInFeet(start, finish) {
  let distance = (finish - start) * 264;
  return Math.abs(distance);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return ((distance - 400) * .02);
  } else if (distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}