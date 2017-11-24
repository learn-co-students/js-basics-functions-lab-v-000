// Code your solution in this file!

function distanceFromHqInBlocks(pickUpStreet) {
  const hqStreet = 42;
  return Math.abs(pickUpStreet - hqStreet);
}

function distanceFromHqInFeet(pickUpStreet) {
  return distanceFromHqInBlocks(pickUpStreet) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distanceTravelled = distanceTravelledInFeet(start, destination);
  if (distanceTravelled > 2500) {
    return 'cannot travel that far';
  } else if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000){
    return distanceTravelledInFeet(start, destination) * 0.02;
  } else if (distanceTravelled > 2000) {
    return 25;
  }
}
