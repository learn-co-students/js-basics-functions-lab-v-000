// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  location >= 42 ? (distance = location - 42) : (distance = 42 - location);
  return distance
}

function distanceFromHqInFeet(location) {
  distance = distanceFromHqInBlocks(location) * 264;
  return distance
}

function distanceTravelledInFeet(pickup, dropoff) {
  pickup > dropoff ? (distance = (pickup - dropoff) * 264) : (distance = (dropoff - pickup) * 264);
  return distance
}

function calculatesFarePrice(pickup, dropoff) {
  distance = distanceTravelledInFeet(pickup, dropoff);
  if (distance < 400) {
    farePrice = 0;
  }
  else if ((distance >= 400) && (distance <= 2000)) {
    farePrice = ((distanceTravelledInFeet(pickup, dropoff) - 400) * 0.02);
  }
  else if ((distance > 2000) && (distance < 2500)) {
    farePrice = 25;
  }
  else if (distance >= 2500) {
    farePrice = 'cannot travel that far'
  }
  return farePrice
}
