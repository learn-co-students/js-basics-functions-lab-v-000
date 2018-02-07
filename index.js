// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  return Math.abs(42 - distance);
}

function distanceFromHqInFeet(distance) {
  const dis = distanceFromHqInBlocks(distance);
  return dis * 264;
}

function distanceTravelledInFeet(start, end) {
  const distance = Math.abs(start - end);
  return distance * 264;
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);

  if (distance > 2500) {
    return "cannot travel that far";
  }
    else if (distance > 2000) {
      return 25;
    }
      else if (distance > 400) {
        return distance * 2 *.01;
      }
        else {
          return 0;
        }
}


