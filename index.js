function distanceFromHqInBlocks(block) {
  return block >= 42 ? block - 42 : 42 - block;
}

function distanceFromHqInFeet(block) {return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(b, c) {
  return b > c ? (b-c)*264 : (c-b)*264;
}
function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0
  }
  else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000)
  {return .02 * (distanceTravelledInFeet(start, destination) - 400) }
  else if (distanceTravelledInFeet(start, destination) > 2001 && distanceTravelledInFeet(start, destination) < 2500) {  return 25;}

  else if (distanceTravelledInFeet(start, destination) > 2500) {
  return 'cannot travel that far';
  }

}
