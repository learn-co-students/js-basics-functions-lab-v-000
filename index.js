function distanceFromHqInBlocks(block) {
  const hq = 42;
  return Math.abs(hq - block);
}

function distanceFromHqInFeet(block) {
  let blockDistance = distanceFromHqInBlocks(block);
  return (blockDistance * 264)
}

function distanceTravelledInFeet(startBlock, endBlock) {
  let blocksTravelled = Math.abs(startBlock - endBlock);
  return (blocksTravelled * 264);
}

function calculatesFarePrice(startBlock, endBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  const chargedDistance = (distanceInFeet - 400);
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (chargedDistance * .02);
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}