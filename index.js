// Code your solution in this file!
function distanceFromHqInBlocks(street){
  let answer;
  if (street >= 42){
    answer = street - 42
  } else {
    answer = 42 - street
  }
  return answer
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(street1, street2){
  return Math.abs(street1 - street2) * 264
}

function calculatesFarePrice(start, destination){
  let price;
  const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
    price = 0
  } else if(distance > 2000 && distance < 2500){
    price = 25
  } else if(distance > 400 && distance < 2000) {
    price = (distance - 400) * .02
  } else {
    price = "cannot travel that far"
  }
  return price
}
