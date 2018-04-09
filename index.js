// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  if(blocks > 42){
    return blocks - 42;
  }
  else if(blocks < 42){
    return 42 % blocks;
  }
}

function distanceFromHqInFeet(blocks){
  const distance = distanceFromHqInBlocks(blocks);
  return distance * 264;
}

function distanceTravelledInFeet(start, end){
  const blocks = Math.abs(start - end);
  return blocks * 264;
}

function calculatesFarePrice(start, end){
  const feet = distanceTravelledInFeet(start, end)
  const actual = feet - 400;
  switch(true){
    case feet > 2500:
      return 'cannot travel that far'
      break;
    case feet > 2000:
      return 25;
      break;
    case feet <= 400:
      return 0;
      break;
    case feet > 400:
      return .02 * actual
      break;
  }
}
