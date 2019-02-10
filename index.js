// Code your solution in this file!
function distanceFromHqInBlocks(x) {
  let distance = Math.abs(42 - x);
  return distance;
}

function distanceFromHqInFeet(x) {
  let distance = distanceFromHqInBlocks(x)*264;
  return distance;
}

function distanceTravelledInFeet(x, y) {
  let distance = Math.abs(x-y)*264;
  return distance;
}

function calculatesFarePrice(x, y) {
  let price = 0;
  let distance = distanceTravelledInFeet(x, y);

  switch (distance) {
    case >2500:
      price = "cannot travel that far";
      break;
    case >2000:
      price = 25;
      break;
    case >401:
      price = (distance - 400) * 0.02;
      break;
  }
  return price;
  }
