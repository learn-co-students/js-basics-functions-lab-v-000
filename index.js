// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  //  distance - 42
  return distance >= 42 ? distance - 42 : distance - 26

}
function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264
}
function distanceTravelledInFeet(distanceA,distanceB){
  // value a is distance b to c
  // value b is distance a to b
  if (distanceB > distanceA){
    return distanceFromHqInFeet(distanceB) - distanceFromHqInFeet(distanceA)
  }else{
    return distanceFromHqInFeet(distanceA) - distanceFromHqInFeet(distanceB)
  }
}
function calculatesFarePrice(start,destination){
  distance_traveled = distanceTravelledInFeet(start,destination)
  
  if (distance_traveled > 2500){
    return 'cannot travel that far'
  } else if (distance_traveled > 2000){
    return 25
  }else if (distance_traveled >= 400 && distance_traveled <= 2000){
    return 2.56
  }else {
    return 0
  }
}
