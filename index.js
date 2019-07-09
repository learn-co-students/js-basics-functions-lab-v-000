const hq = 42;

function distanceFromHqInBlocks (street) {
  return street < hq ? hq - street : street - hq;
}

function distanceFromHqInFeet (street) {
  const blocks = distanceFromHqInBlocks(street);
  return blocks * 264;
}

function distanceTravelledInFeet (startB, endB) {
  const distance = startB > endB ? startB - endB : endB - startB;
  return distance * 264;
}

function calculatesFarePrice (startB, endB) {
  const feet = distanceTravelledInFeet(startB, endB);

  if (feet > 2500) {
    return "cannot travel that far";
  } else if (feet > 2000) {
    return 25;
  } else if (feet > 400) {
    return (feet - 400) * 0.02;
  } else {
    return 0;
  }
}
