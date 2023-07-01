// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceTravelledInFeet(begin, end) {
  return Math.abs((begin-end))*264;
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block)*264;
}

function calculatesFarePrice(begin, end) {
    let distance = distanceTravelledInFeet(begin, end);
    if (distance <= 400) {
      return 0;
    } else if (distance < 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }

}
