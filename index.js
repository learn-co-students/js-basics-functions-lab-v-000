// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance >= 2500) {
    return 'cannot travel that far'
  } else if (distance >= 2000) {
    return 25
  } else if (distance >= 400) {
    return distance * .02
  } else {
    return 0
  }
}
