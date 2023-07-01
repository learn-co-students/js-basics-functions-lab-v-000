// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  const hq = 42;
  if (block >= hq) {
    return block - hq;
  } else {
    return hq - block
  }
}

function distanceFromHqInFeet(block) {
  let totalBlocks = distanceFromHqInBlocks(block)
  return totalBlocks * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start >= end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const chargePerFoot = .02;
  const traveledDistance = distanceTravelledInFeet(start, destination);
  if (traveledDistance <= 400) {
    return 0;
  } else if (traveledDistance > 400 && traveledDistance <= 2000) {
    return  (traveledDistance - 400) * chargePerFoot;
  } else if (traveledDistance > 2000 && traveledDistance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
