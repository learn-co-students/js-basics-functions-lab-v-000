// Code your solution in this file!
//takes in pickup location for a passenger
//returns the number of blocks from its headquarters

//this can be used for another function that translates
//the number of blocks from headquarters to the distance in feet

function distanceFromHqInBlocks(location){
  const hq = 42;

  if (location > 42 ) {
    return(location - hq);
  } else {
    return (hq - location);
  }
}


function distanceFromHqInFeet(location){
  let blocks = distanceFromHqInBlocks(location);
  return blocks * 264;
}


function distanceTravelledInFeet(beginning, destination){
  if (beginning > destination) {
    return ((beginning - destination)*264);
  } else {
    return ((destination - beginning)*264);
  }
}


// function calculatesFarePrice(start, destination){
//   if (distanceTravelledInFeet(start, destination) > 2500) {
//     return 'cannot travel that far';
//   } elseif 
// }

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  let fare;
  switch (true) {
    case (distance > 2500):
      fare = 'cannot travel that far';
      break;
    case (distance > 2000):
      fare = 25;
      break;
    case (distance > 400 && distance < 2000):
      fare = (distance - 400) * .02;
      break;
    default: 
      fare = 0;
      break;
  }
  return fare;
  
}

