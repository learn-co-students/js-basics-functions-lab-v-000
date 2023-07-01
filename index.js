const headquarters = 42
const blockInFeet = 264

function distanceFromHqInBlocks(pickupBlock){
  let distance = Math.abs(pickupBlock - headquarters);
  return distance;
}

function distanceFromHqInFeet(pickupBlock){
  let distanceInFeet = distanceFromHqInBlocks(pickupBlock) * blockInFeet;
  return distanceInFeet;
}

function distanceTravelledInFeet(startingBlock, endingBlock){
  let distance = Math.abs(startingBlock - endingBlock) * blockInFeet;
  return distance
}

function calculatesFarePrice(start, destination){
  let farePerFoot = 0.02;
  let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
      return 0;
    } else if (distance > 2500){
      return "cannot travel that far";
    } else if (distance > 2000) {
       return 25;
    } else {
       return distance * farePerFoot;
    }
}
