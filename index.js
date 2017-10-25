// Code your solution in this file!
function calculateVertical (start, destination) {
  return ((destination - start) * 264)
}

function distanceFromHqInBlocks (destination) {
  start = 42
  if (destination < 42) {
    return (start - destination)
  } else if (destination >= 42) {
    return (destination - start)
  }
}

function distanceFromHqInFeet (destination) {
  return distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet (start, destination) {
  if (destination < start) {
    return (start - destination) * 264
  } else {
    return (destination - start) * 264
  }
}

function calculatesFarePrice (start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
  if (feet < 400) {
    return 0;
  } else if (feet >= 400 && feet < 2000) {
    return (feet * 0.02);
  } else if (feet >= 2000 && feet < 2500) {
    return 25;
  } else if (feet >= 2500){
    return "cannot travel that far"
  }
}
