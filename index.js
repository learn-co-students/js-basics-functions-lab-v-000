distanceFromHqInBlocks = (location) => {
  const headQuarters = 42;
  if (location > 42) {
    return location - headQuarters;
  } else {
    return headQuarters - location;
  }
}

distanceFromHqInFeet = (location) => {
  return distanceFromHqInBlocks(location) * 264;
}

distanceTravelledInFeet = (start, destination) => {
  if (start > destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}

calculatesFarePrice = (start, destination) => {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return distance * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}