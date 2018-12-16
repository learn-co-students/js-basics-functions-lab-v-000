function distanceFromHqInBlocks(street){
  distance = (street - 42) > 0 ? street - 42 : 42 - street
  return distance
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(s1, s2){
  ft = (s2 - s1) * 264 > 0 ? (s2 - s1) * 264 : (s1 - s2) * 264
  return ft
}

function calculatesFarePrice(start, destination){
  d = distanceTravelledInFeet(start, destination)
  if (d <= 400){
    return 0
  } else if (400 < d && d < 2000){
    return .02 * (d - 400)
  } else if (2000 <= d && d < 2500){
    return 25
  } else {
    return 'cannot travel that far'
  }
}
