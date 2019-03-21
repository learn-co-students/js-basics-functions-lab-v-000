// Code your solution in this file!


function distanceFromHqInBlocks(block){
  if (block == 42) {
    return 0;
  } else if (block < 42) {
    return 42 - block;
  } else if (block > 42) {
    return block - 42;
  }
}

function distanceFromHqInFeet(block) {
  let numberOfBlocks = distanceFromHqInBlocks(block);
  return numberOfBlocks*264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(end-start)*264;
}

function calculatesFarePrice(start, destination) {
  let numberOfFeet = distanceTravelledInFeet(start, destination);
  if (numberOfFeet < 400) {
    return 0;
  } else if(numberOfFeet > 400 && numberOfFeet < 2000){
    numberOfFeet = numberOfFeet - 400;
    return numberOfFeet * .02;
  } else if(numberOfFeet>2000 && numberOfFeet <= 2500){
    return 25;
  } else if(numberOfFeet > 2500){
    return 'cannot travel that far'
  }


}
