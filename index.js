// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let block;
    if (location > 42) {
        block = location - 42;
    } else {
        block = 42 - location;
    }
return block;
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(startLocation, endLocation) {
    let feet;
    if (startLocation >= endLocation) {
      feet = (startLocation - endLocation) * 264;
    } else {
      feet = (endLocation - startLocation) * 264;
    }
    return feet;
  }

  function calculatesFarePrice(startLocation, endLocation){
    let cost;
    const feet = distanceTravelledInFeet(startLocation, endLocation)
    if (feet <= 400) {
      cost = 0;
    } else if (feet > 400 && feet <= 2000) {
      cost = (feet - 400) * .02;
    } else if (feet > 2000 && feet <= 2500) {
      cost = 25;
    } else if (feet > 2500) {
      cost = 'cannot travel that far';
    }
    return cost;
  }
