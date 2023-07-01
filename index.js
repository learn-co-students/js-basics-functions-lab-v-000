// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  return Math.abs(location-42);
}

function distanceFromHqInFeet(location) {
  return Math.abs(location-42)*264;
}

function distanceTravelledInFeet(a,b) {
  return Math.abs(a-b)*264;
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  }
  if (distanceTravelledInFeet(start, destination)  < 400) {
    return 0;
  }
  if (distanceTravelledInFeet(start, destination)  > 400 &&
  distanceTravelledInFeet(start, destination)  < 2000) {
    return (distanceTravelledInFeet(start, destination) -400) * .02;
  }
  if (distanceTravelledInFeet(start, destination)  > 2000 && distanceTravelledInFeet(start, destination)  < 2500) {
    return 25;
  }
  if (distanceTravelledInFeet(start, destination)  > 2500) {
    return "cannot travel that far";
  }
}
