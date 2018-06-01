// Code your solution in this file!
function distanceFromHqInBlocks(value){
  let distance;
  if (value > 42){
    distance = (value - 42);
  } else if (value < 42){
    distance = (42 - value);
  }
  return distance;
}

function distanceFromHqInFeet(value){
  let feet;
  feet = distanceFromHqInBlocks(value) * 264;
  return feet;
}

function distanceTravelledInFeet(start, destination){
  let feet;
  if (start > destination){
    feet = (start - destination) * 264;
  } else if (start < destination){
    feet = (destination - start) * 264;
  }
  return feet;
}

function calculatesFarePrice(start, destination){
  let fare, distance;
  distance = distanceTravelledInFeet(start, destination);

  switch(true){
    case distance <= 400:
    fare = 0;
    break;
    case distance >= 400 && distance <= 2000:
    fare = (distance - 400)  * .02;
    break;
    case distance > 2000 && distance < 2500:
    fare = 25;
    break;
    case distance >= 2500:
    fare = 'cannot travel that far';
    break;
  }
  return fare;
}
