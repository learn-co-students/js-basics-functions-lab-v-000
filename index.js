// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42)
}
function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}
function distanceTravelledInFeet(n,m) {
  return Math.abs((n - m) * 264)
}
function calculatesFarePrice(n, m) {
  if(distanceTravelledInFeet(n, m) <= 400) {
    return 0
  } else if (distanceTravelledInFeet(n, m) <= 2000) {
    return (distanceTravelledInFeet(n, m) - 400) * .02
  } else if (distanceTravelledInFeet(n, m) <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
