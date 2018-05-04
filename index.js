// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end)

  switch (true) {
    case distance < 400:
      return 0;
    case distance >= 400 && distance < 2000:
      return 0.02 * (distance - 400);
    case distance >= 2000 && distance <= 2500:
      return 25.0;
    case distance > 2500:
      return 'cannot travel that far';
  }

}
