// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
  return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs(start - finish) * 264;
}

function calculatesFarePrice(start, finish) {
  distanceInFeet = distanceTravelledInFeet(start, finish);
  let fare;
  if (distanceInFeet < 400) {
    fare = 0;
  } else if (distanceInFeet > 2500) {
    fare = "cannot travel that far";
  } else if (distanceInFeet > 2000) {
    fare = 25;
  } else {
    fare = (distanceInFeet - 400) * 0.02;
  }

  return fare;
}

