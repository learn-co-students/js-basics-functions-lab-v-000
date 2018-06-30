// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location - 42
  }
  else {
    return 42 - location
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}



function distanceTravelledInFeet(location1, location2) {
  if (location2 > location1) {
    return (location2 - location1) * 264
  }
  else {
    return (location1 - location2) * 264
  }

}


function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) > 2500) {
    return "cannot travel that far"
  }
  else if (distanceTravelledInFeet(start, destination) < 400) {
    return 0
  }
  else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * .02
  }
  else if (distanceTravelledInFeet(start, destination) > 2000) {
    return 25
  }

}
