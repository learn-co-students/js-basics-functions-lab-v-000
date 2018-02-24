function distanceFromHqInBlocks(end){
  return Math.abs(end - 42);
}

function distanceFromHqInFeet(end){
  return distanceFromHqInBlocks(end) * 264;
};

function distanceTravelledInFeet(begin, end){
  return Math.abs(begin - end) * 264;
};

function calculatesFarePrice(begin, end){
  var feet = distanceTravelledInFeet(begin, end);
  if (feet <= 400) {
    return 0;
  } else if(feet <= 2000) {
    return feet * 0.02;
  } else if(feet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
};
