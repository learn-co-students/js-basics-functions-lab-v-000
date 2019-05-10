// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  const hq = 42
  let result
  if (street < hq) {
    result = hq - street;
  } else {
    result = street - hq;
  }
    return result
}

 function distanceFromHqInFeet(street) {
  let distance
  distance = distanceFromHqInBlocks(street) * 264;
  return distance
}

 function distanceTravelledInFeet(start, destination) {
  let distance
  if (start > destination) {
    distance = (start - destination) * 264;
  } else {
    distance = (destination - start) * 264;
  }
  return distance
}

 function calculatesFarePrice(start, destination){
  let fare
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    fare = 0;
  } else if (distance > 400 && distance <= 2000 ){
    fare = (distance - 400) * 0.02;
  } else  if (distance > 2000 && distance < 2500){
    fare = 25;
  } else {
    fare = 'cannot travel that far';
  }
  return fare
}