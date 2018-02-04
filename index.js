// Code your solution in this file!
function calculateVertical(start, destination) {
  let vertical_dist;
  vertical_dist = (start - destination) * 264;
  return vertical_dist;
}

function distanceFromHqInBlocks(start) {
  let blocks;
  blocks = 42 - start;
  if (blocks < 1) {
    blocks = blocks * -1;
    return blocks;
  } else {
    return blocks;
  }
}

function distanceFromHqInFeet(num) {
  let blocks;
  blocks = distanceFromHqInBlocks(num);
  let feet;
  feet = blocks * 264;
  return feet;
}

function distanceTravelledInFeet(num1, num2) {
  feet = calculateVertical(num1, num2);
  if (feet < 1) {
    feet = feet * -1;
    return feet;
  } else {
    return feet;
  }
}

function calculatesFarePrice(start, destination) {
  dist_feet = distanceTravelledInFeet(start, destination);
  if (dist_feet <= 400) {
    return 0;
  } else if (dist_feet > 400 && dist_feet < 2000) {
    fare = dist_feet * (0.02);
    return fare;
  } else if (dist_feet > 2000 && dist_feet < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
