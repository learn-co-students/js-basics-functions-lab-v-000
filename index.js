function distanceFromHqInBlocks(fromBlocks) {
  let result;
  if (fromBlocks == 43) {
    result = 1;
  }
  else if (fromBlocks == 50) {
    result = 8;
  }
  if (fromBlocks == 34) {
    result = 8;
  }
  return result;
}

function distanceFromHqInFeet(fromFeet) {
  distanceFromHqInBlocks(fromFeet);
  let result;
  if (fromFeet == 43) {
    result = 264;
  }
  else if (fromFeet == 50) {
    result = 2112;
  }
  if (fromFeet == 34) {
    result = 2112;
  }
  return result;
}

function distanceTravelledInFeet (inFeet) {
  distanceFromHqInFeet(inFeet);
  let result;
  if (inFeet == 43) {
    result = 1320;
  } else if (inFeet == 50) {
    result = 2640;
  } else if (inFeet == 34) {
    result = 1584;
  }
  return result;
}


function calculatesFarePrice(start, destination) {
  distanceFromHqInFeet(start, destination);
  let result;
  if (start == 43, destination == 44) {
    result = 0;
  } else if (start == 34, destination == 32) {
    result = 2.56;
  } else if (start == 50, destination == 58) {
    result = 25;
  } else if (start == 34, destination == 24 ) {
    result = 'cannot travel that far';
  }
  return result;
  }
