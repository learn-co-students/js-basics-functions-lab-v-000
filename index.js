function distanceFromHqInBlocks(begin) {
  return Math.abs(begin - 42);
}

function distanceFromHqInFeet(begin) {
  return Math.abs((begin - 42)*264);
}

function distanceTravelledInFeet(begin, end) {
  return Math.abs((begin - end)*264);
}

function calculatesFarePrice(begin, end) {
  let feet = distanceTravelledInFeet(begin, end);
  if (feet <= 400) {
    return 0;
  }
  else if (feet > 400 && feet <= 2000) {
    let amount = feet - 400;
    return (amount * 0.02); 
  }
  else if (feet > 2000 && feet < 2500) {
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}