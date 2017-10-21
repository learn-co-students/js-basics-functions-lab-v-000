// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
   return Math.ceil( Math.abs(42 - pickup) )
}

function distanceFromHqInFeet(pickup){
  return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.ceil( Math.abs( start - end ) * 264 )
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)
  if (distance < 400) {
    return 0
  } else if (distance <= 2000) {
    return distance * 0.02
  } else if (distance <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }

}
