const hq = 42

function distanceFromHqInBlocks(stNumber) {
  let result
  if (hq <= stNumber) {
    result = stNumber - hq;
  } else if (hq > stNumber) {
    result = hq - stNumber;
  }
  return result
}

function distanceFromHqInFeet(stNumber) {
  let result = distanceFromHqInBlocks(stNumber) * 264;
  return result
}

function distanceTravelledInFeet(stNumber1, stNumber2) {
  let result = distanceFromHqInFeet(stNumber2) - distanceFromHqInFeet(stNumber1);
  // if (stNumber1 <= stNumber2) {
  //   result = distanceFromHqInFeet(stNumber2) - distanceFromHqInFeet(stNumber1);
  // } else if (stNumber1 > stNumber2) {
  //   result = distanceFromHqInFeet(stNumber2) - distanceFromHqInFeet(stNumber1);
  // }
  return result
}

function calculatesFarePrice(stN1, stN2) {
  let free = 400
  let dist = distanceTravelledInFeet(stN1, stN2)
  let fare
  if (dist <= free) {
    fare = 0;
  } else if (dist > free && dist <= 2000) {
    fare = (dist - free) * .02;
  } else if (dist > 2000 && dist <= 2500) {
    fare = 25
  } else {
    fare = 'cannot travel that far';
  }
  return fare
}
