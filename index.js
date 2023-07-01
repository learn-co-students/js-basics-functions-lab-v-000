// Code your solution in this file!

function distanceFromHqInBlocks (blockNumber) {
  return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (southBlockNumber, northBlockNumber) {
  return Math.abs((northBlockNumber - southBlockNumber) * 264);
}

function calculatesFarePrice(southBlockNumber, northBlockNumber) {
  let feet = distanceTravelledInFeet(southBlockNumber, northBlockNumber);
  let fare;

  switch (true) {
    case feet <= 400:
      fare = 0;
      break;
    case feet <= 2000:
      fare = (feet - 400) * .02;
      break;
    case feet <= 2500:
      fare = 25;
      break;
    case feet > 2500:
      fare = 'cannot travel that far';
      break;
  }

  return fare;  
}
