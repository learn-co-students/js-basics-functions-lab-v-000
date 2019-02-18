// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let result;
  result = Math.abs(street - 42);
  return result;
}

function distanceFromHqInFeet(street) {
  let result;
  result = distanceFromHqInBlocks(street) * 264;
  return result;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  let result;
  result = Math.abs(startingBlock - endingBlock) * 264;
  return result;
}

function calculatesFarePrice(start, destination) {
  let price = 0;
  let distance = distanceTravelledInFeet(start, destination);
  switch(true) {
    case (distance > 2500):
      return 'cannot travel that far';
      break;
      break;
    case (distance > 400 && distance < 2000):
      price += ((distance - 400) * .02);
      break;
    case (distance > 2000):
      price += 25;
      break;
  }
  return price;
}
