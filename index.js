// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet (start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice (start, end) {
  const distance = distanceTravelledInFeet(start, end);
      if (distance < 400) {
        return 0;
      } else if (400 < distance && distance < 2000) {
        return distance * .02;
      } else if (2000 < distance && distance < 2500) {
        return 25;
      } else if (distance > 2500) {
        return 'cannot travel that far';
      }
    }
