// Code your solution in this file!

function distanceFromHqInBlocks(street){
  return Math.abs(42 - street)
}

function distanceFromHqInFeet(street) {
  return Math.abs((42 - street)*264)
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((start - end)*264)
}

function calculatesFarePrice(start, end) {
  const length = distanceTravelledInFeet(start, end)
  if (length < 400) {
      return 0 }
  else if (length >= 400 && length <= 2000) {
      return (length - 400) *.02 }
  else if (length > 2000 && length <= 2500) {
      return 25 }
  else if (length > 2500) {return 'cannot travel that far'}
}
