// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return 264 * distanceFromHqInBlocks(street);
}

function distanceTravelledInFeet(start, end) {
  return 264 * Math.abs(start - end);
}

function calculatesFarePrice(start, destination) {
   let dist, fare;
   dist = distanceTravelledInFeet(start, destination);
  if (dist < 400) {
    fare = 0;
  }
  else if (dist >= 400 && dist < 2000) {
    fare = (dist - 400) * .02;
  }
  else if (dist >= 2000 && dist < 2500) {
    fare = 25;
  }
  else if (dist >= 2500) {
    fare = 'cannot travel that far';
  }
  return fare;
}




