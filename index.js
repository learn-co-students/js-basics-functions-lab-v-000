// Code your solution in this file!



function distanceFromHqInBlocks(someValue) {
  if (someValue < 42) {
    return 42 - someValue
  } else {
    return someValue - 42
  }
};

function distanceFromHqInFeet(someValue) {
  let feet;
  feet = distanceFromHqInBlocks(someValue) * 264;
  return feet;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264
  } else
    return (destination - start) * 264
};

function calculatesFarePrice(start, destination) {
  let difference = distanceTravelledInFeet(start, destination)
  if (difference < 400) {
    return 0
  } else if (difference > 401 && difference < 2000) {
    return ((difference - 400) * 0.02)
  } else if (difference > 2000 && difference < 2500) {
    return 25
  } else if (difference > 2500 ){
    return 'cannot travel that far'
  }

};
