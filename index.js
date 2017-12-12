// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
  return Math.abs(42 - blockNumber)
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (starting, ending) {
  diff = Math.abs(starting - ending)
  return diff*264
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400 ) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02*distance;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
