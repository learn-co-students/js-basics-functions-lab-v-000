const distanceFromHqInBlocks = (location) => {
  return Math.abs(location - 42);
}

const distanceFromHqInFeet = (location) => {
  return distanceFromHqInBlocks(location) * 264;
}

const distanceTravelledInFeet = (a, b) => {
  return Math.abs(a - b) * 264;
}

const calculatesFarePrice = (start, destination) => {
  distance = distanceTravelledInFeet(start, destination)
  if (distance >= 2500) {
    return "cannot travel that far";
  } else if (distance >= 2000) {
    return 25;
  } else if (distance >= 400) {
    return distance * .02;
  } else {
    return 0;
  }
}
