// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  const fromBlock = 42;

  return Math.abs(distance - fromBlock);
}

function distanceFromHqInFeet(distance) {
  const feet = 264;

  return (distanceFromHqInBlocks(distance) * feet);
}

function distanceTravelledInFeet(fromDistance, toDistance) {
  const feet = 264;

  return (Math.abs(toDistance - fromDistance) * feet);
}

function calculatesFarePrice(start, destination) {
  const freeSample = 400;

  const distance = distanceTravelledInFeet(start, destination);

  if (distance > 2500) {
    console.log(`>2500 ${distance}`);
    return 'cannot travel that far';
  } else if (distance > 2000) {
    console.log(`>2000 ${distance}`);
    return 25;
  } else if (distance > 400) {
    console.log(`>400${distance}`);
    return ((distance - freeSample) * 0.02);
  } else {
    console.log(`0 ${distance}`);
    return 0;
  }
}

function calculatesFarePriceX(start, destination) {
  const freeSample = 400;

  const distance = distanceTravelledInFeet(start, destination);

  switch (true) {
    case (distance > 2500):
      console.log(`>2500 ${distance}`);
      return 'cannot travel that far';
    case (distance > 2000):
      console.log(`>2000 ${distance}`);
      return 25;
    case (distance > 400):
      console.log(`>400${distance}`);
      return ((distance - freeSample) * 0.02);
    default:
      console.log(`0 ${distance}`);
      return 0;
  }
}
