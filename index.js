// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet (block) {
  const distanceInBlocks = distanceFromHqInBlocks(block);
  return distanceInBlocks * 264;
}

function distanceTravelledInFeet(beginning, end) {
  if (end > beginning) {
    return (end-beginning)*264;
  } else {
    return (beginning-end)*264;
  }
}

function calculatesFarePrice(beginning, end) {
  const feet = distanceTravelledInFeet (beginning, end);
  if (feet < 400) {
    return 0;
  } else if (400 <= feet && feet <= 2000) {
    return feet * .02;
  } else if (2000 < feet && feet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
