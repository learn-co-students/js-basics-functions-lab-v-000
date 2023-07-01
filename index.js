// Code your solution in this file

function distanceFromHqInBlocks(destination) {
  const blocks = Math.abs(destination - 42)
  return blocks
}

function distanceFromHqInFeet(destination) {
  const feet = distanceFromHqInBlocks(destination) * 264
  return feet
}

function distanceTravelledInFeet(start, destination) {
  const feet = Math.abs(destination - start) * 264
  return feet
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination)
  if (feet <= 400) {
    return 0
  } else if (feet > 400 && feet < 2000) {
    return feet * 0.02
  } else if (feet >= 2000 && feet < 2500) {
    return 25
  }  else {
    return "cannot travel that far"
  }
}



// Math.ceil(feet/264)
