// Code your solution in this file!
function distanceFromHqInBlocks(blocknum) {
  if (blocknum > 42) {
    return blocknum - 42;
  }else {
    return 42 - blocknum;
  }
}

function distanceFromHqInFeet(blocknum) {
  return  distanceFromHqInBlocks(blocknum) * 264;
}

function distanceTravelledInFeet(start, distination) {
  if (start < distination) {
      return (distination - start ) * 264;
  } else {
    return (start - distination) * 264 ;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0;
  }else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02 ;
  }else if (distance > 2000 && distance <= 2500){
    return 25 ;
  }else {
    return 'cannot travel that far' ;
  }
}
