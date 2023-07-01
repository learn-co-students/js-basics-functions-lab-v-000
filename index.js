// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  return Math.abs(distance - 42)
}

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);
  switch(true) {
     case distance < 400:
       return 0
     case distance > 400 && distance < 2000:
       return .02 * distance
     case distance > 2000 && distance < 2500:
       return 25
     case distance > 2500:
       return "cannot travel that far"
     }
}
