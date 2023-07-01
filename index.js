// Code your solution in this file!
function distanceFromHqInBlocks(x) {
  return Math.abs(42 - x)
};

function distanceFromHqInFeet(x) {
  return distanceFromHqInBlocks(x) * 264;
};

function distanceTravelledInFeet(x, y) {
  return Math.abs((x - y) * 264)
};

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination);

  switch(true) {
    case (distance <= 400):
      return 0;
    case (distance > 400 && distance < 2000):
      return distance * .02;
    case (distance > 2000 && distance < 2500):
      return 25;
    case (distance > 2500):
      return 'cannot travel that far';
    }
};
