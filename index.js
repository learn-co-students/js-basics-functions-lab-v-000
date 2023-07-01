// Code your solution in this file!

function distanceFromHqInBlocks(distance){
  if (distance > 42 ){
  return distance - 42
}
  else {
  return 42 - distance
  }
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, end){
  if (end > start){
  const distance = (end - start) * 264
  return distance
  }
  else {
  const distance = (start - end) * 264
  return distance
  }
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)

  if (distance < 400){
  return 0
  }
  else if (distance > 400 && distance < 2000) {
    const fare = (distance - 400) *.02
    return fare
  }
  else if (distance > 2000 && distance < 2500) {
    return 25
  }
  else
  return "cannot travel that far"
}
