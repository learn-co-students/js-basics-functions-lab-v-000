// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(startStreet, endStreet) {
  return Math.abs(startStreet - endStreet) * 264;
}

function calculatesFarePrice(startStreet, endStreet) {
  const absDistance = distanceTravelledInFeet(startStreet, endStreet);
  let farePrice;

  if (absDistance < 400)
  {
    farePrice = 0;
  }
  else if (absDistance >= 400 && absDistance < 2000)
  {
    farePrice = .02 * (absDistance-400);
  }
  else if (absDistance >= 2000 && absDistance < 2500)
  {
    farePrice = 25;
  }
  else
  {
    return 'cannot travel that far'
  }
  return farePrice;
}
