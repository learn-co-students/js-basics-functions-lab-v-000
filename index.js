// Code your solution in this file!

function distanceFromHqInBlocks (pickUpLocation) {
  if (pickUpLocation >= 42) {
    return pickUpLocation - 42
  } else {
    return 42 - pickUpLocation
  }
}

function distanceFromHqInFeet (pickUpLocation) {
  return 264 * distanceFromHqInBlocks(pickUpLocation)
}

function distanceTravelledInFeet (pickUpLocation, destinationLocation) {
  if (destinationLocation >= pickUpLocation) {
    return (destinationLocation - pickUpLocation) * 264
  } else {
    return (pickUpLocation - destinationLocation) * 264
  }
}

function calculatesFarePrice (pickUpLocation, destinationLocation) {
  travelDistance = distanceTravelledInFeet(pickUpLocation, destinationLocation)
  if (travelDistance <= 400) {
    return 0
  } else if (travelDistance > 400 && travelDistance <= 2000) {
    return travelDistance * 0.02
  } else if (travelDistance > 2000 && travelDistance <= 2500 ){
    return 25
  } else {
    return "cannot travel that far"
  }
}
