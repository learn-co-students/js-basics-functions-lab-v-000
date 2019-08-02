// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  const hq = 42;
  return Math.abs(Number.parseInt(distance) - hq)
};

function distanceFromHqInFeet(distance) {
  return (distanceFromHqInBlocks(distance) * 264)
};

function distanceTravelledInFeet(start, destination){
  //find number of blocks travelled and multiply by 264
  let travel = Math.abs(start - destination)
  return travel * 264
};

function calculatesFarePrice(start, destination) {
  //first 400ft are free, 2c/ft after 400 to 2000ft, flat price over 2000ft to 2500ft, no rides over 2500ft
  let travel = distanceTravelledInFeet(start, destination)
    if (travel <= 400) {
      return 0;
    } else if (travel > 400 && travel <= 2000) {
        return (travel - 400) * 0.02;
    } else if (travel > 2000 && travel <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
  };
