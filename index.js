// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let blocks = distance - 42;
    if (blocks > 0) {
      return blocks;
    }
    else {
      return -(blocks);
    }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(distance1, distance2) {
  let blocks = distance2 - distance1
  if (blocks > 0) {
    return blocks * 264
  }
  else {
    return -(blocks) *264
  }
}

function calculatesFarePrice(start, end) {
  distanceTravelled = distanceTravelledInFeet(start, end)
  if (distanceTravelled <= 400) {
    return 0;
  }
  else if (distanceTravelled > 400 && distanceTravelled < 2000) {
    return (distanceTravelled- 400) * 0.02
  }
  else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
    return 25;
  }
  else {
      return 'cannot travel that far'
  }
}
