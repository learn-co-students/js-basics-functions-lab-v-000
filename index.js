// Code your solution in this file!
function distanceFromHqInBlocks(number) {
  let result
  if (number >= 42){
    result = number - 42
  } else {
    result = 42 - number
  }
  return result
}

function distanceFromHqInFeet(number) {
  let result
  result = distanceFromHqInBlocks(number) * 264
  return result
}

function distanceTravelledInFeet(start, finish) {
  let result
  if (start >= finish) {
    result = (start - finish) * 264
  }  else {
    result = (finish - start) * 264
  }
  return result
}

function calculatesFarePrice(start, finish) {
  let result
  const feet = distanceTravelledInFeet(start, finish)
  if (feet <= 400) {
    result = 0
  } else if (feet > 400 && feet <= 2000) {
    result = (feet - 400) * .02
  } else if (feet > 2000 && feet <= 2500) {
    result = 25
  } else if (feet > 2500) {
    result = "cannot travel that far"
  }
  return result
}
