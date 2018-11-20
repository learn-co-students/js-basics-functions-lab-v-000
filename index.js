// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let result;
    location > 42 ? result = location - 42: result =  42 - location;
  return result;
}

function distanceFromHqInFeet(location) {
  let feet = distanceFromHqInBlocks(location);
  let result = feet * 264;
  return result;
}

function distanceTravelledInFeet(start, destination) {
  let result;
    start > destination ? result = (start - destination)  * 264 : result =  (destination - start) * 264;
  return result;
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
  let result;
  if (feet > 2500) {
      result = 'cannot travel that far';
  } else if (feet > 400 && feet <2000) {
      result = 0.02 * (feet - 400)
  } else if (feet < 400) {
      result = 0;
  } else if (feet >= 2000 && feet <= 2500) {
      result = 25;
  }
  return result;
}