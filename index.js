// Code your solution in this file!
function distanceFromHqInBlocks(n){
  if(n >= 42){
    return n - 42;
  } else {
    return 42 - n;
  }
}

function distanceFromHqInFeet(n){
  return distanceFromHqInBlocks(n)*264;
}

function distanceTravelledInFeet(n1, n2){
  if(n1>=n2){
    return (n1-n2)*264;
  } else {
    return (n2-n1)*264;
  }
}

function calculatesFarePrice(start, destination){
  const bl = distanceTravelledInFeet(start, destination);
  if(bl<=400){
    return 0;
  } else if(400<bl && bl<=2000){
    return bl*0.02;
  } else if(2000<bl && bl<=2500){
    return 25;
  } else if(bl>2500) {
    return 'cannot travel that far';
  }
}
