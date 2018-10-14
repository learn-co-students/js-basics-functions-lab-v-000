// Code your solution in this file!
const distanceFromHqInBlocks = street => {
  return Math.abs(street - 42);
};

const distanceFromHqInFeet = street => {
  return distanceFromHqInBlocks(street) * 264;
};

const distanceTravelledInFeet = (street1, street2) => {
  return Math.abs(street1 - street2) * 264;
};

const calculatesFarePrice = (start, destination) => {
  const effectiveDistance = distanceTravelledInFeet(start, destination) - 400;
  if (effectiveDistance <= 0) {
    return 0;
  }
  else if (effectiveDistance > 0 && effectiveDistance <= 1600) {
    return effectiveDistance * 0.02;
  }
  else if (effectiveDistance > 1600 && effectiveDistance <= 2100) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
};
