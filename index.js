// Code your solution in this file!

function distanceFromHqInBlocks(distance, hq = 42) {
  if (distance > hq)
    return distance - hq;
  else 
    return hq - distance;
}

function distanceFromHqInFeet(distance, hq = 42) {
  if (distance > hq)
    return (distance - hq) * 264;
  else 
    return (hq - distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination)
    return (start - destination) * 264;
  else 
    return (destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination)
  if (feet < 400)
    return 0;
  else if (feet > 400 && feet < 2000)
    return (feet - 400)* .02
  else if (feet > 2000 && feet < 2500)
    return 25
  else return 'cannot travel that far'
}

