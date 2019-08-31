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


function distanceTravelledInFeet(blockEnded,blockStarted){
  let blocks;
  let distance;
  if blockStarted < blockEnded {
    blocks = blockStarted - blockEnded
    distance = blocks * 264;
  }
    else {
      blocks = blockStarted - blockEnded
      distance = blocks * 264;
    }
return distance
}

function calculatesFarePrice(someValue){

}
