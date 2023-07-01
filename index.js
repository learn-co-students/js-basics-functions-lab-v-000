// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
  if (streetNumber > 42) {
    return streetNumber - 42;
  } else {
    return 42 - streetNumber;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, stop) {
  if (start > stop) {
    return (start - stop) * 264;
  } else {
    return (stop - start) * 264;
  }
}

function calculatesFarePrice(start, stop) {
  let distance = distanceTravelledInFeet(start, stop)

  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * .02
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
