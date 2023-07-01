// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let headquarters = 42;
  if (street >= 42) {
    return street - headquarters;
  } else {
    return headquarters - street;
  }
}

function distanceTravelledInFeet(start, end) {
  if (start >= end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function distanceFromHqInFeet(street) {
  let headquarters = 42;
  return distanceTravelledInFeet(headquarters, street);
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
      return distance * 0.02
  } else if (distance > 2000 && distance <= 2500) {
      return 25
  } else {
    return 'cannot travel that far'
  }
}
