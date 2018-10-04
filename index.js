function distanceFromHqInBlocks (distance) {
  if (distance >= 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return (destination - start) * 264;
  } else {
    return (start-destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  x = distanceTravelledInFeet(start, destination)
  if (x > 2500) {
    return "cannot travel that far";
  } else if (x > 2000) {
    return 25;
  } else if (x < 2000 && x > 400){
    return (x - 400) * .02
  } else {
    return 0;
  }
}
