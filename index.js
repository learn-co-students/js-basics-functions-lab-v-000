// Code your solution in this file!
function distanceFromHqInBlocks(currentBlock) {
  let distance = Math.abs(42 - currentBlock);
  return distance;
}

function distanceFromHqInFeet(currentBlock) {
 let distance = distanceFromHqInBlocks(currentBlock) * 264;
 return distance;
}

function distanceTravelledInFeet(start, current) {
  let numBlocks = Math.abs(start - current);
  let distance = numBlocks * 264;
  return distance
}

function calculatesFarePrice(start, current) {
  let chargableDist = distanceTravelledInFeet(start, current)
  if (chargableDist > 2500){
    return 'cannot travel that far';
  } else if (chargableDist <= 400) {
    return 0;
  } else if (chargableDist > 400 && chargableDist <= 2000){
    let totalCost = (chargableDist - 400) * .02
    return totalCost;
  } else if (chargableDist > 2000){
    return 25;
  }
}
