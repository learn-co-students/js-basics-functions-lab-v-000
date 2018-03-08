// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(starting, ending) {
  return Math.abs(starting - ending) * 264;
}

function calculatesFarePrice(starting, ending) {
  let price = 0;
  let distance = distanceTravelledInFeet(starting, ending);
  if (distance <= 400) {
    return price
  }
  else if (distance <= 2000) {
    price += distance * 0.02
    return price
  }
  else if (distance <= 2500) {
    price += 25
    return price
  }
  else {
    return 'cannot travel that far'
  }
}
