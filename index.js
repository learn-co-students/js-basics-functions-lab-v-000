// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location >= 42) {
    return location - 42;
  }
  else if (location < 42) {
    return 42 - location;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, stop) {
  let distance = (stop - start) * 264;
  let feet = (distance > 0) ? distance : distance * -1;
  return feet
}

function calculatesFarePrice(start, destination) {

  let feetTravelled = distanceTravelledInFeet(start, destination)
  if (feetTravelled < 400) {
    return 0;
  }

  else if (feetTravelled > 400 && feetTravelled < 2000) {
    return (feetTravelled - 400) * .02
  }

  else if (feetTravelled > 2500) {
    return 'cannot travel that far'
  }

  else if (feetTravelled > 2000) {
    return 25
  }

}
