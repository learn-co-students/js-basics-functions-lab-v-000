// Code your solution in this file!
function distanceFromHqInBlocks(streetNum) {
  return destination_block = Math.abs(streetNum - 42);

}

function distanceFromHqInFeet(streetNum) {
  return distanceFromHqInBlocks(streetNum) *264;
}

function distanceTravelledInFeet(streetNum1, streetNum2) {
  return Math.abs(streetNum1 - streetNum2) * 264;
}

function calculatesFarePrice(streetNum1, streetNum2) {
  const distance = distanceTravelledInFeet(streetNum1, streetNum2)

  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
   else {
    return 25;
  }

}
