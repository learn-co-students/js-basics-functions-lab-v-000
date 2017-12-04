// Code your solution in this file!

function distanceFromHqInBlocks(street){
  if (street >= 42) {
    blocks = street - 42;
  }else{
    blocks = 42 - street;
  }
  return blocks;
}

function distanceFromHqInFeet(street){
  blocks = distanceFromHqInBlocks(street);
  //calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
  distance = blocks * 264;
  return distance;
}

function distanceTravelledInFeet(startStreet, endStreet){
  if (startStreet <= endStreet){
    distance = (endStreet - startStreet) * 264;
  }else {
    distance = (startStreet - endStreet) * 264;
  }
  return distance;

}

function calculatesFarePrice(start, destination){
  distance = distanceTravelledInFeet(start, destination);

  if (distance > 2500){
    cost = 'cannot travel that far';
  } else if (distance >2000 && distance <= 2500){
    cost = 25;
  }else if (distance >400 && distance <=2000){
    cost = 0.02* distance;
  }else {
    cost = 0
  }

  return cost;
}
