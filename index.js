const hq = 42
const conversion = 264

distanceFromHqInBlocks = (distance) => {
  return Math.abs(distance - hq)
}

distanceFromHqInFeet = (distance) => {
  return distanceFromHqInBlocks(distance) * conversion
}

distanceTravelledInFeet = (start, end) => {
  let distance = Math.abs(end - start)
  return distance * conversion
}

calculatesFarePrice = (start, end) => {
  let distance = distanceTravelledInFeet(start, end)
  let pricePerFt = .02

  switch(true) {
    case distance <= 400:
      return 0
    case distance > 400 && distance <= 2000:
      return ((distance - 400) * pricePerFt)
      break
    case distance > 2000 && distance <= 2500:
      return 25
    case distance > 2500:
      return 'cannot travel that far'
    default:
      return 0
  }
}
