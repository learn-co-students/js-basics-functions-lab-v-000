function distanceFromHqInBlocks(destination) {
  if (destination > 42) {
    return (destination - 42)
  } else {
    return (42 - destination)
  }
}

function distanceFromHqInFeet(destination) {
  return (distanceFromHqInBlocks(destination) * 264);
}

function distanceTravelledInFeet(a, b) {
  const distance = (a >= b) ? a - b : b - a;
  return distance * 264;
}

function calculatesFarePrice(start, finish){
  const distance = distanceTravelledInFeet(start, finish);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return distance * 0.02;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000 & distance < 2500) {
    return 25;
  }
}

//first 400 free
//400 - 2000 2 cents per foot
//2000 - 2500 = flat fare
//over 2500 feet 'cannot rtavel that far'
