// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  const headquarters = 42

  if (distance > headquarters) {
    return distance - headquarters;
  } else {
    return headquarters -  distance;
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264 ;
}

function distanceTravelledInFeet(pickUp, currentBlack ) {
  if (pickUp > currentBlack) {
    return (pickUp - currentBlack) * 264 ;
  } else {
    return (currentBlack - pickUp) * 264 ;
  }
}

function calculatesFarePrice(pickUp, destination) {
  const theDistance = distanceTravelledInFeet(pickUp, destination );
  let price
  if (theDistance < 400) {
    return price = 0;
  } else if (theDistance > 400 && theDistance  < 2000 ){
    let deduction = theDistance - 400
     return price = .02 * deduction ;   // return price = (deduction * 2 ) / 100;
  } else if (theDistance  > 2000 && theDistance  < 2500 ) {
    return price = 25;
  } else {
    return 'cannot travel that far';
  }
}
