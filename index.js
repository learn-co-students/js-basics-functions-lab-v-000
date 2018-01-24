// Code your solution in this file!
function calculateVertical(beginning, destination) {
  return Math.abs((destination - beginning) * 264)
}

function distanceFromHqInBlocks(location) {
  return Math.abs(42 - location)
}

function distanceFromHqInFeet(location) {
  return (distanceFromHqInBlocks(location) * 264)
}

function distanceTravelledInFeet(beginning, destination) {
  return calculateVertical(beginning, destination)
}

function calculatesFarePrice(beginning, destination) {
  const distance = distanceTravelledInFeet(beginning, destination);
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return (distance * .02);
  } else if (distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
