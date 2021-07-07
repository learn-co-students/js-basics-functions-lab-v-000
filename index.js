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

function distanceTravelledInFeet(start, end) {
  if (end > start)   {
    return (end - start) * 264
  } else {
    return (start - end )* 264;
  }

}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000){
    return distance * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }

}
