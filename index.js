function distanceFromHqInBlocks(pickup) {
  let distance = Math.abs(42 - pickup);
  return distance;
}

function distanceFromHqInFeet(pickup) {
  let distance = distanceFromHqInBlocks(pickup) * 264;
  return distance;
}

function distanceTravelledInFeet(start, end) {
  let distance = Math.abs(end - start) * 264;
  return distance;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare;
  switch (true) {
    case distance <= 400:
      fare = 0;
      break;
    case distance > 400 && distance <= 2000:
      fare = (distance - 400) * 0.02;
      break;
    case distance > 2000 && distance <= 2500:
      fare = 25;
      break;
    case distance > 2500:
      fare = "cannot travel that far";
      break;
  }
  return fare;
}
