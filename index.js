// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  let result = 42 - value;
  if (Math.sign(result) === -1) {
    return -result;
  }
  return result;
}

function distanceFromHqInFeet(value) {
  let result = distanceFromHqInBlocks(value) * 264;
  return result;
}

function distanceTravelledInFeet(start, stop) {
  let result = (start - stop) * 264;
  if (Math.sign(result) === -1) {
    return -result;
  }
  return result;
}

function calculatesFarePrice(start, stop) {
  let result;
  let feet = distanceTravelledInFeet(start, stop);
  paidDistance = feet - 400;
  if (paidDistance > 2100) {
    return 'cannot travel that far';
  }
  else if (paidDistance >= 1600 && paidDistance <=2100) {
    return 25;
  }
  else if (paidDistance > 0 && paidDistance < 1600) {
    return paidDistance * .02;
  }
  else if (paidDistance <= 0) {
    return 0;
  }
}
