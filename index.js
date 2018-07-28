const hq = 42 //street
const isBelowDestination = function(pickup, destination=hq) { return pickup < destination ? true : false }
const blocksToFeet = function(blocks) { return blocks * 264 }

function diffInBlocks(pickup, destination=hq) {
  return isBelowDestination(pickup, destination) ? destination - pickup : pickup - destination
}
const distanceFromHqInBlocks = diffInBlocks

function distanceFromHqInFeet(pickup) {
  return blocksToFeet(distanceFromHqInBlocks(pickup))
}

function distanceTravelledInFeet(pickup, destination) {
  return blocksToFeet(diffInBlocks(pickup, destination))  
}

function calculatesFarePrice(pickup, destination) {
  const distance = distanceTravelledInFeet(pickup, destination)
  
  switch (true) {
    case distance <= 400:
      return 0
    case distance > 400 && distance <= 2000:
      return 0.02 * (distance - 400)
    case distance > 2000 && distance < 2500:
      return 25
    default: return 'cannot travel that far'
  }
}