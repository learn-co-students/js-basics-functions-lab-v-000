// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  let distance = Math.abs(blocks - 42);
  return distance
}

function distanceFromHqInFeet(blocks) {
  let feetDistance = distanceFromHqInBlocks(blocks) * 264;
  return feetDistance
}

function distanceTravelledInFeet(start, end) {
  let travelled = Math.abs((end - start) * 264);
  return travelled
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let fare;

  switch (true) {
    case (distance > 0) && (distance <= 400):
      fare = 0;
      break;
    case (distance > 400) && (distance <= 2000):
      fare = (distance - 400) * .02;
      break;
    case (distance > 2000) && (distance <= 2500):
      fare = 25;
      break;
    case (distance > 2500):
      fare = "cannot travel that far";
  }
  return fare
}
