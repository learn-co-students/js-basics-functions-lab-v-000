// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let answer;
  answer = Math.abs(street - 42)
  return answer
}

function distanceFromHqInFeet(street) {
  let answer;
  blocks = distanceFromHqInBlocks(street)
  answer = (blocks*264)
  return answer
}

function distanceTravelledInFeet(street_1, street_2) {
  let number;
  number = 264*Math.abs(street_1-street_2)
  return number
}

function calculatesFarePrice(start, destination) {
  let number = distanceTravelledInFeet(start, destination);
  let result;
  if (number < 400) {
    result = 0
  }
  else if (400 < number && number < 2000) {
    result = (number - 400)*.02;
  }
  else if (2000 < number && number < 2500) {
    result = 25;
  }
  else if (number > 2500) {
    result = 'cannot travel that far';
  }
  return result
}
