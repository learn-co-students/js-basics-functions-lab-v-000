// Code your solution in this file!
function distanceFromHqInBlocks (st) {
  return Math.abs(st - 42);
}

function distanceFromHqInFeet (st) {
  const blocks = distanceFromHqInBlocks(st);
  return blocks * 264;
}

function distanceTravelledInFeet (start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice (start, destination) {
  const dist = distanceTravelledInFeet (start, destination);

  switch (true) {
    case dist <= 400:
      return 0;
    case dist <= 2000:
      return (dist - 400) * 0.02;
    case dist <= 2500:
      return 25;
    default:
      return 'cannot travel that far';
  }
}