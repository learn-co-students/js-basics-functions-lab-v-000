// Code your solution in this file!
function distanceFromHqInBlocks(dest) {
  return Math.abs(42 - dest)
}

function distanceFromHqInFeet(dest) {
  const blocks = distanceFromHqInBlocks(dest)
  return blocks * 264
}

function distanceTravelledInFeet(start, dest) {
  const blocks = Math.abs(start - dest)
  return blocks * 264
}

function calculatesFarePrice(start, dest) {
  const feet = distanceTravelledInFeet(start, dest)
  if (feet <= 400) {
    return 0
  } else if (feet > 2500) {
    return 'cannot travel that far'
  } else if (feet > 2000) {
    return 25
  } else {
    return (feet - 400)*0.02
  }
}
