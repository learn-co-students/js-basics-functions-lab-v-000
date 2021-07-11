// returns distance of customer in blocks (int) from HQ @ 42nd St.
function distanceFromHqInBlocks(loc) {
  const hQ = 42;
  result = hQ - loc;
  return Math.abs(result);
}

// returns distance of customer in feet (int) from HQ @ 42nd St. - 1 block = 264 ft 
function distanceFromHqInFeet(loc) {
  result = distanceFromHqInBlocks(loc) * 264;
  return result;
}

// returns the distance travelled in feet from two blocks, expressed as integers
function distanceTravelledInFeet(start, destination) {
  distance = Math.abs(start - destination) * 264;
  return distance;
}

// gives cust. free sample for 400 ft, $0.02/ft b/w 400 - 2000 ft, $25 for distance > 2000 ft, does not allow rides > 2500 ft
function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    farePrice = 0;
  }
  else if (distance <= 2000) {
    farePrice = (distance - 400) * 0.02;
  }
  else if (distance <= 2500) {
    farePrice = 25;
  }
  else {
    farePrice = 'cannot travel that far';
  }
  return farePrice;
}
