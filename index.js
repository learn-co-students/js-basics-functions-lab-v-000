// Code your solution in this file!
function distanceFromHqInBlocks(bl) {
  return Math.abs(bl-42);
};

function distanceFromHqInFeet(bl) {
  return distanceFromHqInBlocks(bl) * 264;
};

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
};

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  switch (true) {
    case distance > 2500:
      return "cannot travel that far";
      break;
    case distance > 2000:
      return 25;
      break;
    case distance > 400:
      return (distance - 400) * .02;
      break;
    case distance < 400:
      return 0;
      break;
  }
}
