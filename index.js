// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  let distance

  if (pickup <= 42) {
    distance = 42 - pickup
  }
  else if (pickup > 42) {
    distance = pickup - 42
  }
  return distance
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(startblock, endblock) {
  if (startblock > endblock) {
   return (startblock - endblock) * 264
 }
   else if (startblock < endblock) {
     return (endblock - startblock) * 264
   }
}

function calculatesFarePrice(startblock, endblock) {
  const feet = distanceTravelledInFeet(startblock, endblock);

    if (feet <= 400) {
      return 0
    }
    else if (feet > 400 && feet < 2000) {
      return (feet - 400) * .02
    }
    else if (feet > 2000 && feet < 2500) {
      return 25
    }
    else if (feet > 2500) {
      return "cannot travel that far"
    }
}
