// Code your solution in this file!
//They ask you to write a function that takes in a pickup location for a passenger, and returns the number of blocks from it's headquarters on 42nd street
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
  return Math.abs(distanceFromHqInBlocks(blocks) * 264);
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(distanceFromHqInFeet(end) - distanceFromHqInFeet(start));
}

function calculatesFarePrice(start, end) {
    if (distanceTravelledInFeet(start, end) < 400) {
      return 0;
  }  else if (distanceTravelledInFeet(start, end) < 2000) {
      return (distanceTravelledInFeet(start, end) - 400) * .02; //first 400 are free
  } else if (distanceTravelledInFeet(start, end) < 2500) {
      return 25; //flat fee
  } else {
      return 'cannot travel that far';
  }
}
