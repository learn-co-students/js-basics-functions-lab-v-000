// Code your solution in this file!
function calculateVertical(beginning, destination) {
  return Math.abs((destination - beginning) * 264)
}

function distanceFromHqInBlocks(location) {
  return Math.abs(42 - location)
}

function distanceFromHqInFeet(location) {
  return (distanceFromHqInBlocks(location) * 264)
}

function distanceTravelledInFeet(beginning, destination) {
  return calculateVertical(beginning, destination)
}

function calculatesFarePrice() {

}
