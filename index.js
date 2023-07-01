// Code your solution in this file!
function distanceFromHqInBlocks(current){
  return Math.abs(current - 42);
}

function distanceFromHqInFeet(current){
  return distanceFromHqInBlocks(current) * 264;
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end){
  var total = distanceTravelledInFeet(start, end );
  if ( total < 400) {
    return 0;
  }else if (total <= 2000){
    return (total - 400) * 0.02;
  }else if (total < 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
