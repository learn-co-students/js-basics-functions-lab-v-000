// Code your solution in this file!
function distanceFromHqInBlocks(customers_block) {
  const hqBlock = 42
  let distFromHQ = 0
  if (customers_block > hqBlock)  {
    distFromHQ = customers_block - hqBlock;
  }
  else if (customers_block < hqBlock) {
    distFromHQ = hqBlock - customers_block
  }
  else {
    distFromHQ = 0
  }
  return distFromHQ
}

function distanceFromHqInFeet(customers_block) {
  let blocksFromHQ = distanceFromHqInBlocks(customers_block);
  let ftFromHQ = blocksFromHQ * 264
  return ftFromHQ
}

function distanceTravelledInFeet(start, finish) {
  let blocksTraveled = start - finish
  let ftTraveled = blocksTraveled * 264
  if (ftTraveled < 0) {
    ftTraveled =- ftTraveled
  }
  return ftTraveled
}

function calculatesFarePrice(start, destination) {
  let distanceTraveled = distanceTravelledInFeet(start, destination);
  let farePrice = 0;
  if (distanceTraveled <= 400){
    return farePrice
  }
  else if (distanceTraveled > 400 && distanceTraveled < 2000) {
    farePrice = (distanceTraveled - 400) * 0.02
    return farePrice
  }
  else if (distanceTraveled > 2000 && distanceTraveled <= 2500) {
    farePrice = 25
    return farePrice
  }
  else {
    return 'cannot travel that far'
  }
}
