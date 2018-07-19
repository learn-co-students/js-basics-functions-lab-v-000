// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}
//
function calculatesFarePrice(start, end) {
    let feet = distanceTravelledInFeet(start, end);
    if (feet > 2500) {
      return 'cannot travel that far';
    } else if (feet > 2000 && feet <= 2500) {
      return 25;
    } else if (feet > 400 && feet <=2000) {
      return (feet - 400)*0.02;
    } else if (feet <= 400) {
      return 0;
    }
}



// 1block = 264ft


// calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer.
// The first four hundred feet are free.
// For a distance between 400 and 2000 feet, the price is
//   2 cents per foot (not including 400, which are free!).
//
// Then Scuber charges a flat fare for a distance
//   over 2000 feet and under 2500 feet.
//
// Finally, Scuber does not allow any rides over 2500 feet
//   - the function returns 'cannot travel that far' if a ride
//   over 2500 feet is requested.
