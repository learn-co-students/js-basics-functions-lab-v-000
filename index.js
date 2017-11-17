// Code your solution in this file!
function distanceFromHqInBlocks(block_number) {
  return Math.abs(block_number - 42)
}

function distanceFromHqInFeet(block_number){
  return distanceFromHqInBlocks(block_number) * 264
  distanceFromHqInBlocks(block_number)
}

function distanceTravelledInFeet(first, second) {
  return Math.abs((second - first)) * 264
}

function calculatesFarePrice(start, destination) {
  const fare = distanceTravelledInFeet(start,destination)
  if (fare <=399) {
    return 0
  } else if (400 <= fare && fare <= 2000){
    return fare * 0.02
  } else if (2000 <= fare && fare <= 2500){
    return 25
  } else{
    return 'cannot travel that far'}
}
