// Code your solution in this file!
function distanceFromHqInBlocks(st) {
  return st < 42 ? 42 - st : st - 42
}

function distanceFromHqInFeet(st) {
  return distanceFromHqInBlocks(st) * 264
}

function distanceTravelledInFeet(start, finish) {
  return start < finish ? (finish - start) * 264 : (start - finish) * 264
}

function calculatesFarePrice(start, finish) {
  let feet = distanceTravelledInFeet(start, finish)
  if (feet < 400) {
    fare = 0
  } else if (feet > 2500) {
    fare = 'cannot travel that far'
  } else if (feet > 2000) {
    fare = 25
  } else if (feet > 400) {
    fare = (0.02 * (feet - 400))
  }
  return fare
}
