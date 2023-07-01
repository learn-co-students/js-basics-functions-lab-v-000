// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  const hqStreet = 42;
  blocksFromHq = 42 - streetNumber;
  return Math.abs(blocksFromHq);
};

function distanceFromHqInFeet(streetNumber) {
  let distance;
  distanceInFeet = distanceFromHqInBlocks(streetNumber) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(streetOne, streetTwo) {
  let distance = (streetTwo - streetOne) * 264;
  return Math.abs(distance);
};

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let temp = distance;
  let cost;

  if (distance >= 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    cost = 25;
  } else if (400 < distance && distance < 2000) {
    cost = (distance - 400) * .02;
  } else {
    cost = 0;
  }
  return cost;
};
