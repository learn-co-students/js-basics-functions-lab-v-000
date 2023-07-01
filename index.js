// Code your solution in this file!
function distanceFromHqInBlocks(block){
  const distance = 42 - block
  return Math.abs(distance)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock)*264
}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock)
  let fare
  switch (true) {
    case distance < 400:
    return fare = 0

    case distance > 400 && distance <= 2000:
    return fare = (distance - 400)*.02

    case distance > 2500:
    return fare = 'cannot travel that far'
    break

    case distance > 2000 && distance < 2500:
    return fare = 25
  }
}
