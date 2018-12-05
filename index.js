function distanceFromHqInBlocks (someValue) {
  if (someValue > 42) {
    return someValue - 42;
  }
  else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet (startPoint, endPoint) {
  if (startPoint > endPoint) {
    return (startPoint - endPoint) * 264;
  }
  else {
    return (endPoint - startPoint) * 264;
  }
}

function calculatesFarePrice (startPoint, endPoint) {
  const distance = distanceTravelledInFeet(startPoint, endPoint);

  if (distance <= 400)
    return 0;
  else if (distance > 400 && distance <= 2000)
    return (distance - 400) * .02;
  else if (distance > 2000 && distance <= 2500)
    return 25;
  else
    return 'cannot travel that far';
}
