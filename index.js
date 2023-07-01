// Code your solution in this file!

function distanceFromHqInBlocks(amount) {
  if (amount > 42) {
    return amount - 42;
  } else {
    return 42 - amount;
  }
}

function distanceFromHqInFeet(amount) {
  return distanceFromHqInBlocks(amount) * 264;
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

  if (distance < 400) {
    return 0;
  } else if (distance <= 2000) {
    return distance * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
