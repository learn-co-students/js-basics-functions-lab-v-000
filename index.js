// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  let distance = '';
  if (blocks > 42) {
    distance = blocks - 42;
  }
  else {
    distance = 42 - blocks;
  }
  return distance;
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, end ) {
  let totalDistance = '';
  if (start > end) {
    totalDistance = (start - end) * 264;
  }
  else {
    totalDistance = (end - start) * 264;
  }
  return totalDistance;
}

function calculatesFarePrice(start, end) {
  let totalPrice = 0;
  let distance = distanceTravelledInFeet(start, end)
  if (distance < 400) {
    return totalPrice;
  }
  else if (distance > 400 && distance < 2000) {
     totalPrice =  .02 * (distance - 400);
   } 
  else if (distance > 2000 && distance < 2500) {
     totalPrice = 25;
   } 
  else {
    return "cannot travel that far";
   }
   return totalPrice;
}



