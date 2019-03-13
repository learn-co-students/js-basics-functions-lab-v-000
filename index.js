// Code your solution in this file!
function distanceFromHqInBlocks (pickupBlockNum) {
  const hqBlockNum = 42
  return Math.abs(hqBlockNum - pickupBlockNum)
}


function distanceFromHqInFeet(blockNum) {
  const blockLength = 264;
  return distanceFromHqInBlocks(blockNum) * blockLength;
}

function distanceTravelledInFeet(blockA, blockB) {
  return Math.abs(blockA - blockB) * 264
}


function calculatesFarePrice(start, destination) {

  const distance = distanceTravelledInFeet(start, destination);

  switch (true) {
    case (distance <= 400):
      return 0;

      case (distance > 400 && distance < 2000):
        return (distance - 400) * 0.02 ;

      case (distance >= 2000 && distance < 2500):
        return 25;

      case (distance >= 2500):
        return "cannot travel that far";

      default:
        return 50;
    }

}
