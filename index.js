// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue >= 42) {
    return someValue - 42;
  }
  else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(begin, end) {
  if (end > begin) {
    return (end - begin) * 264;
  }
  else {
    return (begin - end) * 264;
  }
}

function calculatesFarePrice(begin, end) {
  const distance = distanceTravelledInFeet(begin, end);
    if (distance <= 400) {
      return 0;
    }
    else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * .02;
    }
    else if (distance > 2000 && distance < 2500) {
      return 25;
    }
    else {
      return "cannot travel that far";
    }
}
