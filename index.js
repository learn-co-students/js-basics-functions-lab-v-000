// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  if (distance > 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }

}

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet (start, end) {
  if (end > start) {
    let distance_travelled = end - start;
    return distance_travelled * 264;
  } else {
    let distance_travelled = start - end;
    return distance_travelled * 264;
  }
}

function calculatesFarePrice (start, destination) {
  const calculate_distance =  distanceTravelledInFeet(start, destination);

  if (calculate_distance <= 400) {
    return 0;
  } else if (calculate_distance > 400 && calculate_distance < 2000) {
    return (calculate_distance / 100) * 2;
  } else if (calculate_distance >= 2000 && calculate_distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }

}
