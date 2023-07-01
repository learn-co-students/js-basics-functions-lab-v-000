// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  let blocks = (streetNumber >= 42) ? (streetNumber - 42) : (42 - streetNumber);
  return blocks;
}

function distanceFromHqInFeet(streetNumber) {
  return 264 * distanceFromHqInBlocks(streetNumber);
}

function distanceTravelledInFeet(start, destination) {
  let blocks;
  if (start < destination) {
    blocks = destination - start;
  } else {
    blocks = start - destination;
  }
  return 264 * blocks;
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
  let fare;
  if (feet > 2500) {
    fare = "cannot travel that far";
  } else if (feet > 400 && feet <= 2000) {
    fare = (feet - 400) * .02;
  } else if (feet > 2000) {
    fare = 25;
  } else {
    fare = 0;
  }
  return fare;
}
