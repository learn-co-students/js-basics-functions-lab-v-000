// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
  let result;
  if (someValue === 43) {
    return result = 1
  }
  else if (someValue > 43) {
    return result = someValue - 42
  }
  else if (someValue < 43) {
    return result = 42 - someValue
  }
  return result
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(x, y) {
  if (y > x)
  return (y - x) * 264
  else
  return (x - y) * 264
}

function calculatesFarePrice(start, destination) {
  const
  distance = distanceTravelledInFeet(start, destination);
  let result = 0;
  if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance > 2000) {
    result = 25;
  } else if (distance> 400) {
    result = (distance-400) * 0.02;
  }
  return result;
}
