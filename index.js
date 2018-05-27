// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
    return Math.abs(distanceFromHqInBlocks(blocks) * 264)
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(distanceFromHqInFeet(end) - distanceFromHqInFeet(start))
}

function calculatesFarePrice (start, end) {
  if (distanceTravelledInFeet(start, end) < 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, end) < 2000) {
    return (distanceTravelledInFeet(start, end) - 400) * .02;
  } else if (distanceTravelledInFeet(start, end) < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
