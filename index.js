// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  const headquarters = 42
  if (destination <= headquarters){
    return headquarters - destination
  }
  else {
    return destination - headquarters
  }
}

function distanceFromHqInFeet(distance) {
  const blocks = distanceFromHqInBlocks(distance)
  return blocks * 264
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264
  }
  else
  {
    return (end - start) * 264
  }
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination)
  if (feet < 400) {
    return 0
  }
  else if (feet > 400 && feet < 2000){
    return feet * .02
  }
  else if (feet > 2000 && feet < 2500){
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
