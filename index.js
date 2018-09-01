// Code your solution in this file!

function distanceFromHqInBlocks(distance){
  const hq = 42
  if (distance >= hq) {
    return distance - hq
  } else {
    return hq - distance
  }
}

function distanceFromHqInFeet(distance){
  const hq = 42
  const convert = 264
  if (distance >= hq) {
    return (distance - hq) * convert
  } else {
    return (hq - distance) * convert
  }
}

function distanceTravelledInFeet(distance){
  
}
