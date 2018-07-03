// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
let distance_blocks;

if(blocks > 42)
  distance_blocks = blocks - 42
else
  distance_blocks = 42 - blocks

  return distance_blocks;
}

function distanceFromHqInFeet(feet){
let distance_feet;

  distance_feet = distanceFromHqInBlocks(feet) * 264

return distance_feet;
}

function distanceTravelledInFeet(start, end){
  let distance_feet;
  if(end > start)
    distance_feet = (end - start) * 264
  else
    distance_feet = (start - end) * 264
  return distance_feet;
}


function calculatesFarePrice(start, destination){
  let total_fare;
  let distance;

  if(destination > start)
   distance = ((destination - start) * 264);
  else
   distance = ((start - destination) * 264);

   if(distance > 2500)
    total_fare = 'cannot travel that far';
   else if(distance > 2000)
      total_fare = 25
   else if(distance < 400)
      total_fare = 0;
  else if(400 < distance < 2000)
      total_fare = (distance - 400) * 0.02

  return total_fare;
}
