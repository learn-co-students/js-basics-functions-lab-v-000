// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  if (someValue >= 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}
 
function distanceFromHqInFeet (someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
}

function distanceTravelledInFeet(startTrip, endTrip) {
  if (startTrip >= endTrip) {
    const blocks = startTrip - endTrip;
    return (blocks * 264);
  } else {
    const blocks = endTrip - startTrip;
    return (blocks * 264);
  }
}


function calculatesFarePrice(startTrip, endTrip) {
  const feet = distanceTravelledInFeet(startTrip, endTrip);
  if (feet <= 400) {
    return 0;
  } else if (feet < 2000 ) {
    return ((feet - 400) * .02);
  } else if (feet > 2000 && feet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}