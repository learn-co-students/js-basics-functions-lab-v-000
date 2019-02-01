// Code your solution in this file!
function distanceFromHqInBlocks (street) {
  let hq = 42;
  if (street > hq) {
    return (street - hq);
  } else {
    return (hq - street);
  }
}

function distanceFromHqInFeet (street) {
  return (distanceFromHqInBlocks(street) * 264);
}

function distanceTravelledInFeet (start, end) {
  if (start > end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice (start, destination) {
  const feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400) {
    return 0;
  }
  else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * .02;
  }
  else if (feet > 2000 && feet <= 2500) {
    return 25;
  }
  else if (feet > 2500) {
    return "cannot travel that far";
  }
}
