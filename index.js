// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return blocks = Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue){
  let blocks = distanceFromHqInBlocks(someValue);
  return feet = blocks * 264;
}

function distanceTravelledInFeet(blockOne, blockTwo){
  return distance = Math.abs(blockOne - blockTwo) * 264;
}

function calculatesFarePrice(start, destination){
  let feet = distanceTravelledInFeet(start, destination);

  if (feet < 400){
    return 0;
  } else if (feet >= 400 && feet <= 2000){
    return (feet - 400) * .02;
  } else if (feet > 2000 && feet < 2500){
    return 25;
  } else
    return 'cannot travel that far';
}
