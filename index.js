function distanceFromHqInBlocks (location) {
  if (location >= 42) {
  return location - 42;
  } else {
    return Math.abs(location - 42);
  }
}

function distanceFromHqInFeet (location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet (start_block, end_block) {
  return calculateVertical(start_block, end_block) * 264;
}

function calculateVertical (start_block, end_block) {
  if (end_block >= 42) {
    return end_block - start_block
  } else {
    return Math.abs(end_block - start_block);
  }
}


function calculatesFarePrice (start, destination) {
  distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
      return "cannot travel that far";
  } else if (distance > 2000) {
    const price = 25;
    return price;
  } else if (distance > 400 && distance < 2000) {
    const price = distance * 0.02;
    return price;
  } else {
    const price = 0;
    return price;
  }
}
