// Code your solution in this file!
  function distanceFromHqInBlocks (someValue_1) {
    scuberHeadquarters = 42;
    customerLocation = someValue_1;
    customerDistanceFromHQBlocks = Math.abs(scuberHeadquarters - customerLocation);
    return customerDistanceFromHQBlocks;
}

function distanceFromHqInFeet (someValue) {
  distanceFromHqInBlocks(someValue);
  customerDistanceFromHQInFeet = customerDistanceFromHQBlocks * 264;
  return customerDistanceFromHQInFeet;
}

function distanceTravelledInFeet (startValue, endValue){
  blockDistance = 264;
  numberOfBlocks = Math.abs(startValue - endValue);
  blockTravelDistanceInFeet = numberOfBlocks * blockDistance;
  return blockTravelDistanceInFeet;
}

function calculatesFarePrice (startValue, endValue) {
  const distance = distanceTravelledInFeet(startValue, endValue);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
