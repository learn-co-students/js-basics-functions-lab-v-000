// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42-blocks;
  }
}


function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(starting, ending) {
  if (starting >= ending) {
    return (starting-ending)*264;
  } else {
    return (ending-starting)*264;
  }
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) >= 2500) {
    return "cannot travel that far";
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25;
  } else if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
    return distanceTravelledInFeet(start, destination)*0.02
  }
}
