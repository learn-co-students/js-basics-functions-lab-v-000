// Code your solution in this file!
 function distanceFromHqInBlocks(value){
   return Math.abs(value - 42);
 }

 function distanceFromHqInFeet(value){
   return distanceFromHqInBlocks(value) * 264;
 }

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end)-400
  if (distance > 0 && distance < 1600) {
    return distance * .02
  } else if (distance > 1600 && distance < 2100){
    return 25
  }else if (distance > 2100) {
    return 'cannot travel that far'
  }else {
    return 0
  }
}
