function distanceFromHqInBlocks (num) {
  if (num < 42) {
    return 42 - num;
  } else {return num - 42;}
}

function distanceFromHqInFeet (number) {
  return distanceFromHqInBlocks (number) * 264;
}

function distanceTravelledInFeet (start_num, end_num) {
  if (start_num < end_num) {
    return (end_num - start_num) * 264;
  } else { return (start_num - end_num) * 264;}
}

function calculatesFarePrice (start_num, end_num) {
  var distance = distanceTravelledInFeet (start_num, end_num);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
