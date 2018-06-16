function distanceFromHqInBlocks(beginningBlock) {
  distance = Math.abs(beginningBlock-42);
  return distance
}

function distanceFromHqInFeet(beginningBlock) {
  distance = distanceFromHqInBlocks(beginningBlock)*264;
  return distance
}

function distanceTravelledInFeet(beginningBlock, endingBlock) {
  distance = Math.abs(beginningBlock-endingBlock)*264;
  return distance
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    fare = 0;
    return fare
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    message = "cannot travel that far";
    return message
  } else if (distanceTravelledInFeet(start, destination) > 2000) {
    rate = 25;
    return rate
  } else {
    rate = Math.abs(distanceTravelledInFeet(start, destination)-400)*0.02;
    return rate
  }
}
