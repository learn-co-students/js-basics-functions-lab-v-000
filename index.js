// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber> 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber ;
  }
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}


function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) *264;
  } else {
    return (start- destination) *264;
  }
}

function calculatesFarePrice(start,destination){
  const totalDistance = distanceTravelledInFeet(start,destination);

  if (totalDistance <= 400) {
    return 0;
  } else if (totalDistance> 400 && totalDistance<= 2000) {
      return totalDistance*.02;
    } else if (totalDistance >= 2000 && totalDistance<2500) {
      return 25
    } else  {
      return 'cannot travel that far';
    }




}
