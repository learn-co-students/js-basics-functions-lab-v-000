// Code your solution in this file!

function distanceFromHqInBlocks(block){
  if (42 > block) {
    return 42 - block;
  } else {
    return block - 42
  }
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264
  } else {
    return (end - start) * 264
  }
}

function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) < 401) {
    return 0;
  } else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2001) {
    return (distanceTravelledInFeet(start, end) - 400) * .02;
  } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) < 2501) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
