function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
 }

 function distanceTravelledInFeet(block1, block2) {
   if (block1 >= block2) {
     return (block1 - block2) * 264;
   } else {
     return (block2 - block1) * 264;
   }
 }

 function calculatesFarePrice(start, destination) {
   const distance = distanceTravelledInFeet(start, destination);

   if (distance >= 2500) {
     return 'cannot travel that far';
   } else {
     if (distance <= 400) {
       return 0;
     } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
     } else if (distance > 2000) {
       return 25;
     }
   }
 }
