// Code your solution in this file!
const distanceFromHqInBlocks = (blocks) => {
  if (blocks > 42) {
    return blocks - 42;
  }
  return 42 - blocks;
};

const distanceFromHqInFeet = blocks => distanceFromHqInBlocks(blocks) * 264;

const distanceTravelledInFeet = (start, destination) => {
  if (start < destination) {
    return (destination - start) * 264;
  }
  return (start - destination) * 264;
};

const calculatesFarePrice = (start, destination) => {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * distance;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  return 'cannot travel that far';
};
