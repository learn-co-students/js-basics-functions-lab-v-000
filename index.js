// Code your solution in this file!
// block = 264 ft
// HQ = 42

function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return (street - 42);
  }
  else {
    return (42 - street)
  }
}

function distanceFromHqInFeet(street) {
  if (street > 42) {
    return ((street - 42) * 264);
  }
  else {
    return ((42 - street) * 264);
  }
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return ((start - destination) * 264);
  }
  else {
    return ((destination - start) * 264);
  }
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination)
  if (feet <= 400) {
      return 0
  } else if ((feet > 400) && (feet <= 2000)) {
      return ((feet - 400) * 0.02)
  } else if ((feet > 2000) && (feet < 2500)) {
      return 25
  } else if (feet > 2500) {
      return 'cannot travel that far'
    }
}
