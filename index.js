// Code your solution in this file!
//distance is in feet
//each block is 264 feet long
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42)
}

function distanceFromHqInFeet(street) {
  return Math.abs((street -42) * 264)
}

function distanceTravelledInFeet(streetStart, streetEnd) {
  return Math.abs((streetStart - streetEnd) * 264)
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0
  }
  else if (distanceTravelledInFeet(start, destination) <= 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * .02
  }
  else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
    return 25
  }
  else {
    return 'cannot travel that far';
  }
}
