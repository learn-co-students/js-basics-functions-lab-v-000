// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street-42);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street)*264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((start-end)*264)
}

function calculatesFarePrice(start, end) {
  let fare = 0;
  let distance = distanceTravelledInFeet(start, end)
  if (distance > 2500){
    fare = 'cannot travel that far'
  } else if (distance > 2000) {
    fare = 25
  } else if (distance > 400) {
    fare = (distance - 400) * .02
  }
  return fare;
}
