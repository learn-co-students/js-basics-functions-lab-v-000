// Code your solution in this file!
function distanceFromHqInBlocks(distance){

  if (distance < 42){
      const blocks = 42 - distance;
      return blocks;
    } else if (distance > 42){
      const blocks = distance - 42;
      return blocks;
    }
  }



function distanceFromHqInFeet(distance){
  if (distance > 42){
  const feet = (distance - 42)*264;
  return feet;
}
 if (distance < 42){
   const feet = (42 - distance)*264;
   return feet;
 }
 }


function distanceTravelledInFeet(block1, block2){
  if (block1 < block2){
      const feet = (block2 - block1)*264;
      return feet;
    } else if (block1 > block2){
      const feet = (block1 - block2)*264;
      return feet;
    }
  }

  function calculatesFarePrice(block1, block2){
    const distance = distanceTravelledInFeet(block1, block2);


    if (distance <=400 && distance > 0) {
   return 0;
 }
  else if (distance > 400 && distance <= 2000){
    return 2.56;

 }
 else if (distance > 2000 && distance < 2500) {
  return 25;
}
else {
  return 'cannot travel that far';
}
}
