// Code your solution in this file!
let start = 42;
let destination = '';
let distance;
let distanceinfeet;
const block = 264;

console.log("hello world")
function calculateVertical(distance){
 distanceinfeet = (distance)*block
  return distance;
}

function distanceFromHqInBlocks(destination) {
  if(destination > start) {
    distance = (destination - start)
    return distance;
  } else if(destination < start) {
    distance = (start - destination)
    return distance;
  }
}

function distanceFromHqInFeet(destination) {
  if(destination > start) {
    distance = (destination - start)
    calculateVertical(distance)
    return distanceinfeet;
  } else if(destination < start) {
    distance = (start - destination)
    calculateVertical(distance)
    return distanceinfeet;  }
}

function distanceTravelledInFeet(begin, destination) {
  if(destination > begin) {
    distanceinfeet = (destination - begin)*block
    return distanceinfeet;
  } else if(destination < begin) {
    distanceinfeet = (begin - destination)*block
    return distanceinfeet;
  }
}
function calculatesFarePrice(begin, destination) {
  if(distanceTravelledInFeet(begin, destination) <= 400) {
    cost = 0
    return cost;
  }else if(distanceTravelledInFeet(begin, destination) > 400 && distanceTravelledInFeet(begin, destination) < 2000){
    cost = distanceTravelledInFeet(begin, destination)*0.02
    return cost;
  }else if(distanceTravelledInFeet(begin, destination) > 2000 && distanceTravelledInFeet(begin, destination) < 2500){
    cost = 25
    return cost;
  }else if(distanceTravelledInFeet(begin, destination) > 2500){
    cost = 'cannot travel that far'
    return cost
    console.log(cost);
  }
}
