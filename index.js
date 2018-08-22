// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  let distance;
  distance = Math.abs(block - 42)
  return distance
}

function distanceFromHqInFeet(value) {
  let distance;
  distance = distanceFromHqInBlocks(value) * 264;
  return distance;
}


function distanceTravelledInFeet(start, end) {
  let distance;
  distance = Math.abs((end - start) * 264);
  return distance;
}

function calculatesFarePrice(start, end) {
  let price;
  if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000)
  {price = (distanceTravelledInFeet(start, end) - 400) * 0.02}
  return price
}
