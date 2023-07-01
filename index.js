// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  
  return Math.abs(distance - 42);

  
}

function distanceFromHqInFeet (distance) {
  
  const blocks = distanceFromHqInBlocks(distance);
  
  return blocks * 264;
}

function distanceTravelledInFeet (startlocale, endlocale) {
  
  return Math.abs(startlocale - endlocale) * 264;
  
}

function calculatesFarePrice (startlocale, endlocale) {
  
  const dist = distanceTravelledInFeet (startlocale, endlocale);

  switch (true) {
    case dist <= 400:
      return 0;
    case dist <= 2000:
      return (dist - 400) * 0.02;
    case dist <= 2500:
      return 25;
    default:
      return 'cannot travel that far';
  }
}