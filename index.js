// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance <= 34) {
    return 42 - distance
  }
  else {
   return distance - 42;
   }
}

function distanceFromHqInFeet (blockNum) {
  return distanceFromHqInBlocks(blockNum) * 264;
}


function distanceTravelledInFeet(a, b) {
  if (a < b) {
    return (b - a) * 264;
  }
  else {
    return (a-b) * 264;
  }
}

function calculatesFarePrice (start, destination) {
   const distance = distanceTravelledInFeet(start, destination)
   if (distance < 400) {
     return 0;
   } else if (distance >= 400 && distance <= 2000) {
     return distance * .02;
   } else if (distance > 2000 && distance < 2500) {
     return 25;
   } else {
     return 'cannot travel that far';
   }
 }
