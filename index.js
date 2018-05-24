// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  let hq = 42;
  let distance;
  distance = (hq - location);
  return Math.abs(distance);
}

function distanceFromHqInFeet(location) {
  let blocks = distanceFromHqInBlocks(location);
  let feet = 264;
  distance = (blocks * feet);
  return distance;
}

function distanceTravelledInFeet(start, end) {
  let blocks = Math.abs(start - end);
  let feet = 264;
  distance = (blocks * feet);
  return distance;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let fare = .02
  let price;
  if (distance <= 400) {
    price = 0;
    return price;
  } else if (distance > 400 && distance < 2000) {
    price = ((distance * fare) - (400 * fare));
    return parseFloat(price.toFixed(2));
  } else if (distance > 2000 && distance < 2500) {
    price = 25;
    return price;
  } else {
    return "cannot travel that far"
  }
}