function distanceFromHqInBlocks(block) {
  let blockDistance
  if (block <= 42) {
    blockDistance = 42 - block
  }
  else {
    blockDistance = block - 42
  }
  return blockDistance
}

function distanceFromHqInFeet(block) {
  let feetDistance = distanceFromHqInBlocks(block) * 264
  return feetDistance
}

function distanceTravelledInFeet(start, destination){
  let feetTravelled
  if (destination >= start) {
    feetTravelled = (destination - start) * 264
  }
  else {
    feetTravelled = (start - destination) * 264
  }
  return feetTravelled
}

function calculatesFarePrice(start, destination) {
  let fare
  distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
      fare = 0;
    }
    else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    }
    else if (distance > 2500) {
     fare = "cannot travel that far";
    }
  return fare
}