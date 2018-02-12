// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hq);
};

function distanceFromHqInFeet(block) {
  return 264 * distanceFromHqInBlocks(block);
};

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;

  // diff = Math.abs(start - destination)
  // return diff*264
};


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
      return 0;
  } else if (distance > 400 && distance <= 2000) {
      return 0.02 * distance;
  } else if (distance > 2000 && distance <= 2500) {
      return 25;
  } else {
      return "cannot travel that far";
  };
};
