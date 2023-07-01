// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264
}

function calculatesFarePrice(start, destination) {
  let distanceTravelled = distanceTravelledInFeet(start, destination)
  switch (true) {
    case (distanceTravelled < 400):
      return 0
    case (distanceTravelled >= 400 && distanceTravelled < 2000):
      return (distanceTravelled - 400) * 0.02
    case (distanceTravelled >= 2000 && distanceTravelled < 2500):
      return 25
    default:
      return 'cannot travel that far'
  }
}
