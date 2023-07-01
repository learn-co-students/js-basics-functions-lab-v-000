// Code your solution in this file!

function distanceFromHqInBlocks (numberedStreet) {
  if  (numberedStreet > 42) {  
    return numberedStreet - 42 
  } 
  if (numberedStreet < 42){  
    return 42 - numberedStreet }
}

 function distanceFromHqInFeet (numberedStreet){
   return distanceFromHqInBlocks(numberedStreet) * 264;
}

function distanceTravelledInFeet (startBlock, endBlock){
    if (startBlock < endBlock) {
    return (endBlock - startBlock) * 264;
    } else {
    return (startBlock - endBlock) * 264;
    }
}

function calculatesFarePrice (startBlock, endBlock){
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  if (distance <= 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
    return .02 * ( distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}


