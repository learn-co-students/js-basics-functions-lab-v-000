function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
}
function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}
function distanceTravelledInFeet(beginning, destination) {
  if (beginning > destination) {
    return (beginning - destination) * 264;
  } else {
    return (destination - beginning) * 264;
  }
}
function calculatesFarePrice(beginning, destination) {
  const distance = distanceTravelledInFeet(beginning, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return distance * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
