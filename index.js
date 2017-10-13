// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  return Math.abs(destination - 42);
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264;
}

function distanceTravelledInFeet(x, y) {
  return Math.abs(y - x) * 264;
}

function calculatesFarePrice(start, place) {
  let total_feet = distanceTravelledInFeet(start, place);
    if(total_feet < 400)  {
      return 0;
    } else if(total_feet < 2000) {
      return total_feet *.02;
    } else if(total_feet < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
