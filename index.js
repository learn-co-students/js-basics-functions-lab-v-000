// Code your solution in this file!

function distanceFromHqInBlocks(num){
  let blocks;
  const hq = 42;

    if (num >= hq){
      blocks = num - hq ;
    } else {
      blocks = hq - num;
    }
  return blocks
}

function distanceFromHqInFeet(num){
  const blockToFeet = 264;
  let feet;

  feet = distanceFromHqInBlocks(num) * blockToFeet

  return feet
}

function distanceTravelledInFeet(x,b){
  let start = x;
  let finish = b;
  let traveled;

  traveled = distanceFromHqInFeet(finish) - distanceFromHqInFeet(start)

  return traveled;

}

function calculatesFarePrice(start, finish){
  const total = distanceTravelledInFeet(start,finish)

    if (total < 400){
      return 0;
    } else if (total > 400 && total <= 2000){
      return .02 * (total - 400);
    } else if (total > 2000 && total <= 2500){
      return 25;
    } else {
      return 'cannot travel that far'
    }
}
