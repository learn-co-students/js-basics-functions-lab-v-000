function distanceFromHqInBlocks(someValue) {
  if (someValue > 42)
    {return someValue - 42;} 
  else 
    {return 42 - someValue;}
}

function distanceFromHqInFeet(someValue) {
  let blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
  //returns a distance in feet
}

function distanceTravelledInFeet(start, end ) {
  if (start > end) {
    let blocks = start - end;
    return blocks * 264;}
  else {
    let blocks = end - start;
    return blocks * 264;}
}

function calculatesFarePrice(start, end) {
  let x = distanceTravelledInFeet(start, end);
  if (x <= 400) {
    return 0;}
  else if (x > 400 && x < 2000) {
    return (x - 400) * 0.02;}
  else if (x > 2000 && x < 2500) {
    return 25;}
  else if (x > 2500) {
    return 'cannot travel that far';}
}


