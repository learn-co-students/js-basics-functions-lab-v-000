// Code your solution in this file!
function distanceFromHqInBlocks(block) {
let dist;
 
if (block > 42) {
  dist =  (block - 42);
} else if (block < 42) {
  dist = (42 - block);
}
return dist;
}

function distanceFromHqInFeet(feet) {
  let block = 264
  dist = distanceFromHqInBlocks(feet) * 264;
  return dist;
}

function distanceTravelledInFeet(hq, block) {
  let dist; 
  if (block > hq) {
  dist = ((block-hq) *264);
  } else if (hq > block){
  dist = ((hq-block) *264);
  }
  return dist;

}

function calculatesFarePrice(start, destination){
  let total = distanceTravelledInFeet(start, destination)-400;
  let cost = 0.02;

  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (total <= 1600) {
    return cost * total;
  } else if (total <= 2000) {
    return 25;
  } else if (total <= 2500 ) {
    return 'cannot travel that far';
  }
  
}