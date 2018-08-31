// Code your solution in this file!
function distanceFromHqInBlocks(block){
  let distance = 0;
  if (block >= 42){
    distance = block - 42;
  }
    else{
    distance = 42 - block;
    }
    return distance;
};

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(a, b){
  return Math.abs((b - a) * 264)
}

function calculatesFarePrice(start, destination){
  let d = distanceTravelledInFeet(start, destination);
    if (d < 400){
      return 0;
    }
    else if(d < 2000){
      return  (d - 400)*(.02)
    }
    else if (d > 2000 && d < 2500) {
      return 25;
    }
    else {
      return 'cannot travel that far'
    }

}
