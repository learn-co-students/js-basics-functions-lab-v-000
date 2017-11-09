// Code your solution in this file!
function distanceFromHqInBlocks(location){
  const headquarters = 42;
  const numBlocksAbove = location - headquarters;
  const numBlocksBelow = headquarters - location;
  if(location >= 42){
  return numBlocksAbove;
} else if (location < 42) {
  return numBlocksBelow;
  }
}

function distanceFromHqInFeet(location){
  const block = 264;
  if(location >= 42){
  return block * distanceFromHqInBlocks(location);
} else if (location < 42) {
  return block * distanceFromHqInBlocks(location);
  }
}

function distanceTravelledInFeet(start, destination){
  const block = 264;
  const numFeetAbove = ((destination - start) * block);
  const numFeetBelow = ((start - destination) * block);
  if(start >= 42){
  return numFeetAbove;
  } else if (start < 42) {
  return numFeetBelow;
  }
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  const price = .02;
  const block = 264;
  if(distance < 400) {
  return 0;
  } else if (distance < 2000) {
   return price * distanceTravelledInFeet(start, destination);
  } else if (distance < 2500) {
   return 25;
  } else {
    return 'cannot travel that far'}
}
