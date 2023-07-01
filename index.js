// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs(startingBlock - endingBlock) * 264;
}


function calculatesFarePrice(start, destination) {
  let tripLength = distanceTravelledInFeet(start, destination);
  let fare;

  switch (true) {
    case tripLength < 400:
    fare = 0
    break;
    case tripLength > 400 && tripLength <= 2000:
    fare = tripLength * .02;
    break;
    case tripLength > 2000 && tripLength < 2500:
    fare = 25;
    break;
    case tripLength > 2500:
    return 'cannot travel that far';
    break;
  }
  return fare;
}
