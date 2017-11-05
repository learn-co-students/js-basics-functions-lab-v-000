function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation > 42) {
    return pickupLocation - 42;
  }
  else if (pickupLocation < 42) {
    return 42 - pickupLocation;
  }
  else {
    return 0;
  }
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation)*264;
}

function distanceTravelledInFeet(start, destination) {
  if  (start < destination) {
    return (destination - start) * 264;
  }
  else if (start > destination) {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    return distance*2/100;
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far'
  }

}
