// Code your solution in this file!
const HQ_ST = 42

function distanceInBlocks(st1, st2) {
  return Math.abs(st1 - st2);
}

function distanceFromHqInBlocks(st) {
  return distanceInBlocks(st, HQ_ST);
}

function distanceFromHqInFeet(st) {
  return distanceTravelledInFeet(HQ_ST, st)
}

function distanceTravelledInFeet(st1, st2) {
  return distanceInBlocks(st1, st2) * 264;
}

function calculatesFarePrice(st1, st2) {
  const distance = distanceTravelledInFeet(st1, st2);

  switch (true) {
    case (distance > 2500):
      return 'cannot travel that far';
    case (distance > 2000):
      return 25;
    case (distance > 400):
      return ( (distance - 400) * 0.02 );
    default:
      return 0;
  }
}
