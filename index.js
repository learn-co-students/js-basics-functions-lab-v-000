function distanceFromHqInBlocks(pickup) {
  if (pickup >= 42) {
    return pickup - 42;
  } else if (pickup < 42) {
    return 42 - pickup;
  }
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(pointA, pointB) {
  if (pointB >= pointA) {
    return (pointB - pointA) * 264;
  } else {
    return (pointA - pointB) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
  } else if (distance > 400 && distance < 2000 ) {
    return distance * .02;
  } else if (distance >= 2000 && distance < 2500) {
    return 25;
  } else if (distance >= 2500) {
    return 'cannot travel that far';
  }
}
