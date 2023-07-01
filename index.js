// Code your solution in this file!
function distanceFromHqInBlocks (location) {
    if (location >= 42) {
      return (location - 42);
    } else if (location < 42) {
      return (42 - location);
    }
  //returns the number of blocks given a value
}

function distanceFromHqInFeet (location) {
  const distance = distanceFromHqInBlocks (location);
  return distance * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}
function distanceTravelledInFeet (start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else if (destination > start) {
    return (destination - start) * 264;
  } else {
    return 0;
  }
}
// : Calculates the number of feet a passenger travels given a starting block and an ending block - it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet (start, destination);
  const discount = (distance - 400);
  if (discount < 0) {
    return 0;
  } else if (discount > 0) {
    if (distance <= 2000) {
      return discount * 0.02;
    } else if (distance > 2500) {
      return 'cannot travel that far';
    } else {
      return 25;
    }
  }
}
// calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
