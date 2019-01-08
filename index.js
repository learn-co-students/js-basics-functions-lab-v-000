function distanceFromHqInBlocks(someValue) {
  let result;

  if (someValue > 42) {
    result = someValue - 42;
  }
  else {
    result = 42 - someValue;
  }

  return result;
}

function distanceFromHqInFeet(somevalue) {
  let result = distanceFromHqInBlocks(somevalue) * 264;

  return result;
}

function distanceTravelledInFeet(someValue) {
  let result = distanceFromHqInFeet(someValue);

  return someValue;
}
