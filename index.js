// Code your solution in this file!
function distanceFromHqInBlocks (street) {
  let distance = Math.abs(42 - street);
  return distance;
}

function distanceFromHqInFeet (street) {
  let feet = distanceFromHqInBlocks(street) * 264 ;
  return feet;
}

function distanceTravelledInFeet(start, end) {
  let dist = Math.abs(start - end) * 264;
  return dist ;
}

function calculatesFarePrice(start, end) {
  let feet = distanceTravelledInFeet(start, end)
  if (feet < 400) {
    return 0;
  } else if (feet < 2000) {
    return (feet - 400) * 0.02 ;
  } else if (feet <= 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}