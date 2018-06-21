function  distanceFromHqInBlocks(distance) {
  if (distance > 42){
    return distance - 42
  }
  else if (distance < 42){
    return 42 - distance
  }
}

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, end){
  if (start > end){
    return (start - end) * 264
  }  else if (end > start){
    return (end - start) * 264
  }
}

function calculatesFarePrice(start, destination){
  let distanceOver400 = distanceTravelledInFeet(start, destination) - 400

  if (distanceTravelledInFeet(start, destination) < 400){
    return 0
  } else if (distanceTravelledInFeet(start, destination) > 400 & distanceTravelledInFeet(start, destination) < 2000){
    return (distanceTravelledInFeet(start, destination) - 400) * .02
  } else if (distanceTravelledInFeet(start, destination) > 2000 & distanceTravelledInFeet(start, destination) < 2500){
    return 25
  }
  else if (distanceTravelledInFeet(start, destination) > 2500) {
    return "cannot travel that far"
  }
}
