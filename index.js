const headquarter = 42;
const block = 264;

function distanceFromHqInBlocks(pickup) {
  return Math.abs(headquarter - pickup)
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * block;
}

function distanceTravelledInFeet(pickup, dropoff) {
  const distance = Math.abs(pickup - dropoff);
  return distance * block;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let farePrice = 0;

  if (distance > 400 && distance < 2000) {
    farePrice = (distance - 400) * .02;
  } else if (distance >= 2000 && distance < 2500) {
    farePrice = 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }

  return farePrice;
}
