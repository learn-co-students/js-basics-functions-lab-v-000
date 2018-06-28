// Code your solution in this file!
//the hq is located on 42nd
function distanceFromHqInBlocks (address) {
  return Math.abs(address - 42);
}

//each city block is 264 feet long
function distanceFromHqInFeet (address) {
  return distanceFromHqInBlocks(address) * 264;
}

//takes a starting and ending block and figures out distance in feet
function distanceTravelledInFeet (begin, end) {
  return Math.abs(begin - end) * 264;
}

//uses distanceTravelledInFeet then goes to a switch based on distance travelled to calculate fare
//first four hundred feet are free
//between 400 and 2000, price is 2 cents per foot (not including the free 400)
//distance over 2000 but below 2500 is a flat fare of 25
//distance over 2500 cannot be travelled needs to say: 'cannot travel that far'
function calculatesFarePrice (begin, end) {
  const distance = distanceTravelledInFeet(begin, end);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000 ) {
    return (distance - 400) * 0.02;
  } else if (distance >= 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
