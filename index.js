// Code your solution in this file!
const hq = 42;
const blockInFeet = 264;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hq);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * blockInFeet;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * blockInFeet;
}

function calculatesFarePrice(start, destination) {
  const distanceTravelled = distanceTravelledInFeet(start, destination);
  if (distanceTravelled > 2500) {
    return 'cannot travel that far';
  } else if (distanceTravelled > 2000) {
    return 25;
  } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
    return (distanceTravelled - 400) * .02;
  } else {
    return 0;
  }
}
