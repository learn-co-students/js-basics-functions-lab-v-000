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

function distanceTravelledInFeet(someValue1, someValue2) {
  let result = (distanceFromHqInBlocks(someValue2) - distanceFromHqInBlocks(someValue1)) * 264;

  return result;
}

function calculatesFarePrice(start, destination) {
  let result;
  distance = distanceTravelledInFeet(start, destination);

  if (distance < 400) {
    result = 0;
  } else if (distance < 2000) {
    result = (distance - 400) * 0.02;
  } else if (distance < 2500) {
    result = 25;
  } else {
    result = "cannot travel that far"
  }


  return result;

}
