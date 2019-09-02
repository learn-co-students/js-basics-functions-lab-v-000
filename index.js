// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
let distance;
if (someValue >= 42){
distance = someValue - 42}
else{
distance = someValue - 26
}
return distance
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}


function distanceTravelledInFeet(blockStarted,blockEnded){
  let blocks;
  let distance;

  if (blockEnded < blockStarted) {
    blocks = blockStarted - blockEnded
    distance = blocks * 264;
  } else {
    blocks = blockEnded - blockStarted
    distance = blocks * 264;
  }
  return distance
}


function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
  let price;

  if (feet >= 1 && feet <= 400) {
    return price = 0;
  } else if (feet >= 400 && feet <= 2000) {
     price = (feet - 400) * 0.02;
     return price;
  } else if (feet >= 2000 && feet <= 2500) {
    return price = 25;
  } else if (feet > 2500) {
    return 'cannot travel that far';
  }
}
