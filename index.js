// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
}

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks)*264;
  }

function distanceTravelledInFeet(start, end){
  if (end > start){
    return (end-start)*264;
  } else {
    return (start-end)*264;
  }
}

function calculatesFarePrice(start, end){
  let distance = distanceTravelledInFeet(start, end)
  if (distance <= 400) {
     return 0;
   } else if (distance > 400 && distance <= 2000) {
     return .02 * (distance-400);
   } else if (distance > 2000 && distance < 2500) {
     return 25;
   } else {
     return 'cannot travel that far';
   }
 }
