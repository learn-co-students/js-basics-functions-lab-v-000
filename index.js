// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance >= 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let farePrice;

  switch (true) {
    case distance <= 400:
      farePrice = 0;
      break;
    case distance > 400 && distance <= 2000:
      farePrice = (distance - 400) * 0.02;
      break;
    case distance > 2000 && distance <= 2500:
      farePrice = 25;
      break;
    default:
      return "cannot travel that far";
  }
  return farePrice;
}
