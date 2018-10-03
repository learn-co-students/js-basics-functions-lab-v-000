// Code your solution in this file!
function distanceFromHqInBlocks(destination){
  let result;
  if (destination >= 42){
    result = destination - 42
  } else {
    result = 42 - destination
  }
  return result
}

function distanceFromHqInFeet(destination){
  return 264 * distanceFromHqInBlocks(destination)
}

function distanceTravelledInFeet(start, destination){
  if (start >= destination){
    return 264*(start - destination)
  } else {
    return 264*(destination - start)
  }
}

function calculatesFarePrice(start, destination){
  let rideInFeet = distanceTravelledInFeet(start, destination);
  if (rideInFeet <= 400){
    return 0
  } else if (rideInFeet > 400 && rideInFeet <= 2000){
    return .02*(rideInFeet - 400)
  } else if (rideInFeet > 2000 && rideInFeet <= 2500){
    return 25
  }else if (rideInFeet > 2500){
    return 'cannot travel that far'
  }
}