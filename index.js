function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  distance_feet = distanceTravelledInFeet(start, destination)

  if (distance_feet <= 400) {
    return 0;
  } else if (distance_feet > 400 && distance_feet <= 2000) {
    return (distance_feet * 0.02);
  } else if (distance_feet > 2000 && distance_feet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
