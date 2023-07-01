// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  if (street >= 42) {
    return street - 42
  } else {
    return 42 - street
  }
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(from, to) {
  const distance = from >= to ? from - to : to - from
  return distance * 264
}

function calculatesFarePrice(from, to) {
  const chargedFeet = distanceTravelledInFeet(from, to)
  let price
  if (chargedFeet <= 400 ) {
    price = 0
  } else if (chargedFeet < 2000) {
    price = (chargedFeet - 400) * 0.02
  } else if (chargedFeet > 2000 && chargedFeet < 2500) {
    price = 25
  } else {
    price = 'cannot travel that far'
  }
  return price
}
