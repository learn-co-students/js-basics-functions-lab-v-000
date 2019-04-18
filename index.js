// Code your solution in this file!
function distanceFromHqInBlocks(x) {
  const headquarters = 42 - x
  return Math.abs(headquarters)
}


function distanceFromHqInFeet(x) {
  return distanceFromHqInBlocks(x) * 264
}


function distanceTravelledInFeet(x, y) {
  return (Math.abs(x-y))* 264
}



function calculatesFarePrice(start, destination) {
  let fare = distanceTravelledInFeet(start, destination)

  if (fare < 400) {
    return 0
  }
  else if (fare > 400 && fare < 2000) {
    return (fare - 400) * 0.02
  }
  else if (fare > 2000 && fare < 2500) {
    return 25
  }
  else
  return 'cannot travel that far'
}
