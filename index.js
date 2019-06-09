// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(42-street);
}

function distanceFromHqInFeet(street) {
  return 264 * distanceFromHqInBlocks(street)
}

function distanceTravelledInFeet(start, end)
{
  return 264 * Math.abs(start - end);
}

function calculatesFarePrice(start, end) {
  let distInFeet = distanceTravelledInFeet(start, end);
  switch (true) {
    case (distInFeet <= 400):
      return 0;
      break;
    case (distInFeet <= 2000):
      return 0.02 * (distInFeet - 400);
      break;
    case (distInFeet <= 2500):
      return 25;
      break;
    default:
      return 'cannot travel that far';

  }
}
