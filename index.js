function distanceFromHqInBlocks(someValue) {
  let distance;
  distance = Math.abs(someValue - 42);
  return distance;
};

function distanceFromHqInFeet(someValue) {
  let distance;
  distance = distanceFromHqInBlocks(someValue) * 264;
  return distance;
};

function distanceTravelledInFeet(startValue, endValue) {
  let distance;
  distance = Math.abs(startValue - endValue) * 264;
  return distance;
};

function calculatesFarePrice(start, destination) {
  let price;
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    price = 0;
  } else if (distance <= 2000) {
    price = (distance - 400) * .02;
  } else if (distance <= 2500) {
    price = 25;
  } else {
    price = 'cannot travel that far';
  }
  return price
};
