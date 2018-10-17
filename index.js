// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet (someValue) {
  return 264  * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet (start, destination) {
  return Math.abs(start - destination) * 264;
}


function calculatesFarePrice (start, destination) {

  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
