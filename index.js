// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(beg, end) {
  return Math.abs(beg - end) * 264;
}

function calculatesFarePrice(beg, end) {
  let distance = verticalFeet(beg, end);
  switch (true) {
    case (distance < 265): 
      return 0;
    case (distance > 400 && distance < 2000):
      return 0.02 * distance;
    case (distance > 2000 && distance < 2500):
      return 25;
    case (distance > 2500):
      return 'cannot travel that far'
  }
}

function verticalFeet(beg, end) {
  return Math.abs(beg - end) * 264;
}