// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  const Hq = 42;

  let result
  result = (Hq > street ? (Hq - street) : (street - Hq));
  return result
}

function distanceFromHqInFeet(street) {
  const Hq = 42;

  let result
  result = (distanceFromHqInBlocks(street) * 264);
  return result
}

function distanceTravelledInBlocks(street_1, street_2) {
  let result
  result = (street_1 > street_2 ? (street_1 - street_2) : (street_2 - street_1));
  return result
}

function distanceTravelledInFeet(street_1, street_2) {
  let result
  result = (distanceTravelledInBlocks(street_1, street_2) * 264);
  return result
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination)

  let result
    if (feet < 400) {
      result = 0;
    }
    else if (feet > 400 && feet < 2000) {
      result = ((feet - 400) * 0.02);
    }
    else if (feet > 2000 && feet < 2500) {
      result = 25;
    }
    else {
      result = "cannot travel that far";
    }
  return result
}
