function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start,end) {
  return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start,end) {
  var distance = distanceTravelledInFeet(start,end);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000){
      return 0.02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
}
