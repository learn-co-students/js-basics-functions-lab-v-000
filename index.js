function distanceFromHqInBlocks (street) {
 if (street > 42) {
   return street - 42
 }

 else {
   return 42- street
 }
}

function distanceFromHqInFeet (street) {
  return distanceFromHqInBlocks(street)*264
}

function distanceTravelledInFeet (a,b) {
  if (a > b) {
    return (a-b)*264
  }
  else {
    return (b-a)*264
  }
}

function calculatesFarePrice (a,b) {
  const distance = distanceTravelledInFeet (a,b)
  if (distance <= 400) {
    return 0
  }
  else if (distance > 400 & distance < 2000) {
    return distance*.02
  }

  else if (distance > 2000 && distance < 2500) {
    return 25
  }

  else {
    return "cannot travel that far"
  }

}
