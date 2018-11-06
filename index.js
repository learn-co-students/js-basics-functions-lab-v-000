function distanceFromHqInBlocks(pickupLocation) {
  let blocks;
  if (pickupLocation >= 42) {
    blocks = pickupLocation - 42;
  } else if (pickupLocation < 42) {
    blocks = 42 - pickupLocation;
  } else {
    return "Where were you picked up again?";
  }
  return blocks;
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(start, destination) {
  let distance;
  if (start >= destination) {
    distance = (start - destination) * 264;
  } else if (start < destination) {
    distance = (destination - start) * 264;
  } else {
    return "Where were you picked up again?";
  }
  return distance;
}

function calculatesFarePrice(start, destination) {
  let fare;
  distanceInFeet = distanceTravelledInFeet(start, destination)
  if (distanceInFeet <= 400) {
    fare = 0;
  } else if (distanceInFeet > 2500) {
    fare = 'cannot travel that far';
  } else if (distanceInFeet > 2000) {
    fare = 25;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    fare = (distanceInFeet - 400) * .02
  } else {
    fare = 'Hmm, not sure what to do here.';
  }
  return fare
}
