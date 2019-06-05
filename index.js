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
  distanceFromHqInBlocks(inFeet);
  distanceFromHqInFeet(inFeet);
  let result;
  if (inFeet == 43, 48) {
    result = 1320;
  }
  else if (inFeet == 50 - 60) {
    result = 2640;
  }
  return result;
}