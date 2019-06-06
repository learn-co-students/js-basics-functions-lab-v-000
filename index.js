// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return street - 42;
  } else {
    return 42 - street;
  }
}

function distanceFromHqInFeet(street) {
  let blocks = distanceFromHqInBlocks(street);
  return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end)*264;
  } else {
    return (end - start)*264;
  }
}

function calculatesFarePrice(start, destination) {
  let tripInFeet = distanceTravelledInFeet(start, destination);
  if (tripInFeet <= 400) {
    return 0;
  } else if (tripInFeet < 2000 && tripInFeet > 400) {
      return (tripInFeet - 400)* .02;
  } else if (tripInFeet > 2500) {
    return "cannot travel that far";
  } else if (tripInFeet > 2000) {
    return 25;
  }
}
