function distanceFromHqInBlocks(streetNumber) {
  let blocksFromHq;
    if (streetNumber >= 42) {
      blocksFromHq = (streetNumber - 42);
    } else {
      blocksFromHq = (42 - streetNumber);
    }
  return blocksFromHq;
}

function distanceFromHqInFeet(streetNumber) {
  let feetFromHq = (distanceFromHqInBlocks(streetNumber)*264);
  return feetFromHq;
}

function distanceTravelledInFeet(pointA, pointB) {
  let distanceTotalFeet;
    if (pointA > pointB) {
      distanceTotalFeet = ((pointA - pointB)*264);
    } else {
      distanceTotalFeet = ((pointB - pointA)*264);
    }
    return distanceTotalFeet;
}

function calculatesFarePrice(pointA, pointB) {
  let totalFeet = distanceTravelledInFeet(pointA, pointB);
  let rate;
    if (totalFeet <= 400) {
      rate = 0;
    }
    else if (totalFeet > 400 && totalFeet <= 2000) {
      rate = ((totalFeet-400)*2/100);
    }
    else if (totalFeet > 2000 && totalFeet <2500) {
      rate = 25;
    }
    else {
      rate = "cannot travel that far";
    }
    return rate;
}
