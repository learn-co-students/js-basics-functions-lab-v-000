function distanceFromHqInBlocks(street){
  if (street > 42) {
    return street - 42
  } else if (street < 42){
    return 42 - street
  } else {
    return 0
  }
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(firstDistance, secondDistance){
  if(firstDistance > secondDistance) {
    return (firstDistance - secondDistance) * 264
  } else if (firstDistance < secondDistance) {
    return (secondDistance - firstDistance) * 264
  } else {
    return 0
  }
}

function calculatesFarePrice(firstDistance, secondDistance){
  distance = distanceTravelledInFeet(firstDistance, secondDistance)
  if(distance < 400){
    return 0
  } else if (distance <= 2000){
    return distance * 0.02
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}