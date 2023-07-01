const hQ = 42

let distanceFromHqInBlocks = (block) => {
  if(block > hQ) {
    return block - hQ;
  }
  if(block < hQ) {
    return hQ - block;
  }
}

let distanceFromHqInFeet = (block) => {
  return distanceFromHqInBlocks(block) * 264;
}

let distanceTravelledInFeet = (startingBlock, endingBlock) => {
  if(startingBlock > endingBlock){
     return (startingBlock - endingBlock) * 264;
  }
  if(endingBlock > startingBlock){
    return (endingBlock - startingBlock) * 264;
  }
}

let calculatesFarePrice = (startingBlock, endingBlock) => {

  let distance = distanceTravelledInFeet(startingBlock, endingBlock)

  if(distance <= 400) {
    return 0;
  } else if(distance > 400 && distance <= 2000) {
    return distance * .02;
  } else if(distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return `cannot travel that far`
  }
}
