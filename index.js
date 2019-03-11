function distanceFromHqInBlocks(block){
  let result;
  (block >= 42) ? (result = block - 42) : (result = 42 - block);
  return result
}

function distanceFromHqInFeet(block){
  let result = distanceFromHqInBlocks(block) * 264;
  return result
}

function distanceTravelledInFeet(block1, block2){
  let result = (block1 >= block2) ? (block1 - block2) * 264 : (block2 - block1) * 264;
  return result
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  let result;
  if (distance <= 400){
    result = 0;
  }else if ((distance < 2000) && (distance > 400)){
    result = (distance - 400) * 0.02;
  }else if ((distance > 2000) && (distance < 2500)){
    result = 25;
  }else if (distance >= 2500){
    result = "cannot travel that far";
  }
  return result
}
