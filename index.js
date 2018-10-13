function distanceFromHqInBlocks(streetNumber){
  return (streetNumber > 42 ? streetNumber - 42 : 42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber){
  return (distanceFromHqInBlocks(streetNumber) * 264);
}

function distanceTravelledInFeet(startingBlock, endingBlock){
  if (startingBlock > endingBlock) {
      return (startingBlock - endingBlock) * 264;
  } else {
      return (endingBlock - startingBlock) * 264;
  }
}

function calculatesFarePrice(startingBlock, endingBlock){
  const distance = distanceTravelledInFeet(startingBlock, endingBlock)

  if (distance <= 400) {
      return 0;
  } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) / 100 * 2;
  } else if (distance > 2000 && distance < 2500) {
      return 25;
  } else {
      return "cannot travel that far";
  }
}

// NOT SURE WHY THIS DOESN'T WORK ...
// function calculatesFarePrice(startingBlock, endingBlock){
//   const distance = distanceTravelledInFeet(startingBlock, endingBlock)
//
//   switch (distance) {
//       case (distance <= 400):
//           return 0;
//
//       case (distance > 400 && distance <= 2000):
//           return (distance - 400) / 100 * 2;
//
//       case (distance > 2000 && distance < 2500):
//           return 25;
//
//       case (distance > 2500:
//           return "cannot travel that far";
//
//     }
// }
