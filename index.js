function distanceFromHqInBlocks (n) {
  if (n >= 42) {
    return n - 42;
  } else if (n < 42) {
    return Math.abs(n - 42)
  }
}

function distanceFromHqInFeet (n) {
  return distanceFromHqInBlocks(n) * 264;
}

function distanceTravelledInFeet(x , y) {
  return Math.abs(x - y) * 264
}

function calculatesFarePrice(x, y) {
  if (distanceTravelledInFeet(x, y) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(x, y) >= 400 && distanceTravelledInFeet(x, y) < 2000) {
    return distanceTravelledInFeet(x,y) * .02;
  } else if (distanceTravelledInFeet(x, y) >= 2000 && distanceTravelledInFeet(x, y) < 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}









