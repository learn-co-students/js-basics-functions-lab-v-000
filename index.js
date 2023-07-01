// Code your solution in this file!
function distanceFromHqInBlocks(dest) {
 value = Math.abs(42-dest)

  return value
}

function distanceFromHqInFeet(dest) {
  value = 264 * distanceFromHqInBlocks(dest)

  return value
}

function distanceTravelledInFeet(one, two) {
  valueInBlocks = Math.abs(one - two)
  valueInFeet = valueInBlocks * 264

  return valueInFeet
}

function calculatesFarePrice(one, two) {
  distance = distanceTravelledInFeet(one, two)

  switch (true) {
    case distance <= 400:
      fare = 0
      break;
    case distance >= 2500:
      fare = 'cannot travel that far'
      break;
    case distance >= 2000:
      fare = 25
      break;
    case distance <= 2000:
      fare = ((distance - 400) * .02)
      break;
    }
    return fare
}
