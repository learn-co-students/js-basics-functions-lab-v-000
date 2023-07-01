// Code your solution in this file!
function calculateVertical(d1, d2) {
  let vertical = Math.abs(d2-d1);
  return vertical;
}

function distanceInFeet(distance) {
  const blockSize = 264;
  return distance*blockSize;
}

function distanceFromHqInBlocks(location) {
  const baseAddress = 42;
  return calculateVertical(location, baseAddress);
}

function distanceFromHqInFeet(location) {
  return distanceInFeet(distanceFromHqInBlocks(location));
}

function distanceTravelledInFeet(d1,d2) {
  return distanceInFeet(calculateVertical(d1,d2));
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return distance*0.02;
  } else if (distance >= 2000 && distance < 2500) {
    return 25.00;
  } else {
    return 'cannot travel that far'
  }
}
