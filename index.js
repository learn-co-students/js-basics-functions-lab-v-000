function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return (distanceFromHqInBlocks(block) * 264);
}

function distanceTravelledInFeet(beg, end) {
  return (Math.abs(beg - end) * 264);
}

function calculatesFarePrice(beg, end) {
  let distance = distanceTravelledInFeet(beg, end);
  switch (true) {
    case distance <= 400:
      return 0;
    case distance > 400 && distance <= 2000:
      return (distance * .02);
    case distance > 2000 && distance <= 2500:
      return 25.00
    case distance > 2500:
      return 'cannot travel that far'
  }
}
