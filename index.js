// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  const hq = 42;
  if (location > hq) {
    return location - hq;
  }
  else if (location < hq) {
    return hq - location;
  }
}

function distanceFromHqInFeet(location) {
  let blocks = distanceFromHqInBlocks(location);
  return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
  if (end > start) {
    return (end - start) * 264;
  } else if (start > end) {
    return (start - end) * 264;
  }
}

function calculatesFarePrice(start, end) {
  let feet = distanceTravelledInFeet(start, end);
  if (feet < 400) {
    return 0;
  }
  else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * 0.02
  }
  else if (feet > 2000 && feet <= 2500) {
    return 25;
  }
  else if (feet > 2500) {
    return 'cannot travel that far';
  }
}
