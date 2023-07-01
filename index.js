function distanceFromHqInBlocks(street) {
  let result;
  if (street > 42) {
    result = street - 42;
  }
  else if (street < 42) {
    result = 42 - street;
  }
    return result;
}

function distanceFromHqInFeet(street) {
  let result;
  if (street > 42) {
    result = (street - 42) * 264;
  }
  else if (street < 42) {
    result = (42 - street) * 264;
  }
  return result;
}

function distanceTravelledInFeet(start, end) {
  let result;
  if (start < end) {
    result = (end - start) * 264;
  }
  else if (start > end) {
    result = (start - end) * 264;
  }
  return result;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let result;

  if (distance < 400) {
    result = 0;
  }
  else if (distance > 2500) {
    result = "cannot travel that far";
  }
  else if (distance >= 400 && distance <= 2000) {
    result = (distance - 400) * .02;
  }
  else {
    result = 25;
  }
  return result;
}
