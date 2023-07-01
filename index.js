let distanceFromHqInBlocks = (num) => Math.abs(num - 42)

let distanceFromHqInFeet = (num) => Math.abs(distanceFromHqInBlocks(num) * 264)

let distanceTravelledInFeet = (startNum, endNum) => Math.abs(endNum - startNum) * 264

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}