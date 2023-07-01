// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance < 42) {
    fromHQ = 42 - distance;
    return fromHQ;
  }
  else if (distance > 42) {
    fromHQ = distance - 42;
    return fromHQ;
  }
}

function distanceFromHqInFeet(distance) {
  blocks = distanceFromHqInBlocks(distance);
  return blocks * 264
}

function distanceTravelledInFeet(someValue1, someValue2) {
  if (someValue1 > someValue2) {
    someValue3 = someValue1 - someValue2;
    return someValue3 * 264;
  }
  else if (someValue1 < someValue2) {
    someValue3 = someValue2 - someValue1;
    return someValue3 * 264;
  }
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400)
    return 0;
  else if (distanceTravelledInFeet(start, destination) <= 2000)
    return .02 * (distanceTravelledInFeet(start, destination) - 400);
  else if (distanceTravelledInFeet(start, destination) <= 2500)
    return 25;
  else
    return 'cannot travel that far';
}
