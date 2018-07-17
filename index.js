// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let blocks;
  blocks = Math.abs(someValue - 42);
  return blocks;
}

function distanceFromHqInFeet(someValue) {
  let feet;
  feet = distanceFromHqInBlocks(someValue) * 264;
  return feet;
}

function distanceTravelledInFeet(start, end) {
  let feetTravelled;
  feetTravelled = (Math.abs(start - end)*264);
  return feetTravelled;
}

function calculatesFarePrice(start, end) {
  let price;
  let travelLength = (Math.abs(start - end)*264);
  if (travelLength <= 400 ) {
    price = 0;
  } else if (travelLength >= 400 && travelLength <= 2000) {
    price = .02 * (travelLength - 400);
  } else if (travelLength > 2000 && travelLength < 2500) {
    price = 25;
  } else if (travelLength > 2500) {
    price = `cannot travel that far`;
  }
  return price;
}
