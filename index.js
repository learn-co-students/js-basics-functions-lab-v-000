// Code your solution in this file!

let HqStreet = 42;

function distanceFromHqInBlocks(blocknumber) {
      if (blocknumber > HqStreet) {
      return  blocknumber - HqStreet;
    }
      else {
      return   HqStreet - blocknumber;
      }
}

let BlockLength = 264;
function distanceFromHqInFeet(blocknumber) {
  return distanceFromHqInBlocks(blocknumber) * BlockLength;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start){
  return (destination - start) * BlockLength;
    }
    else {
      return (start - destination) * BlockLength;
    }
}


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
  }
    else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    }

    else if (2001 < distance && distance < 2500) {
      return 25;
    }

  else {
    return 'cannot travel that far';
  }

}
