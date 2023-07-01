// Code your solution in this file!
function distanceFromHqInBlocks(street){
  if (street >= 42) {
    return street-42
  }
  else {
    return 42-street
  }
}

function distanceFromHqInFeet(street){
  let blocks = distanceFromHqInBlocks(street)

  return blocks*264
}

function distanceTravelledInFeet(street1, street2){
  let blocks = Math.abs(street1-street2)

  return blocks*264
}

function calculatesFarePrice(street1, street2){
  let distance = distanceTravelledInFeet(street1, street2);

  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000){
    return (distance-400)*0.02;
  }
  else if (distance > 2000 && distance < 2500){
    return 25;
  }
  else {
    return "cannot travel that far"
  }





}
