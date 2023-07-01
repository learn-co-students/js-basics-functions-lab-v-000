// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet (block) {
  feet = distanceFromHqInBlocks(block) * 264;
  return feet;
}

function distanceTravelledInFeet(startblock, endblock) {
   if (startblock < endblock) {
     return (endblock - startblock) * 264;
   } else {
     return (startblock- endblock) * 264;
   }
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return distance * 0.02;
  } else if ( distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far"
  }
}
