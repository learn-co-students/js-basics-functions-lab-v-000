// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  return Math.abs(42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(a, b) {
  return Math.abs(a - b) * 264;
}

function calculatesFarePrice(a, b) {
  const distance = distanceTravelledInFeet(a, b);
  if (distance <= 400) {
    return 0;
  } else if (distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}